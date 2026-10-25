import * as __sharedRuntime from '../shared-runtime.js';

const React = __sharedRuntime.Q;
const h = __sharedRuntime.b;

export default function NaloxoneMap({ onBack }) {
  const mapRef = React.useRef(null);
  const [mapUnavailable, setMapUnavailable] = React.useState(false);
  const [selectedSite, setSelectedSite] = React.useState(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    if (!window.L) {
      setMapUnavailable(true);
      return;
    }

    const L = window.L;

    // On phones, show location details in a compact overlay instead of a Leaflet
    // popup. Leaflet's popup auto-pan can move the map enough that the selected
    // marker feels disconnected from its details on a small screen.
    const useCompactLocationCard = typeof window.matchMedia === 'function'
      ? window.matchMedia('(max-width: 640px), (pointer: coarse)').matches
      : window.innerWidth <= 640;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      scrollWheelZoom: true,
      preferCanvas: true,
      worldCopyJump: false
    }).setView([37.70, -122.15], 9);

    L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a> &middot; Tiles &copy; <a href="https://www.openstreetmap.de/" target="_blank" rel="noreferrer">OpenStreetMap Deutschland</a> &middot; U.S. Census Bureau'
    }).addTo(map);

    const county = L.geoJSON(__sharedRuntime.ALAMEDA_COUNTY_BOUNDARY, {
      interactive: false,
      style: () => ({
        color: '#C08497',
        weight: 2.5,
        opacity: 0.88,
        fillColor: '#FF7F82',
        fillOpacity: 0.055
      })
    }).addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);
    L.control.scale({ position: 'bottomleft', imperial: false }).addTo(map);

    const clusterOptions = {
      maxClusterRadius: 34,
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      zoomToBoundsOnClick: true,
      iconCreateFunction: cluster => {
        const count = cluster.getChildCount();
        const size = count < 10 ? 'small' : count < 35 ? 'medium' : 'large';

        return L.divIcon({
          className: 'lf-map-cluster-holder',
          html: '<span class="lf-map-cluster lf-map-cluster--' + size + '">' + count + '</span>',
          iconSize: [42, 42]
        });
      }
    };

    const sites = L.markerClusterGroup
      ? L.markerClusterGroup(clusterOptions)
      : L.featureGroup();

    const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));

    const pin = L.divIcon({
      className: 'lf-map-pin-holder',
      html: '<span class="lf-map-pin"><span aria-hidden="true">+</span></span>',
      iconSize: [30, 36],
      iconAnchor: [15, 18],
      popupAnchor: [0, -17]
    });

    __sharedRuntime.LIFELINE_MAP_POINTS.forEach(site => {
      const address = [site.address, site.city, site.zip]
        .filter(Boolean)
        .join(', ');

      const directionsUrl =
        'https://www.google.com/maps/dir/?api=1&destination=' +
        encodeURIComponent(address);

      const marker = L.marker([site.lat, site.lng], {
        icon: pin,
        title: site.name,
        alt: site.name
      });

      if (useCompactLocationCard) {
        // Keep the map camera still on mobile. Put the card on the opposite
        // side of the map from the tapped marker so the marker stays visible.
        marker.on('click', () => {
          const point = map.latLngToContainerPoint(marker.getLatLng());

          setSelectedSite({
            name: site.name,
            address,
            location: site.location || 'Check with location',
            hours: site.hours || 'Check with location',
            fts: site.fts === 'Yes'
              ? 'Listed at this site'
              : 'Not listed at this site',
            directionsUrl,
            placement: point.y < map.getSize().y / 2
              ? 'bottom'
              : 'top'
          });
        });
      } else {
        // Preserve the existing Leaflet popup behavior on desktop.
        const popup =
          '<article class="lf-map-popup">' +
            '<h3 class="lf-map-popup__title">' +
              escapeHtml(site.name) +
            '</h3>' +
            '<p class="lf-map-popup__address">' +
              escapeHtml(address) +
            '</p>' +
            '<div class="lf-map-popup__line"><b>Access</b><span>' +
              escapeHtml(site.location || 'Check with location') +
            '</span></div>' +
            '<div class="lf-map-popup__line"><b>Hours</b><span>' +
              escapeHtml(site.hours || 'Check with location') +
            '</span></div>' +
            '<div class="lf-map-popup__line"><b>FTS</b><span>' +
              escapeHtml(site.fts === 'Yes'
                ? 'Listed at this site'
                : 'Not listed at this site') +
            '</span></div>' +
            '<a class="lf-map-popup__directions" href="' +
              directionsUrl +
              '" target="_blank" rel="noopener noreferrer">' +
              'Get directions ↗' +
            '</a>' +
          '</article>';

        marker.bindPopup(popup, {
          maxWidth: 290,
          autoPanPadding: [20, 20]
        });
      }

      marker.addTo(sites);
    });

    sites.addTo(map);
    map.fitBounds(county.getBounds().pad(0.035));

    const refresh = () => map.invalidateSize({ pan: false });
    const firstRefresh = window.setTimeout(refresh, 160);
    const secondRefresh = window.setTimeout(refresh, 650);

    window.addEventListener('resize', refresh);
    window.addEventListener('orientationchange', refresh);

    return () => {
      window.clearTimeout(firstRefresh);
      window.clearTimeout(secondRefresh);
      window.removeEventListener('resize', refresh);
      window.removeEventListener('orientationchange', refresh);
      map.remove();
    };
  }, []);

  // Compact mobile location card. Its placement changes depending on where the
  // selected pin sits, and any extra content can scroll inside the card.
  const selectedCardStyle = selectedSite ? {
    position: 'absolute',
    zIndex: 1000,
    left: 8,
    right: 8,
    top: selectedSite.placement === 'top' ? 30 : 'auto',
    bottom: selectedSite.placement === 'bottom' ? 8 : 'auto',
    maxHeight: '40%',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
    WebkitOverflowScrolling: 'touch',
    boxSizing: 'border-box',
    padding: '8px 10px',
    border: '1px solid rgba(192,132,151,.45)',
    borderRadius: 12,
    background: 'rgba(255,252,253,.98)',
    color: '#40353B',
    boxShadow: '0 8px 22px rgba(44,28,36,.2)',
    font: "10px/1.35 'Plus Jakarta Sans',sans-serif"
  } : null;

  return h.jsxs('div', {
    className: 'lf-scene lf-naloxone flex h-full w-full flex-col px-6 pb-5',
    children: [
      h.jsxs('div', {
        className: 'lf-naloxone-top',
        children: [
          h.jsxs('button', {
            type: 'button',
            onClick: onBack,
            className: 'flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5',
            style: { color: __sharedRuntime.Y.charcoal },
            children: [
              h.jsx(__sharedRuntime.n1, { className: 'h-3.5 w-3.5' }),
              h.jsx('span', {
                className: 'font-mono text-[10px] uppercase tracking-[0.18em]',
                children: 'Back'
              })
            ]
          }),
          h.jsx(__sharedRuntime.In, {
            bg: 'rgba(192,132,151,0.16)',
            fg: __sharedRuntime.Y.rose,
            children: '87 free boxes'
          })
        ]
      }),

      h.jsxs('div', {
        className: 'lf-naloxone-content',
        children: [
          h.jsxs('div', {
            className: 'lf-naloxone-intro',
            children: [
              h.jsx('p', {
                className: 'lf-naloxone-eyebrow',
                children: 'Alameda County · Free naloxone'
              }),
              h.jsx('h1', {
                className: 'lf-naloxone-title',
                children: 'Find Naloxone'
              }),
              h.jsx('p', {
                className: 'lf-naloxone-description',
                children: 'Naloxone can reverse an opioid overdose. These community boxes offer free naloxone across Alameda County. Open a map pin to check the address, access notes, and hours before you go.'
              })
            ]
          }),

          h.jsxs('div', {
            className: 'lf-map-card',
            style: { position: 'relative' },
            children: [
              h.jsxs('div', {
                className: 'lf-map-toolbar',
                children: [
                  h.jsxs('span', {
                    className: 'lf-map-count',
                    children: [
                      h.jsx('span', {
                        className: 'lf-map-legend-pin',
                        'aria-hidden': true
                      }),
                      '87 locations · 10 cities'
                    ]
                  }),
                  h.jsx('span', {
                    className: 'lf-map-instructions',
                    children: 'Select a pin for details · Use +/− or scroll to zoom'
                  })
                ]
              }),

              h.jsxs('div', {
                ref: mapRef,
                className: 'lf-naloxone-map',
                id: 'lf-naloxone-map',
                role: 'application',
                'aria-label': 'Zoomable map of 87 naloxone locations across Alameda County',
                children: [
                  mapUnavailable && h.jsxs('div', {
                    className: 'lf-map-fallback',
                    children: [
                      h.jsx('strong', {
                        children: 'The map needs an internet connection to load.'
                      }),
                      h.jsx('a', {
                        href: 'https://www.google.com/maps/d/viewer?mid=1aC62-BysAKH-ryR4e6iFdkHtxQRrhDs',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'Open the shared map'
                      })
                    ]
                  })
                ]
              }),

              selectedSite && h.jsxs('section', {
                className: 'lf-map-selected-site',
                role: 'status',
                'aria-label': 'Selected naloxone location details',
                style: selectedCardStyle,
                children: [
                  h.jsxs('div', {
                    style: {
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 8
                    },
                    children: [
                      h.jsx('h3', {
                        style: {
                          margin: 0,
                          minWidth: 0,
                          color: '#1A1719',
                          font: "600 13px/1.2 'Fredoka',sans-serif",
                          overflowWrap: 'anywhere'
                        },
                        children: selectedSite.name
                      }),
                      h.jsx('button', {
                        type: 'button',
                        onClick: () => setSelectedSite(null),
                        'aria-label': 'Close location details',
                        style: {
                          flex: '0 0 auto',
                          border: 0,
                          background: 'transparent',
                          color: '#8C4964',
                          font: '700 20px/1 Arial,sans-serif',
                          padding: '0 2px',
                          marginTop: -3,
                          cursor: 'pointer'
                        },
                        children: '×'
                      })
                    ]
                  }),

                  h.jsx('p', {
                    style: {
                      margin: '3px 0 6px',
                      color: '#756A71',
                      overflowWrap: 'anywhere'
                    },
                    children: selectedSite.address
                  }),

                  h.jsxs('div', {
                    style: {
                      display: 'grid',
                      gridTemplateColumns: '43px minmax(0,1fr)',
                      gap: '3px 6px',
                      marginBottom: 6
                    },
                    children: [
                      h.jsx('b', {
                        style: { color: '#8C4964' },
                        children: 'Access'
                      }),
                      h.jsx('span', {
                        style: { overflowWrap: 'anywhere' },
                        children: selectedSite.location
                      }),
                      h.jsx('b', {
                        style: { color: '#8C4964' },
                        children: 'Hours'
                      }),
                      h.jsx('span', {
                        style: { overflowWrap: 'anywhere' },
                        children: selectedSite.hours
                      }),
                      h.jsx('b', {
                        style: { color: '#8C4964' },
                        children: 'FTS'
                      }),
                      h.jsx('span', {
                        style: { overflowWrap: 'anywhere' },
                        children: selectedSite.fts
                      })
                    ]
                  }),

                  h.jsx('a', {
                    href: selectedSite.directionsUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'lf-map-popup__directions',
                    style: {
                      fontSize: 10,
                      padding: '5px 8px',
                      marginTop: 0
                    },
                    children: 'Get directions ↗'
                  })
                ]
              })
            ]
          }),

          h.jsxs('section', {
            className: 'lf-fts-warning',
            role: 'note',
            'aria-labelledby': 'lf-fts-title',
            children: [
              h.jsxs('div', {
                className: 'lf-fts-heading',
                children: [
                  h.jsx('span', {
                    className: 'lf-fts-icon',
                    'aria-hidden': true,
                    children: '!'
                  }),
                  h.jsx('h2', {
                    id: 'lf-fts-title',
                    children: 'Fentanyl test strips: important limits'
                  })
                ]
              }),
              h.jsxs('p', {
                children: [
                  'Fentanyl test strips (FTS) are small tests used to check a sample for fentanyl. They are a ',
                  h.jsx('strong', {
                    children: 'last-resort harm-reduction check—not a safety guarantee.'
                  }),
                  ' If someone may use a drug or medicine that is unbranded or not from a licensed pharmacy, not taking it is safest. A negative result can still miss fentanyl or potent analogs, especially when contamination is unevenly mixed. Strips do not show amount or potency, and no result guarantees safety. ',
                  h.jsx('a', {
                    href: 'https://www.cdc.gov/stop-overdose/caring/fentanyl-facts.html',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Read CDC guidance'
                  })
                ]
              })
            ]
          })
        ]
      }),

      h.jsx('p', {
        className: 'lf-naloxone-credit',
        children: 'Custom county boundary · Locations and details from Alameda Lifeline’s shared map · OpenStreetMap basemap'
      })
    ]
  });
}