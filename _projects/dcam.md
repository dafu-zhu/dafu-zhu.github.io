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

Context-aware factor stratification with ICIR-based dynamic weighting. Traditional models apply uniform weights; DCAM adjusts for context since large-cap value behaves differently from small-cap growth.

**Architecture:**
- 70% ICIR Baseline: Stratify by market cap, B/P, growth
- 30% ML Predictor: ElasticNet for factor-return prediction
- Lowdin orthogonalization for factor decorrelation

**Process:**
1. Stratify universe by context factors
2. Calculate IC within each stratum
3. Apply 24-month rolling ICIR weighting with 6-month momentum
4. Blend with ML predictions using z-score normalization

---

## Results

<img src="/assets/img/projects/dcam_cumulative.png" alt="Cumulative Returns" style="max-width: 800px; width: 100%;">

<img src="/assets/img/projects/dcam_quintile.png" alt="Quintile Performance" style="max-width: 800px; width: 100%;">

---

## Tech Stack

Python, NumPy, pandas, scikit-learn (ElasticNet), scipy (Lowdin orthogonalization)
