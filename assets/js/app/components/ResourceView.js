import * as __sharedRuntime from '../shared-runtime.js';
import NaloxoneMap from './NaloxoneMap.js';
import AwarenessPage from './AwarenessPage.js';
import ScenarioOverlay from './ScenarioOverlay.js';

export default function ResourceView({ action: action, index: index, onBack: onBack }) {
  if (index === 1)
    return __sharedRuntime.b.jsx(NaloxoneMap, { onBack: onBack }); if (index === 0)
    return __sharedRuntime.b.jsx(AwarenessPage, { onBack: onBack }); if (index === 2)
    return __sharedRuntime.b.jsx(ScenarioOverlay, { onBack: onBack }); return null;
}
