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

Detect market regimes using HMM on sector returns, then rotate into appropriate sectors. Market behavior differs dramatically across regimes. Bull markets favor growth sectors while bear markets require defensive positioning.

**Process:**

1. Train 3-state Gaussian HMM on 28 CITIC sector daily returns
2. Apply 30-day probability smoothing (reduces whipsaw 95%)
3. Bull: Long top 5 growth sectors (100% allocation)
4. Sideways: Cash (0% allocation)
5. Bear: Long top 5 defensive sectors (100% allocation)

---

## Results

### Strategy Performance

The HMM sector rotation strategy achieves 2.15x cumulative return versus 1.10x for the benchmark over the 2018-2023 period. The staircase-like equity curve reflects the strategy's ability to stay in cash during sideways markets, avoiding drawdowns while capturing upside during bull regimes.

<img src="/assets/img/projects/regime_performance.png" alt="Strategy Performance" style="max-width: 900px; width: 100%;">

### Regime Classification

The HMM correctly identifies major market events including the 2015 stock market crash, 2018 trade war, and COVID-19 selloff as bear regimes. 30-day probability smoothing eliminates regime whipsaw, reducing false transitions by 95%.

<img src="/assets/img/projects/regime_timeline.png" alt="Regime Timeline" style="max-width: 900px; width: 100%;">

---

## Tech Stack

Python, hmmlearn, NumPy, pandas, scikit-learn
