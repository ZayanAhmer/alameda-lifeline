import * as __sharedRuntime from './shared-runtime.js';
import App from './components/AppRoot.js';

__sharedRuntime.Wx.createRoot(document.getElementById('root')).render(
  __sharedRuntime.b.jsx(__sharedRuntime.Q.StrictMode, { children: __sharedRuntime.b.jsx(App, {}) })
);
