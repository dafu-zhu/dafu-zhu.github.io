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

<img src="/assets/img/projects/allweather_equity.png" alt="Equity Curve" style="max-width: 600px; width: 100%;">

<img src="/assets/img/projects/allweather_weights.png" alt="Weight Evolution" style="max-width: 600px; width: 100%;">

---

## Tech Stack

Python, NumPy, pandas, scipy (optimization), Ledoit-Wolf shrinkage
