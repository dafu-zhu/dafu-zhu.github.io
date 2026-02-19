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
