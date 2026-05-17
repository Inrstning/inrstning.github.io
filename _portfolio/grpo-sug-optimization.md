---
title: "GRPO-based SUG Model Optimization"
excerpt: "verl + FSDP + vLLM rollout. CTR Reward Model (Qwen3-embedding + MLP). GSPO converges in 150 vs. 300 steps. **High-quality rate 78.91% → 96.00%**, blind-eval **65.66% vs. 34.34% (+91% relative)**."
collection: portfolio
date: 2026-03-01
---

**Role:** Algorithm lead · **Org:** Baidu / Wenxin App · **Timeline:** 2026.02 – Present

## Problem

The online Sug (follow-up suggestion) model produced templated outputs (*"can you give more detail?"*) that were misaligned with real user preferences, hurting CTR. Early experiments using semantic similarity as the reward fell into local minima because user preferences are fuzzy and there was no negative signal.

## What I built

### 1. CTR Reward Model (learned reward)

Inspired by **XCOMET**, I trained a dedicated **CTR predictor** as a learned reward model:

- Backbone: **Qwen3-embedding-0.6B + MLP regression head**.
- **Two-stage training:** freeze backbone → train MLP → joint LoRA fine-tune.
- **Multi-level negatives:** Positive / Hard Negative / Easy Negative.
- Loss: **MSE + MarginRankingLoss** hybrid.
- For click-label noise: filter positives through **DeepSeek-V3.2 quality control** (3.2w → 9.8k, 30.2% pass rate).

**Result:** ranking ACC ↑ to **54%**, positive–hard-negative score gap **0.02 → 0.08**.

### 2. GRPO reinforcement learning

SFT only mimics labels — it can't directly optimize CTR. Built a **GRPO** pipeline on **verl** (FSDP distributed training + **vLLM** rollout), training **Qwen3-1.7B** on 130k online examples.

**Reward design (multiplicative coupling to prevent reward hacking):**
- Format compliance (10%) +
- DeepSeek quality control (40%) +
- CTR preference (50%).

**GRPO vs GSPO comparison:** **GSPO converges in 150 steps** vs. GRPO's 300, with a higher quality ceiling, thanks to sequence-level loss aggregation.

## Results

- **High-quality suggestion rate: 78.91% → 96.00%.**
- **Unacceptable rate: 10.88% → 0%.**
- **Blind evaluation win-rate:** new model **65.66%** vs. baseline **34.34%** — **+91% relative**.
