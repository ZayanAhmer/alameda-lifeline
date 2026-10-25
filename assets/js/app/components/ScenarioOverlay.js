import * as __sharedRuntime from '../shared-runtime.js';

export default function ScenarioOverlay({ onBack }) {
  __sharedRuntime.Q.useEffect(() => {
    const layer = document.createElement('div');
    layer.setAttribute('role', 'dialog');
    layer.setAttribute('aria-label', 'Alameda Lifeline practice scenario');
    layer.style.cssText =
      'position:fixed;inset:0;z-index:2147483000;background:#FBE9EC;overflow:auto;isolation:isolate';

    const frame = document.createElement('iframe');
    frame.title = 'Alameda Lifeline overdose response scenario';
    frame.style.cssText =
      'display:block;width:100%;height:100%;border:0;background:#FBE9EC';

    // Load the same scenario page used by the standalone /scenarios/ URL.
    // A fresh query parameter prevents the browser from reusing a stale
    // copy of the scenario landing page when the overlay opens.
    const scenarioUrl = new URL(
      './scenarios/index.html',
      window.location.href
    );
    scenarioUrl.searchParams.set('refresh', String(Date.now()));
    frame.src = scenarioUrl.href;

    const receive = (event) => {
      if (
        event.source === frame.contentWindow &&
        event.data === 'alameda-scenarios-exit'
      ) {
        onBack();
      }
    };

    window.addEventListener('message', receive);
    layer.appendChild(frame);
    document.body.appendChild(layer);

    return () => {
      window.removeEventListener('message', receive);
      layer.remove();
    };
  }, [onBack]);

  return null;
}