# Alameda Lifeline

A static website for local overdose-awareness education, naloxone location discovery, and interactive practice scenarios.

## Project layout

```text
alameda-lifeline/
├── index.html
├── assets/
│   ├── css/main.css
│   └── js/
│       ├── app/
│       │   ├── App.js                    # Main React entry point
│       │   ├── shared-runtime.js         # Shared compiled React/vendor code
│       │   └── components/
│       │       ├── AppRoot.js             # Intro sequence, navigation, page state
│       │       ├── MainMenu.js            # Resource menu
│       │       ├── ResourceView.js        # Chooses the selected resource view
│       │       ├── NaloxoneMap.js         # Naloxone map view
│       │       ├── AwarenessPage.js       # Awareness and educational content
│       │       └── ScenarioOverlay.js     # Scenario overlay in the main app
│       └── legacy/main.bundle.js          # Original bundle backup
├── scenarios/
│   ├── index.html
│   └── assets/
│       ├── css/scenarios.css
│       └── js/
│           ├── app/
│           │   ├── ScenarioApp.js         # Scenario React entry point
│           │   ├── shared-runtime.js      # Scenario React/vendor code
│           │   └── components/
│           │       └── ScenarioAppRoot.js # Scenario practice UI
│           ├── legacy/scenarios.bundle.js # Original scenario bundle backup
│           ├── scenario-data.js           # Scenario text, choices, feedback, tracks
│           ├── illustrations.js            # Reusable SVG illustration helpers
│           ├── scenario-controller.js     # Scenario landing/results behavior
│           └── exit-handler.js            # Return-to-main-app behavior
├── README.md
└── .gitignore
```

## What changed

The main app and scenario app no longer load their UI from one giant application bundle. Their entry points now import separate component files, so the main screens and navigation logic can be found and edited in smaller, named files. The original bundles are kept under `legacy/` as rollback copies.

**Important limitation:** only the compiled browser bundles were available as input, not the original React source project. The UI components have therefore been separated from the compiled output and given clearer component and state names where that was safe, but their UI markup still uses React's compiled `jsx`/`jsxs` helper calls rather than the original JSX syntax. The `shared-runtime.js` files also contain generated React/vendor/helper code; they are not the place to make routine content or UI edits. This split improves navigation through the app code, but it is not a recovery of the exact original source files.

The obsolete “Under construction” fallback screen and its dedicated CSS have been removed. The scenario page is a separate HTML document rather than a large HTML string embedded in the main bundle. The scenario catalog and illustration helpers are separate editable files.

## How the stylesheets are organized

Each app page loads **one project stylesheet**: `assets/css/main.css` for the main app and `scenarios/assets/css/scenarios.css` for the standalone scenario app. The comments named `Original ... stylesheet 1`, `2`, and `3` mark separate blocks that were combined into each file; they are not three separate stylesheet files being loaded by the browser. Those comments are correctly placed at the start of their respective blocks.

- `assets/css/main.css`, block 1: shared reset/theme and generated utility classes used by the main app's React components. Keep this block.
- `assets/css/main.css`, block 2: intro/menu and naloxone-map layouts. Keep this block.
- `assets/css/main.css`, block 3: Build Awareness page styling. This block was rewritten to use a clearer editorial reading order, grouped statistics, plain list rows, and one restrained emergency-response highlight. The old Awareness card-specific rules were removed.
- `scenarios/assets/css/scenarios.css`, block 1: reset/base styles and the scenario page's general layout.
- `scenarios/assets/css/scenarios.css`, block 2: scenario picker, collapsed previews, and results screen.
- `scenarios/assets/css/scenarios.css`, block 3: track picker and scenario-thumbnail layout.

The main `index.html` also loads three external Leaflet CSS files because the naloxone map uses Leaflet and its marker-clustering plugin. The Google Fonts stylesheet provides the site's display/body fonts. Those are separate library/font stylesheets, not extra copies of the project's own CSS. The scenario HTML uses the fonts and its one project stylesheet. I did not delete either project stylesheet or the external Leaflet styles because their rules are still needed by other screens.

## Run locally

Do not open `index.html` by double-clicking it. Use a local web server so modules and scenario assets load correctly.

1. Install Python 3 if needed.
2. Open a terminal in this project directory.
3. Run:

   ```bash
   python3 -m http.server 8000
   ```

4. Open <http://localhost:8000> in your browser.
5. Stop the server with `Ctrl+C`.

The map, fonts, and some libraries load from external CDNs, so those features need an internet connection.

## Editing guide

- **Intro sequence, transitions, slide navigation, and page state:** `assets/js/app/components/AppRoot.js`
- **Main resource menu:** `assets/js/app/components/MainMenu.js`
- **Resource routing:** `assets/js/app/components/ResourceView.js`
- **Naloxone map screen:** `assets/js/app/components/NaloxoneMap.js`
- **Awareness content:** `assets/js/app/components/AwarenessPage.js`
- **Scenario overlay in the main app:** `assets/js/app/components/ScenarioOverlay.js`
- **Standalone scenario practice UI:** `scenarios/assets/js/app/components/ScenarioAppRoot.js`
- **Scenario wording, options, feedback, and track membership:** `scenarios/assets/js/scenario-data.js`
- **Scenario SVG illustrations:** `scenarios/assets/js/illustrations.js`
- **Main and scenario styles:** `assets/css/main.css` and `scenarios/assets/css/scenarios.css`

The `outro` key in the intro sequence refers to the final “Enter” screen, not the page footer. Keep the legacy bundles unchanged as backups unless you deliberately need to roll back.

## Publish on GitHub Pages

1. Create an empty GitHub repository.
2. In a terminal in this project directory, run these commands, replacing the placeholders:

   ```bash
   git init
   git add .
   git commit -m "Organize Alameda Lifeline app components"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.

The site uses relative paths and can run under a GitHub Pages project URL. Before publishing, verify external links and local resource information, and periodically review overdose-response guidance against current public-health sources.
