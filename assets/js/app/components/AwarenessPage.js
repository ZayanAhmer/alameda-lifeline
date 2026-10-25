import * as sharedRuntime from '../shared-runtime.js';

const { b: jsxRuntime, Y: palette, n1: BackArrow, In: SectionBadge } = sharedRuntime;
const { jsx, jsxs } = jsxRuntime;

export default function AwarenessPage({ onBack }) {
  // The awareness copy stays together here so it is easy to review and update.
  // Its spacing, typography, and responsive layout live in the Build Awareness section of main.css.
  const awarenessContent = `
<div class="lf-awareness-intro">
  <p class="lf-awareness-eyebrow">ALAMEDA COUNTY · KNOW THE SIGNS</p>
  <h1 class="lf-awareness-title">Build Awareness</h1>
  <p class="lf-awareness-lede">Knowing what an opioid overdose can look like—and what to do next—can help save a life. Start with the local picture, learn the warning signs, and keep the response steps in mind.</p>
</div>

<section class="lf-awareness-stats" aria-label="Alameda County overdose statistics">
  <div class="lf-awareness-stat"><strong class="lf-awareness-stat-value">419</strong><span>people died from drug poisoning in Alameda County in 2024</span></div>
  <div class="lf-awareness-stat"><strong class="lf-awareness-stat-value">3.4×</strong><span>Black community members were more likely to die from drug poisoning than the county’s overall population</span></div>
  <div class="lf-awareness-stat"><strong class="lf-awareness-stat-value">53.1×</strong><span>people experiencing homelessness were more likely to die from drug poisoning than the general population</span></div>
</section>

<p class="lf-awareness-context"><strong>Why this matters.</strong> Overdose deaths do not affect every neighborhood and community equally. Understanding these disparities can support more targeted prevention, equitable resources, and stronger community support across the East Bay.</p>

<div class="lf-awareness-topics">
  <section class="lf-awareness-section">
    <div class="lf-awareness-section-heading"><span class="lf-awareness-index">01</span><h2>What drives many overdoses?</h2></div>
    <p>The opioid crisis is heavily driven by synthetic opioids, especially <strong>fentanyl</strong>. It can be mixed into counterfeit pills, powders, or other substances without a person knowing it is there.</p>
    <p class="lf-awareness-detail"><strong>What happens in an overdose?</strong> Opioids can affect the brain receptors that control breathing. Breathing may become dangerously slow or stop, leaving the body without the oxygen it needs.</p>
  </section>

  <section class="lf-awareness-section">
    <div class="lf-awareness-section-heading"><span class="lf-awareness-index">02</span><h2>Fentanyl test strips: know the limits</h2></div>
    <p><strong>Fentanyl test strips (FTS)</strong> can screen a small substance sample for fentanyl before use. They are a harm-reduction tool, but they are not infallible.</p>
    <ul class="lf-awareness-list">
      <li>A result can miss fentanyl, especially when a substance is unevenly mixed.</li>
      <li>Strips do not show the amount or potency of a substance.</li>
      <li>A negative result is not a guarantee of safety.</li>
    </ul>
    <p class="lf-awareness-detail"><strong>Remember:</strong> Test strips are a supplemental, last-resort measure—not a foolproof shield.</p>
  </section>
</div>

<section class="lf-awareness-section lf-awareness-signs-section">
  <div class="lf-awareness-section-heading"><span class="lf-awareness-index">03</span><h2>Recognize the signs of an opioid overdose</h2></div>
  <p>If someone cannot be awakened or does not respond when you try to rouse them, treat it as a medical emergency. Warning signs can include:</p>
  <ul class="lf-awareness-signs">
    <li><strong>Unresponsive</strong><span>Cannot wake up or respond</span></li>
    <li><strong>Limp body</strong><span>Unusually limp or collapsed</span></li>
    <li><strong>Breathing changes</strong><span>Slow, shallow, irregular, or stopped breathing</span></li>
    <li><strong>Pinpoint pupils</strong><span>Extremely small pupils</span></li>
    <li><strong>Skin or lips change color</strong><span>Bluish, gray, or pale skin, lips, or fingernails</span></li>
    <li><strong>Unusual sounds</strong><span>Gurgling, choking, or snoring sounds</span></li>
  </ul>
</section>

<section class="lf-awareness-action" aria-labelledby="lf-awareness-action-title">
  <div class="lf-awareness-section-heading"><span class="lf-awareness-index">04</span><h2 id="lf-awareness-action-title">If someone may be overdosing, act now</h2></div>
  <p class="lf-awareness-urgent"><strong>Call 911 immediately.</strong> Tell the dispatcher the person is unresponsive and struggling to breathe.</p>
  <ol class="lf-awareness-steps">
    <li><span class="lf-awareness-step-num">1</span><div><h3>Call 911</h3><p>Get emergency responders on the way right away.</p></div></li>
    <li><span class="lf-awareness-step-num">2</span><div><h3>Give naloxone</h3><p>If available, spray one dose into one nostril. Naloxone (often called Narcan) can reverse an opioid overdose.</p></div></li>
    <li><span class="lf-awareness-step-num">3</span><div><h3>Check and repeat</h3><p>If the person does not wake up or resume normal breathing within 2–3 minutes, give a second dose in the other nostril.</p></div></li>
    <li><span class="lf-awareness-step-num">4</span><div><h3>Support breathing</h3><p>Perform rescue breathing or CPR if you are trained to do so.</p></div></li>
    <li><span class="lf-awareness-step-num">5</span><div><h3>Stay with them</h3><p>Place the person on their side to help prevent choking and stay until emergency responders arrive.</p></div></li>
  </ol>
  <p class="lf-awareness-good-samaritan">Good Samaritan protections can support people who seek help and stay with someone experiencing an overdose.</p>
</section>

<section class="lf-awareness-sources" aria-labelledby="lf-awareness-sources-title">
  <p class="lf-awareness-eyebrow">KEEP LEARNING</p>
  <h2 id="lf-awareness-sources-title">Sources &amp; local information</h2>
  <p>Local statistics and background information in this guide are drawn from these Alameda County resources:</p>
  <ul>
    <li><a href="https://health.alamedacountyca.gov/data-dashboards-reports/drug-overdose-and-poisoning-prevention/" target="_blank" rel="noreferrer">Alameda County Public Health Department — Drug Overdose and Poisoning Prevention Dashboard ↗</a></li>
    <li><a href="https://district5.alamedacountyca.gov/alameda-county-releases-the-first-ever-homeless-mortality-report/" target="_blank" rel="noreferrer">Alameda County District 5 — Homeless Mortality Report ↗</a></li>
    <li><a href="https://www.acgov.org/board/bos_calendar/documents/DocsAgendaReg_2_10_25/HEALTH%20CARE%20SERVICES/Regular%20Calendar/Item_1_EBDC_Heppac_2_10_25.pdf" target="_blank" rel="noreferrer">Alameda County Health Care Services Agency &amp; HEPPAC — Board Agenda Report (PDF) ↗</a></li>
  </ul>
</section>
`;

  return jsxs('div', {
    className: 'lf-scene lf-awareness flex h-full w-full flex-col px-6 pb-5',
    children: [
      jsxs('div', {
        className: 'lf-awareness-top',
        children: [
          jsxs('button', {
            type: 'button',
            onClick: onBack,
            className: 'flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5',
            style: { color: palette.charcoal },
            children: [
              jsx(BackArrow, { className: 'h-3.5 w-3.5' }),
              jsx('span', {
                className: 'font-mono text-[10px] uppercase tracking-[0.18em]',
                children: 'Back'
              })
            ]
          }),
          jsx(SectionBadge, {
            bg: 'rgba(255,127,130,0.16)',
            fg: palette.coral,
            children: 'Overdose awareness'
          })
        ]
      }),
      jsx('div', {
        className: 'lf-awareness-content',
        dangerouslySetInnerHTML: { __html: awarenessContent }
      })
    ]
  });
}
