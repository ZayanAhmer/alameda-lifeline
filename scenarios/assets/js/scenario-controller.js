(function () {
  "use strict";

  const landing = document.getElementById("scenario-landing");
  const root = document.getElementById("root");
  const exit = document.getElementById("scenario-exit");
  const results = document.getElementById("results-panel");
  const content = landing && landing.querySelector(".landing-content");
  const originalCard = content && content.querySelector(".launch-card");

  if (!landing || !root || !exit || !results || !content || !originalCard) return;

  const resultsTitle = results.querySelector("#results-title");
  const resultsIntro = results.querySelector(".results-intro");
  const resultsReview = results.querySelector(".results-review");
  const defaultResultsTitle = resultsTitle ? resultsTitle.textContent : "You know the steps.";
  const defaultResultsIntro = resultsIntro ? resultsIntro.textContent : "A quick review of the three decisions in this scenario.";
  const defaultResultsRows = resultsReview
    ? Array.from(resultsReview.childNodes).map((node) => node.cloneNode(true))
    : [];

  const catalog = window.__ALAMEDA_SCENARIO_CATALOG;
  const tracks = window.__ALAMEDA_TRACKS;

  window.__ALAMEDA_SCENARIO_ART = {};
  window.__ALAMEDA_SCENARIO_STEP_ART = {};
  window.__ALAMEDA_SCENARIO_THUMB_ART = {};

  const { makeIllustration, makeScenarioThumbnail, scenarioStep } = window.__ALAMEDA_SCENARIO_ILLUSTRATIONS;

  Object.keys(catalog).forEach((id) => {
    const scenario = catalog[id];
    const steps = Array.isArray(scenario.steps) ? scenario.steps : [];
    // A1 is the existing foundation scenario and continues to use its original step-by-step SVG art.
    const artworkCount = Math.max(steps.length, id === "A1" ? 3 : 1);
    window.__ALAMEDA_SCENARIO_STEP_ART[id] = Array.from({ length: artworkCount }, (_, stepIndex) =>
      makeIllustration(id, scenario.title, scenario.kind || "overdose", stepIndex)
    );
    window.__ALAMEDA_SCENARIO_ART[id] = window.__ALAMEDA_SCENARIO_STEP_ART[id][0];
    window.__ALAMEDA_SCENARIO_THUMB_ART[id] = makeScenarioThumbnail(id, scenario.title, scenario.kind || "overdose");
    if (scenario.steps) scenario.steps = scenario.steps.map((step) => scenarioStep(step, scenario));
  });
  tracks.forEach((track) => {
    track.art = makeIllustration("TRACK-" + track.id, track.title, "track", 0);
  });

  const deck = document.createElement("div");
  deck.id = "scenario-deck";
  deck.className = "track-deck";
  deck.setAttribute("aria-label", "Available scenario tracks");
  content.insertBefore(deck, originalCard);
  originalCard.remove();

  function makeTrackCard(track) {
    const card = document.createElement("article");
    card.className = "launch-card track-card";
    card.dataset.trackId = track.id;

    const expanded = document.createElement("div");
    expanded.className = "track-expanded";

    const art = document.createElement("div");
    art.className = "launch-art track-launch-art";
    const artImage = document.createElement("img");
    artImage.className = "scene-svg";
    artImage.src = track.art;
    artImage.alt = "Illustration for the " + track.title + " track";
    art.appendChild(artImage);
    const badge = document.createElement("span");
    badge.className = "launch-badge";
    badge.innerHTML = '<i></i> PRACTICE TRACK';
    art.appendChild(badge);

    const copy = document.createElement("div");
    copy.className = "launch-copy";
    const meta = document.createElement("div");
    meta.className = "launch-meta";
    meta.innerHTML = '<span>TRACK ' + track.id + '</span><span>' + track.scenarios.length + ' SCENARIOS</span>';
    const heading = document.createElement("h2");
    heading.textContent = track.title;
    const description = document.createElement("p");
    description.className = "track-description";
    description.textContent = track.description;
    const pills = document.createElement("div");
    pills.className = "launch-steps";
    const pill = document.createElement("span");
    pill.textContent = track.scenarios.length + " interactive scenarios";
    pills.appendChild(pill);
    const scenarioGrid = document.createElement("div");
    scenarioGrid.className = "track-scenario-grid";
    scenarioGrid.setAttribute("aria-label", "Scenarios in track " + track.id);

    track.scenarios.forEach((scenarioId) => {
      const scenario = catalog[scenarioId];
      if (!scenario) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "track-scenario-button";
      button.dataset.scenarioId = scenarioId;
      button.setAttribute("aria-label", "Start scenario " + scenarioId + ": " + scenario.title);
      const thumb = document.createElement("img");
      thumb.className = "track-scenario-thumb";
      thumb.src = window.__ALAMEDA_SCENARIO_THUMB_ART?.[scenarioId] || window.__ALAMEDA_SCENARIO_ART[scenarioId];
      thumb.alt = "";
      const body = document.createElement("span");
      body.className = "track-scenario-copy";
      const code = document.createElement("span");
      code.className = "track-scenario-code";
      code.textContent = "SCENARIO " + scenarioId;
      const title = document.createElement("span");
      title.className = "track-scenario-title";
      title.textContent = scenario.title;
      const status = document.createElement("span");
      status.className = "track-scenario-detail";
      status.textContent = scenario.steps ? (scenario.steps.length + " decisions · Start now") : "3 decisions · Start now";
      body.append(code, title, status);
      const arrow = document.createElement("span");
      arrow.className = "track-scenario-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";
      button.append(thumb, body, arrow);
      button.addEventListener("click", () => startScenario(scenarioId));
      scenarioGrid.appendChild(button);
    });

    const bottom = document.createElement("div");
    bottom.className = "launch-bottom track-launch-bottom";
    const bottomText = document.createElement("p");
    bottomText.textContent = "Choose a scenario below to begin. Each scenario has interactive decisions and feedback.";
    bottom.appendChild(bottomText);

    copy.append(meta, heading, description, pills, scenarioGrid, bottom);
    expanded.append(art, copy);

    const collapsed = document.createElement("button");
    collapsed.type = "button";
    collapsed.className = "track-collapsed";
    collapsed.hidden = true;
    collapsed.setAttribute("aria-expanded", "true");
    collapsed.setAttribute("aria-label", "Expand track " + track.id + ": " + track.title);
    const number = document.createElement("span");
    number.className = "track-row-number";
    number.textContent = "TRACK " + track.id;
    const rowTitle = document.createElement("span");
    rowTitle.className = "track-row-title";
    rowTitle.textContent = track.title;
    const status = document.createElement("span");
    status.className = "track-row-status";
    status.textContent = track.scenarios.length + " scenarios";
    const chevron = document.createElement("span");
    chevron.className = "track-row-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "→";
    collapsed.append(number, rowTitle, status, chevron);
    collapsed.addEventListener("click", () => setActiveTrack(track.id, true));

    card.append(expanded, collapsed);
    return { track, card, expanded, collapsed };
  }

  let activeTrackId = "A";
  let activeScenarioId = "A1";
  const cardEntries = tracks.map(makeTrackCard);
  cardEntries.forEach((entry) => deck.appendChild(entry.card));

  function setActiveTrack(id, moveFocus) {
    activeTrackId = id;
    cardEntries.forEach((entry) => {
      const active = entry.track.id === id;
      entry.card.classList.toggle("is-expanded", active);
      entry.card.classList.toggle("is-collapsed", !active);
      entry.expanded.inert = !active;
      entry.expanded.setAttribute("aria-hidden", String(!active));
      entry.collapsed.hidden = active;
      entry.collapsed.setAttribute("aria-expanded", String(active));
    });
    if (moveFocus) {
      const chosen = cardEntries.find((entry) => entry.track.id === id);
      const heading = chosen && chosen.expanded.querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    }
  }

  function startScenario(id) {
    if (!catalog[id]) return;
    activeScenarioId = id;
    activeTrackId = catalog[id].track || activeTrackId;
    setActiveTrack(activeTrackId, false);
    window.dispatchEvent(new CustomEvent("alameda:scenario-select", { detail: { id } }));
    if (results) results.hidden = true;
    landing.hidden = true;
    root.style.display = "block";
    exit.hidden = false;
    window.scrollTo(0, 0);
  }

  function updateResultsSummary() {
    const scenario = catalog[activeScenarioId];
    if (!resultsTitle || !resultsIntro || !resultsReview) return;

    // Keep the original foundation-scenario review intact; render matching rows for every added scenario.
    if (!scenario || !Array.isArray(scenario.steps)) {
      resultsTitle.textContent = defaultResultsTitle;
      resultsIntro.textContent = defaultResultsIntro;
      resultsReview.replaceChildren(...defaultResultsRows.map((node) => node.cloneNode(true)));
      return;
    }

    resultsTitle.textContent = "You know the steps.";
    resultsIntro.textContent = "Review the key decisions from “" + scenario.title + ".”";
    const rows = scenario.steps.map((step, index) => {
      const row = document.createElement("div");
      row.className = "results-row";
      const number = document.createElement("span");
      number.className = "results-row-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const name = document.createElement("span");
      name.className = "results-row-title";
      name.textContent = step.name;
      const copy = document.createElement("span");
      copy.className = "results-row-copy";
      copy.textContent = step.title;
      row.append(number, name, copy);
      return row;
    });
    resultsReview.replaceChildren(...rows);
  }

  window.addEventListener("alameda:scenario-end", function () {
    updateResultsSummary();
    landing.hidden = true;
    root.style.display = "none";
    exit.hidden = true;
    results.hidden = false;
    window.scrollTo(0, 0);
  });

  const restart = document.getElementById("results-restart");
  if (restart) restart.addEventListener("click", function () {
    results.hidden = true;
    landing.hidden = true;
    root.style.display = "block";
    exit.hidden = false;
    window.dispatchEvent(new CustomEvent("alameda:scenario-select", { detail: { id: activeScenarioId } }));
    window.scrollTo(0, 0);
  });

  const allScenarios = document.getElementById("results-all");
  if (allScenarios) allScenarios.addEventListener("click", function () {
    results.hidden = true;
    root.style.display = "none";
    exit.hidden = true;
    landing.hidden = false;
    setActiveTrack(activeTrackId, false);
    window.scrollTo(0, 0);
  });

  setActiveTrack("A", false);
})();
