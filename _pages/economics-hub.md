---
title: "Global Macro & RBI Sentiment Monitor"
permalink: /economics-hub/
layout: single
author_profile: true
toc: true
toc_label: "On this page"
toc_sticky: true
chart_reel: true
---

On and off, I continue to develop two interconnected projects built on a shared codebase. The first is a weekly automated dashboard tracking economic and financial market indicators across India and the world. The second, RBI Sentinel, analyses the tone of the Reserve Bank of India's monetary policy communications and explores whether it can help explain or predict financial market movements.

Trust me when I say this, I personally use these platforms quite regularly, whether I'm researching a topic or simply trying to make sense of what's happening in the economy. They're as much tools for my own work as they are projects I enjoy building and improving. Feel free to explore!


<style>
/* ============================================
   ECONHUB — EDITORIAL PROJECT NAVIGATION
   Scoped to the Macro & RBI Monitor page
   ============================================ */

.page-economics-hub .eh-projects {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
  margin: 2.5rem 0 3rem;
}

/* Main project cards */

.page-economics-hub .eh-projects a.eh-project-card {
  --project-accent: #003366;

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.8rem 1.65rem 1.35rem;

  background: #ffffff !important;
  color: #192333 !important;
  border: 1px solid #e0e4e9 !important;
  border-radius: 4px;
  box-shadow: none !important;
  text-decoration: none !important;
  overflow: hidden;

  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

/* Individual project accents */

.page-economics-hub .eh-project-card--macro {
  --project-accent: #003366;
}

.page-economics-hub .eh-project-card--rbi {
  --project-accent: #8b1a1a !important;
}

/* Thin editorial top accent */

.page-economics-hub .eh-project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--project-accent);
}

/* Part number / category */

.page-economics-hub .eh-project-card__label {
  display: block;
  margin-bottom: 0.95rem;

  font-family: "Inter", sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  line-height: 1.5;
  color: #788394;
}

/* Project title */

.page-economics-hub .eh-project-card__title {
  display: block;
  margin-bottom: 0.7rem;

  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.5rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  line-height: 1.2;
  color: #172234;
}

/* Project description */

.page-economics-hub .eh-project-card__description {
  display: block;
  margin-bottom: 1.65rem;

  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.7;
  color: #596474;
}

/* Bottom navigation */

.page-economics-hub .eh-project-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin-top: auto;
  padding-top: 0.95rem;

  border-top: 1px solid #e9ecf0;

  font-family: "Inter", sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: var(--project-accent);
}

/* Navigation arrow */

.page-economics-hub .eh-project-card__arrow {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1;

  transition: transform 180ms ease;
}

/* Hover behaviour */

@media (hover: hover) {
  .page-economics-hub .eh-projects a.eh-project-card:hover {
    transform: translateY(-3px);
    border-color: #bcc6d2 !important;
    box-shadow: 0 9px 24px rgba(20, 35, 55, 0.07) !important;
  }

  .page-economics-hub .eh-project-card:hover
  .eh-project-card__arrow {
    transform: translateY(4px);
  }
}

/* Keyboard accessibility */

.page-economics-hub .eh-project-card:focus-visible {
  outline: 2px solid var(--project-accent);
  outline-offset: 4px;
}

/* Mobile responsiveness */

