---
layout: page
title: Jump-Risk Anomaly
description: Intraday Jump Detection - 3.5x Sharpe Improvement
img:
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

Detect intraday price jumps using Lee-Mykland non-parametric methods and exploit the cross-sectional relationship between jump intensity and expected returns. Jump risk is systematic but often unpriced—stocks with high jump intensity earn lower expected returns.

**Process:**

1. Apply Lee-Mykland (2008) jump detection on 15-min tick data
2. Calculate monthly jump intensity (sum of absolute jump returns)
3. Sort stocks into deciles by jump intensity
4. Long low-jump / Short high-jump portfolio
5. Add bear market regime filter for improved risk-adjusted returns

---

## Results

_Performance charts coming soon_

---

## Tech Stack

Python, NumPy, pandas, Lee-Mykland detection, Fama-MacBeth regression
