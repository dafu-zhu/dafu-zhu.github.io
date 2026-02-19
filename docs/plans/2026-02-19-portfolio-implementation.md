# Portfolio Website Redesign - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform dafu-zhu.github.io from placeholder content to a professional quant finance portfolio with 4 case study projects.

**Architecture:** Jekyll static site using al-folio theme. Update config, about page, CV (resume.json), and replace placeholder projects with real internship work. Extract images from Jupyter notebooks.

**Tech Stack:** Jekyll, Liquid templates, JSON (resume), Markdown, Python/Jupyter (for image extraction)

---

### Task 1: Update Site Configuration

**Files:**

- Modify: `_config.yml`

**Step 1: Update basic site info**

```yaml
title: blank # CHANGE TO: (leave blank, name shows)
first_name: Dafu
last_name: Zhu
contact_note: >
  You can even add a little note... # DELETE THIS ENTIRE BLOCK
description: >
  A simple, whitespace theme... # CHANGE TO: Quantitative researcher specializing in factor models, statistics, and data infrastructure
keywords: jekyll, jekyll-theme... # CHANGE TO: quantitative finance, factor investing, statistics, data infrastructure
```

**Step 2: Update scholar settings**

```yaml
scholar:
  last_name: [Einstein] # CHANGE TO: [Zhu]
  first_name: [Albert, A.] # CHANGE TO: [Dafu, D.]
```

**Step 3: Remove external blog sources**

```yaml
external_sources: # DELETE THIS ENTIRE BLOCK
  - name: medium.com
    rss_url: https://medium.com/@al-folio/feed
  - name: Google Blog
    posts:
      - url: https://blog.google/...
```

**Step 4: Verify changes**

Run: `grep -E "Einstein|medium.com|whitespace theme" _config.yml`
Expected: No matches

**Step 5: Commit**

```bash
git add _config.yml
git commit -m "feat: update site config with personal info"
```

---

### Task 2: Update About Page

**Files:**

- Modify: `_pages/about.md`

**Step 1: Update front matter**

Replace lines 1-15 with:

```markdown
---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info:
---
```

**Step 2: Replace bio content**

Replace lines 17-21 with:

```markdown
Quantitative researcher with focus on factor models, statistical methods, and data infrastructure. Currently seeking internship opportunities in quantitative finance.

My work spans alpha research, portfolio construction, and trading system development. I build end-to-end systems from data pipelines to backtesting frameworks.
```

**Step 3: Verify changes**

Run: `head -25 _pages/about.md`
Expected: New bio content, no placeholder text

**Step 4: Commit**

```bash
git add _pages/about.md
git commit -m "feat: update about page with bio"
```

---

### Task 3: Create Resume JSON

**Files:**

- Modify: `assets/json/resume.json`

**Step 1: Replace entire file with new content**

Write complete resume.json based on tex source (see design doc for full content).

Key sections:

- basics: name, email, location, profiles
- education: 2 entries (no GPA)
- work: 4 internships
- projects: 3 projects
- skills: languages + infrastructure

**Step 2: Validate JSON**

Run: `python -m json.tool assets/json/resume.json > /dev/null && echo "Valid JSON"`
Expected: "Valid JSON"

**Step 3: Commit**

```bash
git add assets/json/resume.json
git commit -m "feat: add real resume data"
```

---

### Task 4: Delete Placeholder Projects

**Files:**

- Delete: `_projects/1_project.md` through `_projects/9_project.md`

**Step 1: Remove all placeholder projects**

Run: `rm _projects/[1-9]_project.md`

**Step 2: Verify deletion**

Run: `ls _projects/`
Expected: Empty or only new projects

**Step 3: Commit**

```bash
git add -A _projects/
git commit -m "chore: remove placeholder projects"
```

---

### Task 5: Create DCAM Project

**Files:**

- Create: `_projects/dcam.md`

**Step 1: Create project file**

```markdown
---
layout: page
title: DCAM
description: Dynamic Contextual Alpha Model - IC 0.087, 6.5-8.3% excess return
img: assets/img/projects/dcam_cumulative.png
importance: 1
category: internship
---

## Overview

**Company:** Infinity Capital Management | **Role:** Quantitative Researcher Intern | **Period:** Mar-Jul 2024

Multi-factor equity model with dynamic factor weighting and momentum signals, applied as index enhancement strategy across CSI benchmarks.

**Key Results:**

- IC: 0.087 with ICIR 0.589
- Annual excess return: 6.5-8.3% across CSI benchmarks

---

## Methodology

### What

DCAM combines context-aware factor stratification with ICIR-based dynamic weighting:

- 70% ICIR Baseline: Stratify by market cap, B/P, growth context
- 30% ML Predictor: ElasticNet for global factor-return prediction
- Lowdin orthogonalization for factor decorrelation

### Why

Traditional factor models apply uniform weights across all market conditions. DCAM recognizes that factor efficacy varies by context (large-cap value behaves differently from small-cap growth).

### How

1. Stratify universe by context factors (market cap, B/P, growth)
2. Calculate IC within each stratified group
3. Apply 12-month rolling ICIR weighting
4. Blend with ML predictions using z-score normalization

---

## Results

![Cumulative Returns](/assets/img/projects/dcam_cumulative.png)

![Quintile Performance](/assets/img/projects/dcam_quintile.png)

---

## Tech Stack

Python, NumPy, pandas, scikit-learn (ElasticNet), scipy (Lowdin orthogonalization)
```

