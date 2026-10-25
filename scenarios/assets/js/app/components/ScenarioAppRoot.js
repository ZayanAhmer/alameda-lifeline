import * as __sharedRuntime from '../shared-runtime.js';

export default function ScenarioApp() {
  const [stepIndex, setStepIndex] = __sharedRuntime.zf.useState(0);
  const [selectedAnswer, setSelectedAnswer] = __sharedRuntime.zf.useState(null);
  const [scenarioId, setScenarioId] = __sharedRuntime.zf.useState("A1");
  __sharedRuntime.zf.useEffect(() => {
    function handleScenarioSelection(event) {
      const nextId = event.detail && event.detail.id;
      if (!nextId)
        return;
      setScenarioId(nextId);
      setStepIndex(0);
      setSelectedAnswer(null);
    }
    window.addEventListener("alameda:scenario-select", handleScenarioSelection);
    return () => window.removeEventListener("alameda:scenario-select", handleScenarioSelection);
  }, []);
  const catalog = window.__ALAMEDA_SCENARIO_CATALOG || {};
  const selectedScenario = catalog[scenarioId] || {};
  const scenarioSteps = Array.isArray(selectedScenario.steps) ? selectedScenario.steps : __sharedRuntime.$n;
  const currentStep = scenarioSteps[stepIndex] || scenarioSteps[0];
  const answer = selectedAnswer !== null ? currentStep.answers[selectedAnswer] : null;
  const answerIsCorrect = answer?.correct ?? false;
  const isLastStep = stepIndex === scenarioSteps.length - 1;
  const title = selectedScenario.title || "They Won't Wake Up";
  const description = selectedScenario.description || "Practice recognizing a possible opioid overdose, giving naloxone, and getting help. This is a fictional scenario for education.";
  const customArt = scenarioId !== "A1" && window.__ALAMEDA_SCENARIO_ART
    ? (window.__ALAMEDA_SCENARIO_STEP_ART?.[scenarioId]?.[stepIndex] || window.__ALAMEDA_SCENARIO_ART[scenarioId])
    : null;
  function goToStep(index) {
    setStepIndex(index);
    setSelectedAnswer(null);
  }
  const sceneIllustration = customArt
    ? __sharedRuntime.h.jsx("img", { className: "scenario-custom-art", src: customArt, alt: currentStep.imageAlt || ("Illustration for " + title) })
    : __sharedRuntime.h.jsx(__sharedRuntime.zr, { step: stepIndex });
  return __sharedRuntime.h.jsxs("main", {
    className: "page",
    children: [
      __sharedRuntime.h.jsxs("header", {
        children: [
          __sharedRuntime.h.jsxs("div", {
            className: "header-top",
            children: [
              __sharedRuntime.h.jsx("p", { className: "label", children: "Practice scenario" }),
              __sharedRuntime.h.jsxs("a", {
                href: "tel:911",
                className: "emergency-pill",
                children: [__sharedRuntime.h.jsx("span", { className: "dot" }), "Emergency? Call 911"]
              })
            ]
          }),
          __sharedRuntime.h.jsx("h1", { children: title }),
          __sharedRuntime.h.jsx("p", { className: "lede", children: description })
        ]
      }),
      __sharedRuntime.h.jsx("nav", {
        className: "steps",
        "aria-label": "Scenario steps",
        children: scenarioSteps.map((item, index) => __sharedRuntime.h.jsxs("button", {
          onClick: () => goToStep(index),
          className: index === stepIndex ? "active" : "",
          "aria-current": index === stepIndex ? "step" : void 0,
          children: [
            __sharedRuntime.h.jsx("span", { className: "step-num", children: index + 1 }),
            __sharedRuntime.h.jsx("span", { children: item.name })
          ]
        }, item.name))
      }),
      __sharedRuntime.h.jsxs("section", {
        className: "card",
        "aria-label": `Step ${stepIndex + 1}: ${currentStep.name}`,
        children: [
          __sharedRuntime.h.jsx("div", { className: "scene-image", children: sceneIllustration }),
          __sharedRuntime.h.jsx("p", { className: "sr-only", children: currentStep.imageAlt }),
          __sharedRuntime.h.jsxs("div", {
            className: "card-content",
            children: [
              __sharedRuntime.h.jsxs("div", {
                className: "phase-tag",
                children: ["Step ", stepIndex + 1, " of ", scenarioSteps.length]
              }),
              __sharedRuntime.h.jsx("h2", { children: currentStep.title }),
              __sharedRuntime.h.jsx("p", { className: "scene", children: currentStep.scene }),
              __sharedRuntime.h.jsxs("fieldset", {
                children: [
                  __sharedRuntime.h.jsx("legend", { children: currentStep.question }),
                  currentStep.answers.map((choice, index) => {
                    const isSelected = selectedAnswer === index;
                    const answerClass = isSelected ? (choice.correct ? "correct" : "incorrect") : "";
                    const isMuted = answerIsCorrect && !isSelected;
                    return __sharedRuntime.h.jsxs("button", {
                      onClick: () => setSelectedAnswer(index),
                      disabled: answerIsCorrect,
                      className: `answer ${answerClass} ${isMuted ? "muted" : ""}`,
                      "aria-pressed": isSelected,
                      children: [
                        __sharedRuntime.h.jsx("span", {
                          className: "answer-letter",
                          children: isSelected ? (choice.correct ? "✓" : "✕") : String.fromCharCode(65 + index)
                        }),
                        __sharedRuntime.h.jsx("span", { children: choice.text })
                      ]
                    }, choice.text);
                  })
                ]
              }),
              answer && __sharedRuntime.h.jsxs("div", {
                className: `feedback ${answerIsCorrect ? "correct" : ""}`,
                "aria-live": "polite",
                children: [
                  __sharedRuntime.h.jsx("p", { className: "feedback-status", children: answerIsCorrect ? "Correct" : "Not quite" }),
                  __sharedRuntime.h.jsx("p", { className: "feedback-text", children: answer.feedback }),
                  !answerIsCorrect && __sharedRuntime.h.jsx("p", { className: "feedback-hint", children: "Try another answer." }),
                  answerIsCorrect && __sharedRuntime.h.jsxs("div", {
                    className: "resource-callout",
                    children: [
                      __sharedRuntime.h.jsx("span", { className: "resource-badge", children: currentStep.resource.label }),
                      __sharedRuntime.h.jsxs("div", {
                        className: "resource-detail",
                        children: [
                          __sharedRuntime.h.jsxs("p", {
                            className: "resource-title",
                            children: [
                              currentStep.resource.title,
                              currentStep.resource.phone && __sharedRuntime.h.jsxs(__sharedRuntime.h.Fragment, {
                                children: [" · ", __sharedRuntime.h.jsx("a", {
                                  href: `tel:${currentStep.resource.phone.replace(/[^0-9]/g, "")}`,
                                  children: currentStep.resource.phone
                                })]
                              })
                            ]
                          }),
                          __sharedRuntime.h.jsx("p", { children: currentStep.resource.body }),
                          currentStep.resource.links && __sharedRuntime.h.jsx("ul", {
                            className: "resource-links",
                            children: currentStep.resource.links.map((link) => __sharedRuntime.h.jsx("li", {
                              children: __sharedRuntime.h.jsxs("a", {
                                href: link.url,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [link.text, " ↗"]
                              })
                            }, link.url))
                          }),
                          currentStep.resource.note && __sharedRuntime.h.jsx("p", { className: "resource-note", children: currentStep.resource.note })
                        ]
                      })
                    ]
                  })
                ]
              }),
              answerIsCorrect && __sharedRuntime.h.jsx("div", {
                className: "next-action-bar",
                children: __sharedRuntime.h.jsx("button", {
                  className: "next",
                  onClick: () => isLastStep
                    ? window.dispatchEvent(new Event("alameda:scenario-end"))
                    : goToStep(stepIndex + 1),
                  children: isLastStep ? "End scenario" : "Next step →"
                })
              })
            ]
          })
        ]
      }),
      __sharedRuntime.h.jsxs("footer", {
        children: [
          __sharedRuntime.h.jsx("p", { children: "Fictional scenario for education. Not a substitute for hands-on training. Draft: needs review by a clinician or overdose-response trainer before public use." }),
          __sharedRuntime.h.jsxs("details", {
            children: [
              __sharedRuntime.h.jsx("summary", { children: "Sources and how they were used" }),
              __sharedRuntime.h.jsx("ul", {
                className: "sources",
                children: __sharedRuntime.pr.map((source) => __sharedRuntime.h.jsxs("li", {
                  children: [
                    __sharedRuntime.h.jsx("a", { href: source.url, target: "_blank", rel: "noreferrer", children: source.name }),
                    __sharedRuntime.h.jsxs("span", { children: [" — ", source.used] })
                  ]
                }, source.url))
              })
            ]
          })
        ]
      })
    ]
  });
}
