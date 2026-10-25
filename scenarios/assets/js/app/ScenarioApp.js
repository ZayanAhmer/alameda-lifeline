import * as __sharedRuntime from './shared-runtime.js';
import ScenarioApp from './components/ScenarioAppRoot.js';

__sharedRuntime.rr.createRoot(document.getElementById('root')).render(
  __sharedRuntime.h.jsx(__sharedRuntime.zf.StrictMode, { children: __sharedRuntime.h.jsx(ScenarioApp, {}) })
);