**Step 2: Commit**

```bash
git add _projects/dcam.md
git commit -m "feat: add DCAM project page"
```

---

### Task 6: Create All-Weather Project

**Files:**

- Create: `_projects/all-weather.md`

**Step 1: Create project file**

```markdown
---
layout: page
title: All-Weather Strategy
description: Risk Parity Implementation - Sharpe 1.34, -7.68% MaxDD
img: assets/img/projects/allweather_equity.png
importance: 2
category: internship
---

## Overview

**Company:** Infinity Capital Management | **Role:** Quantitative Researcher Intern | **Period:** Mar-Jul 2024

Pure implementation of Ray Dalio's All Weather Strategy with Ledoit-Wolf covariance shrinkage and drift-threshold rebalancing.

**Key Results:**

- Sharpe Ratio: 1.34
- Max Drawdown: -7.68%
- 6-year backtest (2018-2024)

---

## Methodology

### What

Risk parity strategy where each asset contributes equally to portfolio risk, ensuring consistent performance across economic environments.

### Why

Traditional portfolios are dominated by equity risk. Risk parity allocates by risk contribution, not capital, providing true diversification.

### How

1. Estimate covariance using Ledoit-Wolf shrinkage (252-day lookback)
2. Optimize weights for equal risk contribution
3. Weekly rebalancing with drift-threshold (reduce turnover)
4. Transaction cost modeling (0.03%)

---

## Results

![Equity Curve](/assets/img/projects/allweather_equity.png)

![Weight Evolution](/assets/img/projects/allweather_weights.png)

---

## Tech Stack

Python, NumPy, pandas, scipy (optimization), Ledoit-Wolf shrinkage
```

**Step 2: Commit**

```bash
git add _projects/all-weather.md
git commit -m "feat: add All-Weather project page"
```

---

### Task 7: Create Jump-Risk Project

**Files:**

- Create: `_projects/jump-risk.md`

**Step 1: Create project file**

```markdown
---
layout: page
title: Jump-Risk Anomaly
description: Intraday Jump Detection - 3.5x Sharpe Improvement
img: assets/img/projects/jumprisk_portfolio.png
importance: 3
category: research
---

## Overview

**Company:** China Industrial Securities | **Role:** Quantitative Analyst Intern | **Period:** Sep 2023 - Feb 2024

Validated jump-intensity anomaly on CSI300 using Lee-Mykland detection and SDF framework with tick data.

**Key Results:**

- 3.5x Sharpe improvement with bear market regime filter
- Based on academic framework (Yan 2008)

---

## Methodology

### What

Detect intraday price jumps using non-parametric methods and exploit the cross-sectional relationship between jump intensity and expected returns.

### Why

Jump risk is systematic but often unpriced. Stocks with high jump intensity earn lower expected returns (negative risk premium for jump exposure).

### How

1. Apply Lee-Mykland (2008) jump detection on 15-min tick data
2. Calculate monthly jump intensity (sum of absolute jump returns)
3. Sort stocks into deciles by jump intensity
4. Long low-jump / Short high-jump portfolio
5. Add bear market regime filter for improved risk-adjusted returns

---

## Results

![Portfolio Performance](/assets/img/projects/jumprisk_portfolio.png)

---

## Tech Stack

Python, NumPy, pandas, Lee-Mykland detection, Fama-MacBeth regression
```

**Step 2: Commit**

```bash
git add _projects/jump-risk.md
git commit -m "feat: add Jump-Risk project page"
```

---

### Task 8: Create Market Regime Project

**Files:**

- Create: `_projects/market-regime.md`

**Step 1: Create project file**

```markdown
---
layout: page
title: Market Regime Analysis
description: HMM Sector Rotation - 2.15x vs 1.10x Benchmark
img: assets/img/projects/regime_performance.png
importance: 4
category: internship
---

## Overview

**Company:** China Industrial Securities | **Role:** Quantitative Analyst Intern | **Period:** Sep 2023 - Feb 2024

3-state Hidden Markov Model for macro regime classification with sector rotation strategy.

**Key Results:**

- 2.15x cumulative return vs 1.10x benchmark
- Validated across 11 rolling windows
- Sharpe 1.01

---

## Methodology

### What

Detect market regimes (Bull/Sideways/Bear) using HMM on sector returns, then rotate into appropriate sectors.

### Why

Market behavior differs dramatically across regimes. Bull markets favor growth sectors; bear markets require defensive positioning.

### How

1. Train 3-state Gaussian HMM on 28 CITIC sector daily returns
2. Apply 30-day probability smoothing (reduces whipsaw 95%)
3. Bull: Long top 5 growth sectors (100% allocation)
4. Sideways: Cash (0% allocation)
5. Bear: Long top 5 defensive sectors (100% allocation)

---

## Results

![Strategy Performance](/assets/img/projects/regime_performance.png)

![Regime Timeline](/assets/img/projects/regime_timeline.png)

---

## Tech Stack

Python, hmmlearn, NumPy, pandas, scikit-learn
```