@media (max-width: 700px) {
  .page-economics-hub .eh-projects {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .page-economics-hub .eh-projects a.eh-project-card {
    padding: 1.5rem 1.4rem 1.2rem;
  }

  .page-economics-hub .eh-project-card__title {
    font-size: 1.4rem;
  }
}

/* Dark mode */

html[data-theme="dark"] .page-economics-hub
.eh-projects a.eh-project-card {
  background: #171e29 !important;
  color: #edf1f6 !important;
  border-color: #354050 !important;
}

html[data-theme="dark"] .page-economics-hub
.eh-project-card--macro {
  --project-accent: #8fbbe6;
}

html[data-theme="dark"] .page-economics-hub
.eh-project-card--rbi {
  --project-accent: #dc9292 !important;
}

html[data-theme="dark"] .page-economics-hub
.eh-project-card__title {
  color: #edf1f6 !important;
}

html[data-theme="dark"] .page-economics-hub
.eh-project-card__label,
html[data-theme="dark"] .page-economics-hub
.eh-project-card__description {
  color: #aeb9c8 !important;
}

html[data-theme="dark"] .page-economics-hub
.eh-project-card__footer {
  border-color: #354050;
}

@media (hover: hover) {
  html[data-theme="dark"] .page-economics-hub
  .eh-projects a.eh-project-card:hover {
    border-color: #64748b !important;
    box-shadow: 0 9px 24px rgba(0, 0, 0, 0.18) !important;
  }
}

/* Reduced motion accessibility */

@media (prefers-reduced-motion: reduce) {
  .page-economics-hub .eh-project-card,
  .page-economics-hub .eh-project-card__arrow {
    transition: none !important;
  }
}
</style>

<!-- PROJECT NAVIGATION -->

<nav class="eh-projects" aria-label="Explore EconHub projects">

  <!-- PART I: MACRO DASHBOARD -->

  <a href="#dashboard"
     class="eh-project-card eh-project-card--macro">

    <span class="eh-project-card__label">
      PART I / MARKET INTELLIGENCE
    </span>

    <span class="eh-project-card__title">
      Automated Macro Dashboard
    </span>

    <span class="eh-project-card__description">
      Around seventy charts across global markets,
      the world economy and India — regenerated
      from live data every Saturday.
    </span>

    <span class="eh-project-card__footer">
      <span>Explore project</span>
      <span class="eh-project-card__arrow"
            aria-hidden="true">↓</span>
    </span>

  </a>

  <!-- PART II: RBI SENTINEL -->

  <a href="#sentinel"
     class="eh-project-card eh-project-card--rbi">

    <span class="eh-project-card__label">
      PART II / MONETARY POLICY
    </span>

    <span class="eh-project-card__title">
      RBI Sentinel
    </span>

    <span class="eh-project-card__description">
      Sentiment analysis of the RBI's Monetary Policy
      Committee documents, with a live out-of-sample
      test running from October 2026.
    </span>

    <span class="eh-project-card__footer">
      <span>Explore project</span>
      <span class="eh-project-card__arrow"
            aria-hidden="true">↓</span>
    </span>

  </a>

</nav>


<!-- chart-reel -->

---

## Part I · Automated Macro Dashboard {#dashboard}

A scheduled pipeline that pulls live market and macro data, draws it through one shared chart
style, and publishes the result. No step is manual, and nothing is ever a placeholder: a missing
API key or an unreachable source fails the run rather than filling a gap.

<div style="text-align: center; margin: 2rem 0 2.5rem 0;">
  <a href="https://weekly-macro-dashboard.streamlit.app/" target="_blank"
     style="display: inline-block; background-color: #003366; color: #ffffff; padding: 1.1rem 2.5rem; font-family: 'Inter', -apple-system, sans-serif; font-size: 0.90rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; border-radius: 3px; box-shadow: 0 4px 12px rgba(0, 51, 102, 0.2); transition: all 0.2s ease-in-out;"
     onmouseover="this.style.backgroundColor='#0A1128'; this.style.transform='translateY(-2px)';"
     onmouseout="this.style.backgroundColor='#003366'; this.style.transform='translateY(0)';">
    Launch Live Dashboard ↗
  </a>
</div>

### What it publishes

Four sections, each with its own link and its own generator.

| Section | What it covers | Charts |
|---|---|---|
| [Weekly Markets](https://weekly-macro-dashboard.streamlit.app/) | Equities, rates, credit, FX, commodities, emerging markets and crypto — the week's moves set against twelve-month trends | 36 |
| [World](https://weekly-macro-dashboard.streamlit.app/world) | Central bank rates and calendars, a six-economy scoreboard, US valuations (Shiller CAPE, implied equity risk premium), country risk | 12 |
| [India](https://weekly-macro-dashboard.streamlit.app/india) | Growth, inflation, monetary conditions, external balances, portfolio flows, central government fiscal accounts | 15 |
| [RBI Sentinel](https://weekly-macro-dashboard.streamlit.app/rbi-sentinel) | Policy tone — [Part II](#sentinel) below | 6 |

The Weekly page also carries **The Week in Headlines**: the week's most-covered stories in world and
Indian economics, collected every four hours from fifteen feeds across nine outlets and ranked by
how many outlets carried a story and how many days it stayed in the news. Headlines are never
written by the system — an unreadable feed is dropped, not invented.

### How it is built

Two ingestion streams feed one charting engine:

- **Market data** — a `YFinanceFetcher` pulls equity indices, FX pairs, commodities and volatility
  measures.
- **Macro fundamentals** — a `FredFetcher` pulls the full US Treasury curve, credit spreads and
  inflation breakevens from FRED.

Every series carries a maximum age. A source that quietly stops updating fails the run instead of
publishing a stale number — the failure mode that matters most on a dashboard nobody is watching.

Both streams are standardised into pandas DataFrames and drawn through a shared `EconStyle` module
holding every visual constant in the project: colours, sizes, DPI, the rule above each title, the
source line beneath it. No chart sets its own.

GitHub Actions runs the generators on a schedule — Weekly Markets and India on Saturday morning,
World mid-morning, RBI Sentinel on weekday evenings and through the day of a policy decision. Each
run commits its images. Streamlit Cloud serves them straight from the repository, and a loader finds
the newest dated folder by natural sort rather than a hard-coded file list, so adding a chart needs
no change to the app.

<figure class="pipeline">
  <ol class="pipeline__steps">
    <li class="pipeline__step pipeline__step--pair">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="landmark" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Macro fundamentals</span> <span class="pipeline__detail">FRED API</span></span>
      </div>
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="candlestick" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Market data</span> <span class="pipeline__detail">Yahoo Finance</span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node pipeline__node--hub">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="cog" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">ETL and charting engine</span> <span class="pipeline__detail">pandas processing, <code>EconStyle</code> rendering</span></span>
      </div>
    </li>
    <li class="pipeline__step pipeline__step--pair">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="calendar-clock" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Scheduled runs</span> <span class="pipeline__detail">GitHub Actions</span></span>
      </div>
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="laptop" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Local runs</span> <span class="pipeline__detail">on demand</span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="dashboard" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Streamlit dashboard</span> <span class="pipeline__detail">four sections, four links</span></span>
      </div>
    </li>
  </ol>
</figure>

---

## Part II · RBI Sentinel {#sentinel}

Central banks move markets twice: once when they change the policy rate, and again in how they
describe the decision. The rate is a number anyone can read. The description is prose, and reading
it consistently across a decade of meetings is the part nobody does by hand.

RBI Sentinel scores every Monetary Policy Committee document the Reserve Bank has published since
October 2016 on a single hawkish–dovish scale, then asks a deliberately unkind question of the
result: **does the tone tell you anything the rate decision and the RBI's own stated stance do
not?**

<div style="text-align: center; margin: 2rem 0 2.5rem 0;">
  <a href="https://weekly-macro-dashboard.streamlit.app/rbi-sentinel" target="_blank"
     style="display: inline-block; background-color: #8B1A1A; color: #ffffff; padding: 1.1rem 2.5rem; font-family: 'Inter', -apple-system, sans-serif; font-size: 0.90rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; border-radius: 3px; box-shadow: 0 4px 12px rgba(139, 26, 26, 0.2); transition: all 0.2s ease-in-out;"
     onmouseover="this.style.backgroundColor='#5F1111'; this.style.transform='translateY(-2px)';"
     onmouseout="this.style.backgroundColor='#8B1A1A'; this.style.transform='translateY(0)';">
    Open RBI Sentinel ↗
  </a>
</div>

### The corpus

| | |
|---|---|
| Period | October 2016 – August 2026 |
| Policy cycles | 61 |
| Documents collected | 285 |
| Document types | MPC Resolution (143), Governor's Statement (81), Minutes (61) |
| Rate outcome by cycle | 40 hold · 13 cut · 8 hike |

Documents are discovered directly from rbi.org.in, not a redistributed dataset. Only press releases
are scored; the Monthly Bulletin reprints the same text weeks later and is excluded, because scoring
it would count a meeting twice.

That outcome distribution deserves a pause. Two thirds of cycles were holds, and only 21 of 61
produced a move at all. Any claim that a text signal "predicts the decision" has to beat a rule as
crude as *always say hold*, which is right 66% of the time.

### How a document is scored

A hybrid: **10% rule-based lexicon, 90% large language model.**

- **Lexicon** — a hand-built list of RBI-specific hawkish and dovish phrasing, counted with a
  five-word negation window and density-adjusted through a `tanh` transform, so a long document is
  not mechanically more hawkish than a short one.
- **Model** — Claude Opus 5 reads the full document and returns a score from −1 (very dovish) to
  +1 (very hawkish), with five sub-dimensions: inflation concern, growth assessment, liquidity
  stance, rate guidance and external (rupee) stance.

The 10/90 split is measured, not assumed. Across the corpus the lexicon's standard deviation is
0.263 against the model's 0.587 — the keyword counter is 2.2× narrower, because the `tanh`
normalisation compresses it toward zero. An earlier 25% weighting dragged every confident reading
toward the middle: a document the model read at −0.95 could not be matched by a lexicon whose range
stops near −0.64. At 10% the lexicon survives as an independent cross-check without flattening the
signal.

A meeting's composite weights **Minutes 50%, Resolution 35%, Governor's Statement 15%** — the
Minutes most heavily because they record individual members' reasoning, which is where disagreement
shows.

**Facts are extracted without the model:** The rate decision, the stated stance, the RBI's CPI and
GDP projections and the next meeting date are read from the Resolution by regular expression, and
verified against all 61 cycles. Anything a regex can read reliably should not be handed to a
language model: it costs money, and it introduces a failure mode where the number on the dashboard
is a plausible invention. Only the tone judgement goes to the model.

<figure class="pipeline pipeline--oxblood">
  <ol class="pipeline__steps">
    <li class="pipeline__step">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="globe" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Discovery and cache</span> <span class="pipeline__detail">rbi.org.in</span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="scan-text" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Extraction</span> <span class="pipeline__detail">HTML parsing, text normalisation</span></span>
      </div>
    </li>
    <li class="pipeline__step pipeline__step--pair">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="book-open" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Lexicon scorer</span> <span class="pipeline__detail">RBI-specific terms, negation window</span></span>
      </div>
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="sparkles" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Model scorer</span> <span class="pipeline__detail">Claude Opus 5</span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node pipeline__node--hub">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="blend" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Fusion and divergence check</span> <span class="pipeline__detail">0.10 lexicon + 0.90 model</span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="database" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">SQLite</span> <span class="pipeline__detail"><code>rbi_sentinel.db</code></span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="chart" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Chart generation</span></span>
      </div>
    </li>
    <li class="pipeline__step">
      <div class="pipeline__node">
        <span class="pipeline__icon" aria-hidden="true">{% include site/icon.html name="dashboard" %}</span>
        <span class="pipeline__text"><span class="pipeline__label">Streamlit dashboard</span></span>
      </div>
    </li>
  </ol>
</figure>

### What it found

**Tone does not predict the rate decision:** The composite tracks the policy cycle closely, but once
the RBI's own stated stance is in the model, tone adds nothing. This is a negative result and it is
reported as one. It is also unsurprising in hindsight: the stance *is* the committee's compressed
summary of its own tone, published deliberately.

**No reliable relationship with equities, the rupee or volatility:** Tested against Nifty, Bank
Nifty, USD/INR, gold and India VIX, nothing survived. Given how many pairs were tested, a couple of
suggestive correlations would have been the expected result of chance alone; there were none worth
reporting.

**Tone does line up with the bond market's reaction on decision day:** The change in Resolution tone
from one cycle to the next corresponds to the move in the 10-year government security yield that day
— roughly 5 basis points for a typical shift in tone. This is the one relationship that held, and
also the one most plausible in advance: the bond market prices the path of policy, and the
Resolution's language is the clearest public statement about that path.

### The problem with that result

**Every meeting in this sample happened before the scoring model was trained:** A model that has read
financial journalism up to its training cutoff has, in principle, encountered commentary about these
very meetings, including what the bond market did afterwards. Nothing in a backtest can rule out the
possibility that the model is recalling the outcome rather than reading the document.

This is the central methodological risk in applying language models to historical text, and holding
out a test set does not solve it, because the contamination is in the model's weights, not the
analyst's data split.

### From October 2026, for every new Resolution:

1. The tone score is computed and committed to the repository **before the 17:00 IST government
   securities close**, with a timestamp.
2. The 10-year yield close is entered separately, afterwards, by hand — the RBI publishes no free
   machine-readable close, and rather than substitute a proxy the pipeline opens an issue and waits
   for the real number.
3. Both are appended to a log that is never retroactively edited.

Each meeting is therefore a genuine out-of-sample observation, recorded before the outcome exists.
The sample grows by about six observations a year, which is slow — and that is what honest evidence
costs in a field with six data points a year.

Until that log has a meaningful number of entries, the decision-day result should be read as **a
hypothesis with supporting historical evidence, not an established finding.**

### Engineering constraints

- **Model spend is capped structurally:** A document reaches the model only if it is new, belongs to
  an MPC cycle and clears a minimum length. A scheduled run scores at most four documents; a larger
  backlog scores nothing and fails the run, so a discovery bug cannot quietly spend money. Normal
  cost is about $0.15 per meeting.
- **Scheduling follows the calendar, not the clock:** The pipeline reads the next meeting date out
  of the latest Resolution and only runs intraday checks on decision day. Every other day the gate
  exits in seconds.
- **Every score carries the version of the method that produced it:** Changing the method means
  bumping that version; old scores are kept rather than overwritten, so a published number can always
  be traced to how it was calculated.
- **Charts are fingerprinted against the data that drew them,** and a test fails if the database has
  moved since. A stale chart is a wrong chart.

### Limitations

- Sixty-one policy cycles is a small sample, and 21 rate moves is smaller still. Every historical
  result here is provisional.
- The scoring model is closed and versioned by its vendor. Reproducing a score years from now
  requires the same model version — which is why scores are stored with their method version rather
  than recomputed.
- The decision-day result is a same-day association, not a demonstrated trading edge. Nothing here
  has been tested after transaction costs, and the dashboard makes no recommendation.
- The tone scale is one-dimensional by construction. The five sub-dimensions exist because a single
  hawkish–dovish number discards genuine disagreement — a committee worried about inflation and
  growth at once, for instance.
