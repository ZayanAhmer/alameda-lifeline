/* Reusable scenario SVG illustrations and resource normalization. */
(function () {
  "use strict";
  const palette = ["#A78BFA", "#C08497", "#FF7F82", "#B98BC9"];
  function hashCode(value) {
    return Array.from(String(value)).reduce((total, character) => total * 31 + character.charCodeAt(0), 7) >>> 0;
  }

  // Scenario-specific illustration system. Each scenario gets a different composition,
  // setting, body pose, and story prop while preserving the foundation artwork palette.
  function makeIllustration(id, title, kind, stepIndex = 0) {
    const hash = hashCode(id + title + String(stepIndex));
    const accent = palette[hash % palette.length];
    const secondAccent = palette[(hash + 2) % palette.length];
    const key = String(id).replace(/[^a-z0-9]/gi, "") + "-" + stepIndex;
    const dotsId = "scene-dots-" + key;
    const figureDotsId = "figure-dots-" + key;
    const glowId = "scene-glow-" + key;
    const fd = `url(#${figureDotsId})`;
    const outline = "#2D3846";
    // All figure parts share one deep brown-plum base and the same dotted texture.
    const body = "#51404A";

    // Reusable character marks: broad rounded limbs and filled silhouettes.
    const strokeLimb = (d, _color = body, width = 16) => `
      <path d="${d}" fill="none" stroke="${outline}" stroke-width="${width + 4}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${d}" fill="none" stroke="${body}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${d}" fill="none" stroke="${fd}" stroke-width="${Math.max(4, width - 1)}" stroke-linecap="round" stroke-linejoin="round"/>`;

    const figureShape = (d) => `
      <path d="${d}" fill="${body}" stroke="${outline}" stroke-width="3.2" stroke-linejoin="round"/>
      <path d="${d}" fill="${fd}" stroke="none"/>`;

    // Head and body use the same base and stipple pattern for a clean, unified figure.
    const figureHead = (x, y, r = 15.5) => `
      <circle cx="${x}" cy="${y}" r="${r}" fill="${body}" stroke="${outline}" stroke-width="2.2" stroke-dasharray="2 2.5"/>
      <circle cx="${x}" cy="${y}" r="${r - 2}" fill="${fd}"/>`;

    function personStanding(x, groundY, opts = {}) {
      const scale = opts.scale ?? .78;
      const pose = opts.pose || "neutral";
      let leftArm = "M -10 -184 Q -23 -169 -25 -153 L -27 -137";
      let rightArm = "M 10 -184 Q 23 -169 25 -153 L 27 -137";
      if (pose === "phone") {
        rightArm = "M 10 -183 Q 25 -172 25 -158 L 31 -148";
        leftArm = "M -10 -183 Q -21 -168 -21 -153 L -19 -139";
      } else if (pose === "point") {
        rightArm = "M 10 -184 Q 24 -173 38 -177 L 53 -180";
        leftArm = "M -10 -183 Q -22 -168 -23 -152 L -25 -138";
      } else if (pose === "raise" || pose === "twoHandsUp") {
        rightArm = "M 10 -184 Q 23 -196 27 -211 L 29 -228";
        leftArm = pose === "twoHandsUp" ? "M -10 -184 Q -24 -197 -27 -212 L -29 -228" : "M -10 -183 Q -22 -168 -25 -152 L -27 -138";
      } else if (pose === "hold") {
        rightArm = "M 10 -184 Q 24 -169 23 -154 L 18 -140";
        leftArm = "M -10 -184 Q -23 -169 -22 -153 L -16 -140";
      } else if (pose === "open") {
        rightArm = "M 10 -184 Q 25 -172 38 -162 L 50 -151";
        leftArm = "M -10 -184 Q -25 -172 -38 -162 L -50 -151";
      } else if (pose === "clipboard") {
        rightArm = "M 10 -184 Q 22 -169 18 -153 L 18 -140";
        leftArm = "M -10 -184 Q -22 -168 -15 -153 L -8 -140";
      } else if (pose === "handsHips") {
        rightArm = "M 10 -184 Q 25 -169 21 -154 L 12 -140";
        leftArm = "M -10 -184 Q -25 -169 -21 -154 L -12 -140";
      }
      const torso = "M -14 -190 Q 0 -198 14 -190 Q 20 -163 14 -126 Q 0 -119 -14 -126 Q -20 -163 -14 -190 Z";
      return `<g transform="translate(${x} ${groundY}) scale(${scale})" stroke-linecap="round" stroke-linejoin="round">
        ${strokeLimb("M -7 -126 Q -13 -103 -15 -81 Q -17 -50 -22 -15", body, 17)}
        ${strokeLimb("M 7 -126 Q 13 -103 15 -81 Q 17 -50 22 -15", body, 17)}
        ${figureShape(torso)}
        ${strokeLimb(leftArm, body, 15)}${strokeLimb(rightArm, body, 15)}
        ${figureHead(0,-207,16)}
      </g>`;
    }

    function personKneeling(x, groundY, opts = {}) {
      const scale = opts.scale ?? .86;
      const pose = opts.pose || "reach";
      let leftArm = "M -11 -122 Q -27 -104 -44 -83 L -65 -61";
      let rightArm = "M 11 -122 Q 22 -103 7 -84 L -8 -64";
      if (pose === "phone") rightArm = "M 11 -122 Q 25 -109 26 -96 L 30 -82";
      if (pose === "hold") rightArm = "M 11 -122 Q 22 -104 22 -89 L 22 -75";
      if (pose === "open") {
        rightArm = "M 11 -122 Q 25 -106 39 -93 L 50 -83";
        leftArm = "M -11 -122 Q -26 -106 -41 -93 L -51 -83";
      }
      if (pose === "support") {
        leftArm = "M -11 -122 Q -27 -105 -41 -83 L -55 -66";
        rightArm = "M 11 -122 Q 22 -105 18 -88 L 15 -66";
      }
      if (pose === "reach") {
        leftArm = "M -11 -122 Q -27 -104 -44 -83 L -65 -61";
        rightArm = "M 11 -122 Q 22 -103 7 -84 L -8 -64";
      }
      const torso = "M -13 -128 Q 0 -135 13 -128 L 13 -88 Q 0 -80 -13 -88 Z";
      return `<g transform="translate(${x} ${groundY}) scale(${scale})" stroke-linecap="round" stroke-linejoin="round">
        ${strokeLimb("M -5 -87 Q -15 -60 -24 -31 Q -37 -18 -53 -14", body, 17)}
        ${strokeLimb("M 5 -87 Q 23 -76 26 -56 Q 29 -37 33 -15", body, 17)}
        ${figureShape(torso)}
        ${strokeLimb(leftArm, body, 15)}${strokeLimb(rightArm, body, 15)}
        ${figureHead(0,-145,15.2)}
      </g>`;
    }

    function personSeated(x, groundY, opts = {}) {
      const scale = opts.scale ?? .78;
      const pose = opts.pose || "desk";
      let armL = pose === "open" ? "M -11 -119 Q -25 -104 -38 -92 L -49 -82" : "M -11 -119 Q -24 -104 -23 -91 L -21 -76";
      let armR = pose === "phone" ? "M 11 -119 Q 24 -106 25 -93 L 30 -80" : pose === "open" ? "M 11 -119 Q 25 -104 38 -92 L 49 -82" : "M 11 -119 Q 24 -104 25 -91 L 30 -76";
      const torso = "M -13 -124 Q 0 -132 13 -124 L 14 -78 Q 0 -70 -14 -78 Z";
      return `<g transform="translate(${x} ${groundY}) scale(${scale})" stroke-linecap="round" stroke-linejoin="round">
        ${strokeLimb("M -7 -78 Q -28 -60 -31 -29 Q -33 1 -31 39", body, 16.5)}
        ${strokeLimb("M 7 -78 Q 28 -60 34 -29 Q 38 2 42 39", body, 16.5)}
        ${figureShape(torso)}
        ${strokeLimb(armL, body, 14.5)}${strokeLimb(armR, body, 14.5)}
        ${figureHead(0,-144,15)}
      </g>`;
    }

    function personLying(x, groundY, opts = {}) {
      const scale = opts.scale ?? .8;
      const orientation = opts.orientation || "side";
      const armOne = orientation === "recovery" ? "M -34 -11 Q -20 -26 -10 -19 L 0 -12" : "M -34 -11 Q -25 -29 -12 -29 L 1 -21";
      const armTwo = orientation === "recovery" ? "M -37 -7 Q -47 1 -49 10 L -44 15" : "M -36 -7 Q -49 -2 -55 7 L -52 14";
      const torso = "M -48 -23 Q -31 -35 -10 -23 Q 6 -15 22 -2 Q 28 4 19 11 L -35 4 Q -49 2 -53 -9 Z";
      return `<g transform="translate(${x} ${groundY - 14}) scale(${scale})" stroke-linecap="round" stroke-linejoin="round">
        ${strokeLimb("M 15 1 Q 34 -7 48 -5 L 82 1", body, 16.5)}
        ${strokeLimb("M 15 3 Q 34 14 48 18 L 81 27", body, 16.5)}
        ${figureShape(torso)}
        ${strokeLimb(armOne, body, 13.5)}${strokeLimb(armTwo, body, 13.5)}
        ${figureHead(-68,-11,15)}
      </g>`;
    }

    function personSlumpedAtDesk(x, deskTop, opts = {}) {
      const scale = opts.scale ?? .8;
      // The forward-leaning torso and lowered head rest close to the desktop.
      const torso = "M -15 -49 Q -4 -60 8 -46 L 21 -9 Q 12 1 -5 -7 L -24 -30 Z";
      return `<g transform="translate(${x} ${deskTop}) scale(${scale})" stroke-linecap="round" stroke-linejoin="round">
        ${strokeLimb("M 5 -8 Q 23 12 24 43 L 24 87", body, 16.5)}
        ${strokeLimb("M 5 -8 Q -18 11 -23 42 L -24 87", body, 16.5)}
        ${figureShape(torso)}
        ${strokeLimb("M -9 -43 Q -25 -31 -33 -14 L -36 -2", body, 14.5)}
        ${strokeLimb("M 7 -43 Q 23 -30 26 -14 L 26 -2", body, 14.5)}
        ${figureHead(-2,-62,15)}
        <path d="M -130 -2 H 79 V 9 H -130 Z" fill="#C08497" stroke="#8C7182" stroke-width="2.4"/>
      </g>`;
    }

    const phone = (x,y,angle=0) => `<g transform="translate(${x} ${y}) rotate(${angle})"><rect x="-10" y="-20" width="20" height="37" rx="4" fill="#FFFCFD" stroke="#493845" stroke-width="2.2"/><rect x="-7" y="-14" width="14" height="23" rx="2" fill="#D8C7E8"/><path d="M -3 12 H 3" stroke="#A78BFA" stroke-width="2" stroke-linecap="round"/></g>`;
    const spray = (x,y,angle=0) => `<g transform="translate(${x} ${y}) rotate(${angle})"><rect x="-9" y="-24" width="18" height="45" rx="4" fill="#FFFCFD" stroke="#493845" stroke-width="2"/><rect x="-6" y="-13" width="12" height="20" rx="2" fill="#A78BFA"/><rect x="-4" y="-30" width="8" height="7" rx="2" fill="#C08497" stroke="#493845" stroke-width="1.4"/><text x="0" y="16" text-anchor="middle" font-size="5.5" font-weight="700" fill="#493845">4 mg</text></g>`;
    const bag = (x,y) => `<g transform="translate(${x} ${y})"><rect x="-27" y="-21" width="54" height="39" rx="7" fill="#D8C7E8" stroke="#493845" stroke-width="2.5"/><path d="M -12 -21 V -29 Q 0 -39 12 -29 V -21" fill="none" stroke="#493845" stroke-width="3.5"/><path d="M 0 -9 V 9 M -9 0 H 9" stroke="#A78BFA" stroke-width="4.5" stroke-linecap="round"/></g>`;
    const clipboard = (x,y,angle=0) => `<g transform="translate(${x} ${y}) rotate(${angle})"><rect x="-22" y="-31" width="44" height="62" rx="3" fill="#FFFCFD" stroke="#493845" stroke-width="2.2"/><rect x="-9" y="-37" width="18" height="9" rx="2" fill="#D8C7E8" stroke="#493845" stroke-width="1.4"/><path d="M -13 -14 H 14 M -13 -4 H 14 M -13 6 H 9 M -13 16 H 12" stroke="#C08497" stroke-width="2.3" stroke-linecap="round"/></g>`;
    const clock = (x,y) => `<g transform="translate(${x} ${y})"><circle r="31" fill="#FFFCFD" stroke="#C08497" stroke-width="3"/><circle r="25" fill="#F2E7F1" stroke="#D4C4CC" stroke-width="1.5"/><path d="M 0 -16 V 0 L 13 8" fill="none" stroke="#725B6A" stroke-width="3.5" stroke-linecap="round"/><circle r="3" fill="#725B6A"/></g>`;
    const speech = (x,y) => `<g transform="translate(${x} ${y})"><path d="M -52 -24 Q -52 -34 -42 -34 H 42 Q 52 -34 52 -24 V 5 Q 52 15 42 15 H 7 L -8 28 L -5 15 H -42 Q -52 15 -52 5 Z" fill="#FFFCFD" stroke="#C08497" stroke-width="2.2"/><circle cx="-22" cy="-10" r="3.5" fill="#A78BFA"/><circle cy="-10" r="3.5" fill="#A78BFA"/><circle cx="22" cy="-10" r="3.5" fill="#A78BFA"/></g>`;
    const clipboardProp = (x,y) => clipboard(x,y,6);
    const bench = (x,y,w=155) => `<g stroke-linejoin="round"><path d="M ${x} ${y} h ${w} v 13 h -${w} z" fill="#C08497" stroke="#8C7182" stroke-width="2.5"/><path d="M ${x+12} ${y+13} v 28 M ${x+w-12} ${y+13} v 28" stroke="#8C7182" stroke-width="5" stroke-linecap="round"/><path d="M ${x} ${y-19} v -30 h ${w} v 30" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/></g>`;
    const windowShape = (x,y,w=118,h=75) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#EAF0F5" stroke="#C4AEBB" stroke-width="2.5"/><path d="M ${x+w/2} ${y} V ${y+h} M ${x} ${y+h/2} H ${x+w}" stroke="#C4AEBB" stroke-width="2"/><path d="M ${x+8} ${y+h-12} l 24 -20 l 20 20 l 17 -27 l 35 27" fill="none" stroke="#B9CBD9" stroke-width="2"/></g>`;
    const couch = (x,y,w=205) => `<g><path d="M ${x} ${y+22} Q ${x} ${y} ${x+19} ${y} H ${x+w-19} Q ${x+w} ${y} ${x+w} ${y+22} V ${y+72} H ${x} Z" fill="#D8C7E8" stroke="#8C7182" stroke-width="3"/><rect x="${x+13}" y="${y+14}" width="${w*.42}" height="42" rx="8" fill="#FFFCFD" stroke="#C4AEBB" stroke-width="1.5"/><rect x="${x+w*.52}" y="${y+14}" width="${w*.4}" height="42" rx="8" fill="#C08497" stroke="#8C7182" stroke-width="1.5"/><path d="M ${x+13} ${y+72} v 16 M ${x+w-13} ${y+72} v 16" stroke="#8C7182" stroke-width="5"/></g>`;
    const desk = (x,y,w=170) => `<g><path d="M ${x} ${y} h ${w} v 13 h -${w} z" fill="#C08497" stroke="#8C7182" stroke-width="2.5"/><path d="M ${x+12} ${y+13} v 56 M ${x+w-12} ${y+13} v 56" stroke="#8C7182" stroke-width="6" stroke-linecap="round"/></g>`;
    const cabinetArt = (x,y) => `<g><rect x="${x}" y="${y}" width="95" height="150" rx="5" fill="#FFFCFD" stroke="#C08497" stroke-width="3"/><rect x="${x+9}" y="${y+11}" width="77" height="18" rx="3" fill="#E8DDE1"/><text x="${x+47}" y="${y+24}" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="700" fill="#725B6A">FIRST AID</text><rect x="${x+14}" y="${y+42}" width="67" height="89" rx="3" fill="#F2E7F1" stroke="#A78BFA" stroke-width="1.8"/><path d="M ${x+47} ${y+57} V ${y+114} M ${x+24} ${y+86} H ${x+70}" stroke="#A78BFA" stroke-width="9" stroke-linecap="round"/><circle cx="${x+82}" cy="${y+86}" r="2.5" fill="#8C7182"/></g>`;
    const floorObjects = `<line x1="36" y1="310" x2="884" y2="310" stroke="#D4C4CC" stroke-width="1.5"/><g fill="none" stroke="#D4C4CC" stroke-width="1.3"><path d="M 60 310 v 8 M 100 310 v 5 M 140 310 v 8 M 180 310 v 5 M 220 310 v 8 M 260 310 v 5 M 300 310 v 8 M 340 310 v 5 M 380 310 v 8 M 420 310 v 5 M 460 310 v 8 M 500 310 v 5 M 540 310 v 8 M 580 310 v 5 M 620 310 v 8 M 660 310 v 5 M 700 310 v 8 M 740 310 v 5 M 780 310 v 8 M 820 310 v 5 M 860 310 v 8"/></g>`;

    const scenes = {};
    scenes.A0 = () => `<g>${windowShape(65,75,138,78)}${bench(78,205,165)}<path d="M 690 281 Q 704 244 725 281 M 724 282 Q 750 232 774 282" fill="#DCE9DF" stroke="#A9C7B3" stroke-width="2"/><g transform="translate(256 279) rotate(-10)"><rect x="-23" y="-31" width="46" height="58" rx="8" fill="#D8C7E8" stroke="#8C7182" stroke-width="2.5"/><path d="M -10 -31 V -39 Q 0 -48 10 -39 V -31" stroke="#8C7182" stroke-width="3" fill="none"/></g>${personLying(351,294,{scale:.72,orientation:stepIndex===0?"side":"recovery"})}${personKneeling(483,310,{scale:.82,pose:stepIndex===0?"reach":stepIndex===1?"support":"open"})}${personStanding(625,310,{scale:.76,pose:stepIndex===0?"phone":stepIndex===1?"hold":"open"})}${phone(650,178,-8)}${stepIndex>0?spray(545,268,-18):""}</g>`;
    scenes.A1 = () => `<g>${windowShape(72,76,132,76)}${couch(236,222,190)}<rect x="503" y="249" width="112" height="36" rx="5" fill="#D8C7E8" stroke="#8C7182" stroke-width="2.5"/><path d="M 514 249 v -9 q 20 -18 40 0 v 9" fill="none" stroke="#8C7182" stroke-width="3"/><text x="559" y="271" text-anchor="middle" font-size="8" font-family="sans-serif" font-weight="700" fill="#725B6A">EXPIRED KIT</text>${personLying(360,294,{scale:.71,orientation:stepIndex===2?"recovery":"side"})}${personKneeling(485,310,{scale:.82,pose:stepIndex===0?"reach":stepIndex===1?"support":"hold"})}${personStanding(638,310,{scale:.76,pose:stepIndex===0?"point":stepIndex===1?"phone":"open"})}${phone(661,151,-7)}${spray(540,267,12)}</g>`;
    scenes.A2 = () => `<g><path d="M 55 102 L 120 78 L 180 100 L 240 75 L 306 99 L 368 76 L 434 98" fill="none" stroke="#C08497" stroke-width="2.5"/><circle cx="120" cy="78" r="6" fill="#A78BFA"/><circle cx="240" cy="75" r="6" fill="#FF7F82"/><circle cx="368" cy="76" r="6" fill="#B98BC9"/><rect x="56" y="115" width="178" height="88" rx="8" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><rect x="74" y="130" width="142" height="40" rx="5" fill="#EAF0F5"/><path d="M 58 187 H 234" stroke="#C08497" stroke-width="6"/><circle cx="89" cy="217" r="19" fill="#FBE9EC" stroke="#C08497" stroke-width="2"/><circle cx="89" cy="217" r="9" fill="#A78BFA" opacity=".6"/>${couch(230,213,250)}<path d="M 595 256 h 140 l -12 19 h -118 z" fill="#C08497" stroke="#8C7182" stroke-width="2.5"/><path d="M 614 275 v 24 M 708 275 v 24" stroke="#8C7182" stroke-width="5"/>${stepIndex<3?personLying(393,294,{scale:.70,orientation:stepIndex===2?"recovery":"side"}):personSeated(390,274,{scale:.78,pose:"open"})}${stepIndex<3?personKneeling(493,310,{scale:.77,pose:stepIndex===0?"reach":stepIndex===1?"phone":"support"}):personStanding(505,310,{scale:.75,pose:"open"})}${personStanding(644,310,{scale:.78,pose:stepIndex===0?"open":stepIndex===1?"phone":"hold"})}${stepIndex>0?spray(548,266,10):""}</g>`;
    scenes.A3 = () => `<g>${windowShape(75,73,135,76)}<path d="M 274 95 h 260 v 62 h -260 z" fill="#EAF0F5" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 291 113 h 110 M 291 129 h 166 M 291 145 h 130" stroke="#C4AEBB" stroke-width="3" stroke-linecap="round"/><path d="M 265 230 h 320 v 15 h -320 z" fill="#C08497" stroke="#8C7182" stroke-width="2.5"/><path d="M 287 245 v 56 M 564 245 v 56" stroke="#8C7182" stroke-width="6"/>${desk(327,227,155)}<rect x="346" y="193" width="42" height="32" rx="3" fill="#D8C7E8" stroke="#8C7182" stroke-width="2"/><path d="M 353 202 h 27 M 353 211 h 24" stroke="#A78BFA" stroke-width="2"/><rect x="404" y="199" width="31" height="27" rx="3" fill="#FFFCFD" stroke="#C08497" stroke-width="2"/><path d="M 410 208 h 19 M 410 216 h 16" stroke="#C08497" stroke-width="2"/>${stepIndex<3?personSlumpedAtDesk(423,225,{scale:.77}):personSeated(420,309,{scale:.77,pose:"open"})}${personStanding(558,310,{scale:.78,pose:stepIndex===0?"raise":stepIndex===1?"phone":"open"})}${personStanding(688,310,{scale:.69,pose:stepIndex===0?"neutral":"hold"})}${phone(581,176,-7)}${stepIndex>0?spray(506,258,8):""}</g>`;
    scenes.A4 = () => `<g>${windowShape(67,72,142,76)}<path d="M 284 85 h 235 v 61 h -235 z" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><text x="401" y="111" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#8C4964">SCHOOL HEALTH OFFICE</text><path d="M 316 126 h 169" stroke="#C4AEBB" stroke-width="2.5"/><rect x="574" y="205" width="105" height="97" rx="6" fill="#D8C7E8" stroke="#8C7182" stroke-width="3"/><path d="M 587 216 h 79 v 72 h -79 z" fill="#FFFCFD" stroke="#C4AEBB" stroke-width="2"/><rect x="600" y="230" width="53" height="34" rx="4" fill="#F2E7F1" stroke="#A78BFA" stroke-width="2"/><path d="M 626 236 v 22 M 615 247 h 22" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/><circle cx="659" cy="269" r="3" fill="#8C7182"/>${cabinetArt(714,139)}${personStanding(388,310,{scale:.8,pose:stepIndex===0?"point":"open"})}${personStanding(521,310,{scale:.82,pose:stepIndex===0?"clipboard":"point"})}${clipboard(537,184,-7)}${stepIndex>0?`<g transform="translate(485 268)"><rect x="-34" y="-19" width="68" height="38" rx="5" fill="#FFFCFD" stroke="#C08497" stroke-width="2"/><rect x="-25" y="-11" width="50" height="22" rx="3" fill="#D8C7E8"/><path d="M -17 0 H 17" stroke="#A78BFA" stroke-width="3" stroke-linecap="round"/></g>`:""}</g>`;
    scenes.A5 = () => stepIndex === 0 ? `<g>${windowShape(84,72,138,78)}${bench(284,221,260)}<path d="M 620 241 q 48 -38 95 0 v 35 h -95 z" fill="#EAF0F5" stroke="#C4AEBB" stroke-width="2.5"/><rect x="645" y="205" width="40" height="33" rx="5" fill="#D8C7E8" stroke="#8C7182" stroke-width="2"/><path d="M 653 215 h 23 M 653 223 h 18" stroke="#A78BFA" stroke-width="2"/>${personSeated(354,278,{scale:.72,pose:"open"})}${personSeated(499,278,{scale:.72,pose:"desk"})}${speech(424,124)}</g>` : `<g>${windowShape(80,75,136,76)}${bench(83,224,157)}${personLying(346,295,{scale:.73,orientation:"side"})}${personKneeling(467,310,{scale:.82,pose:"reach"})}${personStanding(618,310,{scale:.78,pose:"phone"})}${phone(643,176,-8)}${spray(537,270,10)}</g>`;
    scenes.B1 = () => `<g>${windowShape(65,77,128,72)}${couch(215,221,238)}<rect x="480" y="260" width="170" height="26" rx="8" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2"/><path d="M 498 286 v 14 M 632 286 v 14" stroke="#C4AEBB" stroke-width="4"/><path d="M 680 86 h 135 v 103 h -135 z" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 695 108 h 105 M 695 125 h 88 M 695 142 h 98" stroke="#C08497" stroke-width="2.5" stroke-linecap="round"/>${personLying(342,295,{scale:.72,orientation:stepIndex===2?"recovery":"side"})}${personKneeling(470,310,{scale:.84,pose:stepIndex===0?"reach":stepIndex===1?"support":"hold"})}${personStanding(650,310,{scale:.76,pose:stepIndex===0?"phone":"open"})}${bag(697,271)}${stepIndex>0?spray(540,265,-12):""}${phone(675,177,9)}</g>`;
    scenes.B2 = () => `<g><path d="M 48 135 L 177 67 L 306 135 Z" fill="#D8C7E8" stroke="#8C7182" stroke-width="3"/><path d="M 65 135 V 199 M 289 135 V 199" stroke="#8C7182" stroke-width="7"/><path d="M 48 137 H 306" stroke="#C08497" stroke-width="8"/><text x="177" y="122" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#725B6A">COMMUNITY HEALTH</text><path d="M 62 225 H 297 L 282 243 H 77 Z" fill="#FFFCFD" stroke="#8C7182" stroke-width="2.5"/><path d="M 82 243 V 294 M 276 243 V 294" stroke="#8C7182" stroke-width="6"/><rect x="116" y="190" width="110" height="29" rx="5" fill="#F2E7F1" stroke="#A78BFA" stroke-width="2"/><path d="M 171 196 v 17 M 162 204 h 18" stroke="#A78BFA" stroke-width="4"/><path d="M 665 257 h 140" stroke="#C4AEBB" stroke-width="3"/><rect x="693" y="215" width="77" height="42" rx="4" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2"/><path d="M 704 227 h 55 M 704 238 h 42" stroke="#C08497" stroke-width="2"/>${personLying(435,296,{scale:.7,orientation:stepIndex===0?"side":"recovery"})}${personKneeling(544,310,{scale:.81,pose:stepIndex===0?"reach":stepIndex===1?"support":"hold"})}${personStanding(691,310,{scale:.76,pose:stepIndex===0?"phone":"open"})}${bag(331,277)}${stepIndex>0?spray(604,265,12):""}${phone(716,177,8)}</g>`;
    scenes.B3 = () => `<g>${windowShape(64,73,115,70)}${couch(220,223,210)}${clock(177,106)}<path d="M 691 81 h 140 v 110 h -140 z" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 711 103 h 99 M 711 122 h 86 M 711 141 h 100 M 711 160 h 70" stroke="#C08497" stroke-width="2.5" stroke-linecap="round"/>${personLying(355,296,{scale:.7,orientation:stepIndex===3?"recovery":"side"})}${personKneeling(475,310,{scale:.82,pose:stepIndex===0?"reach":stepIndex===1?"support":"hold"})}${personStanding(631,310,{scale:.75,pose:stepIndex===0?"open":stepIndex===1?"phone":"hold"})}${phone(655,178,9)}${stepIndex>1?spray(544,264,-10):""}${speech(700,204)}</g>`;
    scenes.B4 = () => `<g><path d="M 45 236 L 162 108 L 276 236 Z" fill="#D8C7E8" stroke="#8C7182" stroke-width="3"/><path d="M 162 108 V 236 M 138 236 L 162 190 L 186 236" fill="#F7F0F2" stroke="#8C7182" stroke-width="2"/><path d="M 46 238 H 276" stroke="#8C7182" stroke-width="3"/><rect x="647" y="237" width="60" height="47" rx="6" fill="#D8C7E8" stroke="#8C7182" stroke-width="2.5"/><path d="M 659 237 v -8 q 18 -16 36 0 v 8" fill="none" stroke="#8C7182" stroke-width="3"/><path d="M 712 272 h 96" stroke="#C4AEBB" stroke-width="3"/>${personLying(277,295,{scale:.62,orientation:"side"})}${personLying(580,297,{scale:.61,orientation:"recovery"})}${personKneeling(420,310,{scale:.82,pose:stepIndex===0?"reach":"support"})}${personStanding(724,310,{scale:.75,pose:"phone"})}${bag(781,266)}${spray(484,266,-14)}${phone(748,178,8)}</g>`;
    scenes.C1 = () => `<g>${windowShape(66,72,133,76)}<path d="M 64 183 H 239 M 64 198 H 239" stroke="#C4AEBB" stroke-width="3"/><rect x="278" y="213" width="198" height="14" rx="3" fill="#C08497" stroke="#8C7182" stroke-width="2.5"/><path d="M 298 227 v 65 M 456 227 v 65" stroke="#8C7182" stroke-width="6"/>${desk(293,224,156)}${stepIndex<2?personSlumpedAtDesk(367,224,{scale:.69}):personSeated(363,278,{scale:.7,pose:"open"})}<rect x="669" y="73" width="106" height="220" rx="4" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 680 88 h 85 M 680 104 h 85" stroke="#C4AEBB" stroke-width="2"/><circle cx="755" cy="182" r="4" fill="#8C7182"/>${personStanding(516,310,{scale:.75,pose:stepIndex===0?"raise":stepIndex===1?"point":"open"})}${personStanding(704,310,{scale:.75,pose:stepIndex===0?"neutral":"point"})}${speech(582,118)}</g>`;
    scenes.C2 = () => `<g><rect x="56" y="70" width="250" height="205" rx="5" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 56 164 H 306 M 70 84 V 263 M 292 84 V 263" stroke="#8C7182" stroke-width="3"/><rect x="77" y="94" width="207" height="55" rx="5" fill="#D8C7E8"/><rect x="77" y="182" width="207" height="69" rx="5" fill="#D8C7E8"/><rect x="86" y="104" width="83" height="25" rx="6" fill="#FFFCFD"/><rect x="86" y="194" width="83" height="31" rx="6" fill="#FFFCFD"/><rect x="687" y="75" width="140" height="218" rx="5" fill="#EAF0F5" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 705 93 h 103 M 705 112 h 103 M 705 131 h 70" stroke="#C4AEBB" stroke-width="2.5"/>${personLying(179,245,{scale:.49,orientation:stepIndex===0?"side":"recovery"})}${personStanding(417,310,{scale:.78,pose:stepIndex===0?"point":stepIndex===1?"raise":"open"})}${personStanding(709,310,{scale:.75,pose:stepIndex===0?"neutral":"point"})}${speech(505,125)}</g>`;
    scenes.C3 = () => `<g><rect x="53" y="71" width="254" height="217" rx="5" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 53 160 H 307 M 68 85 V 273 M 292 85 V 273" stroke="#8C7182" stroke-width="3"/><rect x="72" y="88" width="216" height="56" rx="5" fill="#D8C7E8"/><rect x="72" y="178" width="216" height="76" rx="5" fill="#D8C7E8"/><path d="M 86 102 h 95 M 86 192 h 95" stroke="#C4AEBB" stroke-width="2"/>${stepIndex<2?personLying(215,259,{scale:.6,orientation:"side"}):personSeated(224,263,{scale:.66,pose:"open"})}${personStanding(442,310,{scale:.78,pose:stepIndex===0?"point":stepIndex===1?"open":"neutral"})}${personStanding(655,310,{scale:.8,pose:stepIndex===0?"open":stepIndex===1?"point":"handsHips"})}${speech(524,121)}${stepIndex>0?clipboard(707,249,6):""}</g>`;
    scenes.C4 = () => `<g><rect x="75" y="73" width="169" height="111" rx="5" fill="#EAF0F5" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 91 95 h 136 M 91 113 h 136 M 91 131 h 92" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 278 223 h 385 v 15 h -385 z" fill="#C08497" stroke="#8C7182" stroke-width="2.5"/><path d="M 300 238 v 64 M 638 238 v 64" stroke="#8C7182" stroke-width="6"/><rect x="705" y="78" width="119" height="215" rx="5" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 721 99 h 86 M 721 118 h 86 M 721 137 h 86" stroke="#C4AEBB" stroke-width="2.5"/>${personSeated(403,277,{scale:.78,pose:stepIndex===1?"open":"desk"})}${personStanding(585,310,{scale:.78,pose:stepIndex===0?"clipboard":stepIndex===1?"point":"open"})}${personStanding(746,310,{scale:.69,pose:stepIndex===0?"handsHips":"neutral"})}${clipboard(601,174,-7)}${stepIndex===1?speech(645,118):""}</g>`;

    const trackScenes = {
      "TRACK-A": `<g>${windowShape(78,75,143,77)}${bench(266,220,155)}${personStanding(405,310,{scale:.76,pose:"raise"})}${personSeated(533,290,{scale:.7,pose:"open"})}${personStanding(681,310,{scale:.75,pose:"phone"})}${phone(708,178,-7)}</g>`,
      "TRACK-B": `<g>${couch(70,224,214)}${windowShape(82,76,118,69)}${personKneeling(367,310,{scale:.83,pose:"reach"})}${personLying(258,294,{scale:.65,orientation:"side"})}${personStanding(524,310,{scale:.77,pose:"hold"})}${bag(568,269)}${spray(470,267,12)}</g>`,
      "TRACK-C": `<g><rect x="74" y="76" width="222" height="200" rx="5" fill="#F2E7F1" stroke="#C4AEBB" stroke-width="2.5"/><path d="M 74 164 H 296 M 88 90 V 260 M 282 90 V 260" stroke="#8C7182" stroke-width="3"/>${personSlumpedAtDesk(221,226,{scale:.64})}${personStanding(450,310,{scale:.78,pose:"raise"})}${personStanding(646,310,{scale:.77,pose:"point"})}${speech(526,120)}</g>`
    };

    const labels = {
      A0:"SCHOOL COURTYARD", A2:"FRIENDS AT A PARTY", A3:"STUDY SESSION", A4:"SCHOOL PREPAREDNESS", A5:"SUPPORTING A FRIEND",
      B1:"COMMUNITY HOME VISIT", B2:"RESOURCE FAIR", B3:"LONG WAIT FOR HELP", B4:"OUTREACH · TWO PEOPLE",
      C1:"FACILITY CLASSROOM", C2:"SHARED ROOM", C3:"SPEAKING UP", C4:"FOLLOW-UP REPORT"
    };
    const svgContent = id.startsWith("TRACK-") ? (trackScenes[id] || trackScenes["TRACK-A"]) : ((scenes[id] || scenes.A0)());
    const label = id.startsWith("TRACK-") ? (id === "TRACK-A" ? "STUDENTS & YOUTH" : id === "TRACK-B" ? "COMMUNITY HEALTH" : "YOUTH FACILITY") : (labels[id] || "PRACTICE SCENARIO");
    const titleText = String(title || "Practice scenario").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
    const safeLabel = String(label).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 360" role="img" aria-label="${titleText}" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="${dotsId}" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#E8DDE1"/></pattern>
        <pattern id="${figureDotsId}" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.1" fill="#C08497" opacity=".62"/></pattern>
        <radialGradient id="${glowId}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${accent}" stop-opacity=".30"/><stop offset="100%" stop-color="${accent}" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="920" height="360" fill="#F7F0F2"/><rect width="920" height="360" fill="url(#${dotsId})"/>
      <circle cx="500" cy="182" r="177" fill="url(#${glowId})"/>
      ${floorObjects}
      ${svgContent}
      <g transform="translate(34 24)"><rect width="202" height="25" rx="12.5" fill="#FFFCFD" stroke="#E8DDE1" stroke-width="1"/><circle cx="14" cy="12.5" r="3.3" fill="${secondAccent}"/><text x="25" y="16.5" font-size="10" letter-spacing="1.2" font-family="sans-serif" font-weight="700" fill="#62575D">${safeLabel}</text></g>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  // Thumbnails use the actual scenario scene, so every track card previews its own story.
  function makeScenarioThumbnail(id, title, kind) {
    return makeIllustration(id, title, kind, 0);
  }

  function scenarioStep(step, scenario) {
    const resource = step.resource || scenario.resource || {
      label: "Emergency response",
      title: "Call 911 and get help",
      phone: "911",
      body: "Call 911, get naloxone if available, and follow the emergency call-taker’s directions."
    };
    return { ...step, resource };
  }


  window.__ALAMEDA_SCENARIO_ILLUSTRATIONS = {
    makeIllustration,
    makeScenarioThumbnail,
    scenarioStep
  };
})();