**Step 2: Commit**

```bash
git add _projects/market-regime.md
git commit -m "feat: add Market Regime project page"
```

---

### Task 9: Create Project Images Directory

**Files:**

- Create: `assets/img/projects/` directory

**Step 1: Create directory**

Run: `mkdir -p assets/img/projects`

**Step 2: Commit**

```bash
git add assets/img/projects/.gitkeep 2>/dev/null || touch assets/img/projects/.gitkeep && git add assets/img/projects/.gitkeep
git commit -m "chore: create projects image directory"
```

---

### Task 10: Export DCAM Images

**Files:**

- Run notebook: `/Users/zdf/Documents/GitHub/dcam/notebooks/02_dcam_baseline.ipynb`
- Copy to: `assets/img/projects/dcam_*.png`

**Step 1: Run notebook and export images**

Run the notebook, then save figures:

- Cumulative returns chart → `dcam_cumulative.png`
- Quintile performance → `dcam_quintile.png`

**Step 2: Copy images**

```bash
cp /Users/zdf/Documents/GitHub/dcam/[exported_images] assets/img/projects/
```

**Step 3: Commit**

```bash
git add assets/img/projects/dcam_*.png
git commit -m "feat: add DCAM project images"
```

---

### Task 11: Export All-Weather Images

**Files:**

- Run notebook: `/Users/zdf/Documents/GitHub/all-weather/notebooks/all_weather_v1_baseline.ipynb`
- Copy to: `assets/img/projects/allweather_*.png`

**Step 1: Run notebook and export images**

- Equity curve vs benchmark → `allweather_equity.png`
- Weight evolution → `allweather_weights.png`

**Step 2: Copy images**

```bash
cp /Users/zdf/Documents/GitHub/all-weather/[exported_images] assets/img/projects/
```

**Step 3: Commit**

```bash
git add assets/img/projects/allweather_*.png
git commit -m "feat: add All-Weather project images"
```

---

### Task 12: Export Market Regime Images

**Files:**

- Source: `/Users/zdf/Documents/GitHub/mkt-regime-analysis/outputs/figures/`
- Copy to: `assets/img/projects/regime_*.png`

**Step 1: Copy existing images**

```bash
cp /Users/zdf/Documents/GitHub/mkt-regime-analysis/outputs/figures/regime_strategy_performance.png assets/img/projects/regime_performance.png
cp /Users/zdf/Documents/GitHub/mkt-regime-analysis/outputs/figures/regime_timeline.png assets/img/projects/regime_timeline.png
```

**Step 2: Commit**

```bash
git add assets/img/projects/regime_*.png
git commit -m "feat: add Market Regime project images"
```

---

### Task 13: Update Projects Page Description

**Files:**

- Modify: `_pages/projects.md`

**Step 1: Update description**

Change line 5:

```yaml
description: A growing collection of your cool projects.
```

to:

```yaml
description: Quantitative research and trading systems from internship experience
```

**Step 2: Update categories**

Change line 8:

```yaml
display_categories: [work, fun]
```

to:

```yaml
display_categories: [internship, research]
```

**Step 3: Commit**

```bash
git add _pages/projects.md
git commit -m "feat: update projects page description"
```

---

### Task 14: Final Cleanup and Test

**Step 1: Kill existing Jekyll server**

Run: `pkill -f "jekyll serve"`

**Step 2: Rebuild site**

Run: `bundle exec jekyll serve --livereload`

**Step 3: Verify all pages**

- http://127.0.0.1:4000/ (About page)
- http://127.0.0.1:4000/projects/ (4 projects)
- http://127.0.0.1:4000/repositories/ (GitHub repos)
- http://127.0.0.1:4000/cv/ (Resume)

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign"
```

---

## Summary

| Task | Description          | Files                     |
| ---- | -------------------- | ------------------------- |
| 1    | Update config        | `_config.yml`             |
| 2    | Update about page    | `_pages/about.md`         |
| 3    | Create resume JSON   | `assets/json/resume.json` |
| 4    | Delete placeholders  | `_projects/*.md`          |
| 5-8  | Create 4 projects    | `_projects/`              |
| 9-12 | Export images        | `assets/img/projects/`    |
| 13   | Update projects page | `_pages/projects.md`      |
| 14   | Final test           | -                         |
