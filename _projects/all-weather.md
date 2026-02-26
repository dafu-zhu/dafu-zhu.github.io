---
layout: page
title: All-Weather Strategy
description: Risk Parity v2.1 - Asymmetric Mean-Reversion
img: assets/img/projects/allweather_equity.png
importance: 2
category: internship
---

## Overview

**Company:** Infinity Capital Management | **Role:** Quantitative Researcher Intern | **Period:** Mar-Jul 2024

Implementation of Ray Dalio's All Weather Strategy with Ledoit-Wolf covariance shrinkage and **asymmetric mean-reversion** (v2.1).

**Key Results:**

- Sharpe Ratio: 1.11 (backtest 2018-2026)
- Max Drawdown: -6.83%
- Total Return: +93%
- Live tracking since Jan 2026

---

## Methodology

Risk parity allocates by risk contribution rather than capital, ensuring each asset contributes equally to portfolio volatility. This provides true diversification since traditional portfolios are dominated by equity risk.

**v2.1 Enhancements:**

1. **Asymmetric thresholds**: 3% trim (lock gains early) / 10% buy (patient on dips)
2. **Daily drift checking**: Per-asset rebalancing when thresholds breached
3. **Weekly optimization**: Target weights updated every Monday via risk parity

**Process:**

1. Estimate covariance using Ledoit-Wolf shrinkage (252-day lookback)
2. Optimize weights for equal risk contribution
3. Daily monitoring with asymmetric drift thresholds
4. Transaction cost modeling (0.03%)

---

## Results

### Equity Curve

The All Weather v2.1 portfolio returns +93% over the 2018-2026 backtest period, significantly outperforming the CSI 300 benchmark. The strategy delivers smoother growth with max drawdown of -6.83%, compared to the benchmark's much deeper drawdowns during market corrections.

<img src="/assets/img/projects/allweather_equity.png" alt="Equity Curve" style="max-width: 900px; width: 100%;">

### Asset Allocation

Risk parity naturally allocates ~70% to government bonds, which carry low volatility but contribute equal risk to equities and commodities. The weights remain stable over time, with only gradual shifts as cross-asset correlations evolve.

<img src="/assets/img/projects/allweather_weights.png" alt="Weight Evolution" style="max-width: 900px; width: 100%;">

---

## Tech Stack

Python, NumPy, pandas, scipy (optimization), Ledoit-Wolf shrinkage

---

## Live Strategy Tracker (2026)

<p id="strategy-tracker-status" style="color: #666; font-size: 0.9em;">Loading...</p>

<div id="strategy-tracker-metrics" style="display: flex; gap: 20px; margin-bottom: 15px; flex-wrap: wrap;">
</div>

<div id="strategy-tracker-chart" style="width: 100%; height: 300px; border: 1px solid #eee; border-radius: 4px;">
</div>

<style>
  #strategy-tracker-metrics .metric {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    background: #f8f9fa;
    border-radius: 4px;
  }
  #strategy-tracker-metrics .label {
    font-size: 0.8em;
    color: #666;
  }
  #strategy-tracker-metrics .value {
    font-size: 1.2em;
    font-weight: 600;
  }
  #strategy-tracker-metrics .positive { color: #4caf50; }
  #strategy-tracker-metrics .negative { color: #f44336; }
</style>

<script src="https://unpkg.com/lightweight-charts@4.1.0/dist/lightweight-charts.standalone.production.js"></script>
<script src="/assets/js/strategy-tracker.js"></script>
