(function () {
  "use strict";

  const landing = document.getElementById("scenario-landing");
  const root = document.getElementById("root");
  const close = document.getElementById("scenario-close");
  const exit = document.getElementById("scenario-exit");
  const results = document.getElementById("results-panel");

  function leaveToMainApp() {
    window.parent.postMessage("alameda-scenarios-exit", "*");
  }

  if (close) close.addEventListener("click", leaveToMainApp);
  if (exit) exit.addEventListener("click", function () {
    if (landing) landing.hidden = false;
    if (root) root.style.display = "none";
    if (exit) exit.hidden = true;
    if (results) results.hidden = true;
    window.scrollTo(0, 0);
  });
})();
