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

Risk parity allocates by risk contribution rather than capital, ensuring each asset contributes equally to portfolio volatility. This provides true diversification since traditional portfolios are dominated by equity risk.

**Process:**

1. Estimate covariance using Ledoit-Wolf shrinkage (252-day lookback)
2. Optimize weights for equal risk contribution
3. Weekly rebalancing with drift-threshold to reduce turnover
4. Transaction cost modeling (0.03%)

---

## Results

### Equity Curve

The All Weather portfolio returns +70% over the 2018-2026 backtest period, nearly doubling the CSI 300 benchmark (+36%). The strategy delivers smoother growth with significantly lower drawdowns, particularly during the 2022-2023 bear market where the benchmark fell while the portfolio held steady.

<img src="/assets/img/projects/allweather_equity.png" alt="Equity Curve" style="max-width: 900px; width: 100%;">

### Asset Allocation

Risk parity naturally allocates ~70% to government bonds, which carry low volatility but contribute equal risk to equities and commodities. The weights remain stable over time, with only gradual shifts as cross-asset correlations evolve.

<img src="/assets/img/projects/allweather_weights.png" alt="Weight Evolution" style="max-width: 900px; width: 100%;">

---

## Tech Stack

Python, NumPy, pandas, scipy (optimization), Ledoit-Wolf shrinkage
