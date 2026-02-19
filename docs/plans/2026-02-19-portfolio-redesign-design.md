# Portfolio Website Redesign - Design Document

**Date:** 2026-02-19
**Author:** Claude (with Dafu Zhu)
**Status:** Approved

## Overview

Redesign dafu-zhu.github.io as a clean, professional portfolio targeting recruiters at quantitative finance firms. Uses Case Study style with detailed project pages.

## Target Audience

- Recruiters/hiring managers at quant firms
- Student seeking internship in quantitative finance

## Site Structure

**Navigation:** `about` | `projects` | `repositories` | `cv`

## Section 1: Config Updates

**_config.yml changes:**
- Title: "Dafu Zhu"
- Description: "Quantitative researcher specializing in factor models, statistics, and data infrastructure"
- Keywords: "quantitative finance, factor investing, statistics, data infrastructure"
- scholar.last_name: Zhu
- scholar.first_name: Dafu
- Remove contact_note placeholder
- Update social links (GitHub, LinkedIn, Email)

## Section 2: About Page

**Layout:**
- Profile photo (right-aligned)
- Short bio paragraph
- GitHub stats card (github-readme-stats-fast.vercel.app)

**Bio:**
> Quantitative researcher with focus on factor models, statistical methods, and data infrastructure. Currently seeking internship opportunities in quantitative finance.
>
> My work spans alpha research, portfolio construction, and trading system development. I build end-to-end systems from data pipelines to backtesting frameworks.

**Remove:**
- Placeholder address/office number
- Placeholder subtitle
- Sample social links text

## Section 3: Projects Page

**Structure:** 4 project cards → detailed case study pages

| Project | Company | Headline Metric |
|---------|---------|-----------------|
| DCAM | Infinity Capital | IC 0.087, 6.5-8.3% excess return |
| All-Weather | Infinity Capital | Sharpe 1.34, -7.68% MaxDD |
| Jump-Risk | China Industrial Securities | 3.5x Sharpe improvement |
| Market Regime | China Industrial Securities | 2.15x vs 1.10x benchmark |

**Each project detail page:**
1. Overview - What it is, key results
2. Methodology - How it works (What/Why/How)
3. Results - Performance metrics + embedded images/charts
4. Tech Stack - Python, libraries used

**Image sources:**
- DCAM: Run `notebooks/02_dcam_baseline.ipynb`
- All-Weather: Run `notebooks/all_weather_v1_baseline.ipynb`
- Jump-Risk: Run `notebooks/06_methodology_complete.ipynb`
- Market Regime: Use existing `outputs/figures/*.png`

## Section 4: CV Page

**Source:** `/Users/zdf/Downloads/main.tex`

**resume.json structure:**
- basics: name, location (Chicago, IL), email, LinkedIn, GitHub
- education: UChicago MSFM (Expected Dec 2026), Xiamen B.Econ (June 2025) - NO GPA
- work: 4 internships with bullet points
- projects: 3 projects with descriptions
- skills: languages + infrastructure/libraries

## Section 5: Cleanup

**Delete:**
- 9 placeholder projects in `_projects/`
- Einstein references in resume.json
- Sample external blog posts (medium.com, Google Blog)

**Update:**
- Footer text (keep Jekyll/al-folio credit)
- Remove Unsplash reference

## Implementation Order

1. Update `_config.yml` with new settings
2. Update `_pages/about.md` with bio
3. Create `resume.json` from tex file
4. Delete placeholder projects
5. Create 4 real project files with content
6. Run notebooks to export images
7. Copy images to `assets/img/projects/`
8. Update project pages with images
9. Final cleanup and testing

## Files to Modify

- `_config.yml`
- `_pages/about.md`
- `assets/json/resume.json`
- `_pages/projects.md`
- `_projects/*.md` (delete old, create 4 new)
- `assets/img/projects/` (new directory)

## Project Source Mapping

| Website Project | Source Folder |
|-----------------|---------------|
| DCAM | `/Users/zdf/Documents/GitHub/dcam` |
| All-Weather | `/Users/zdf/Documents/GitHub/all-weather` |
| Jump-Risk | `/Users/zdf/Documents/GitHub/jump-risk` |
| Market Regime | `/Users/zdf/Documents/GitHub/mkt-regime-analysis` |
