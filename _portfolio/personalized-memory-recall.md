---
title: "Personalized Memory Recall & Rewriting"
excerpt: "Doubao-seed teacher → Qwen3.5-2B student distillation with 5-step CoT (175k labels). 72.7% consistency vs. online LLM at ~1/10 the cost. Validates 2B-replaces-large-model deployment."
collection: portfolio
date: 2026-01-01
---

**Role:** Algorithm lead · **Org:** Baidu / Wenxin App · **Timeline:** 2025.12 – 2026.01

## Problem

The online system used a large generative model to filter user-profile clues (`UserClue`) from the memory store. Inference cost and latency were both high and unpredictable.

## What I built

**Teacher–student distillation pipeline.** The **teacher** (`doubao-seed`) runs a **5-step CoT**:
1. identity confirmation → 2. validity filtering → 3. timeliness judgment → 4. privacy rewriting → 5. importance ranking.

Generated **175k labeled examples** covering dynamic-attribute timeliness, privacy desensitization, and memory-conflict resolution.

The **student** (`Qwen3.5-2B`) uses simplified rules to emit results directly — low-latency deployable.

**Training & tuning.** Teacher output is multi-turn dialogue; built an automated pipeline (multi-thread + QPS throttling) to convert into SFT format. Full-parameter fine-tuning on **ms-swift**. Against over-fitting, introduced **early stopping** — `eval_loss` dropped from **0.34 @ 10 epochs → 0.11 @ 2 epochs**; selected the best checkpoint.

**Full-corpus online comparison.** Designed a multi-dimensional eval (empty/non-empty P/R/F1, ROUGE-L, exact-match), built a **4-GPU parallel inference framework**. Compared 1,131 cases against the online large model.

## Results

- **Consistency: 72.7%** with the online LLM.
- Four-quadrant analysis (both-empty / consistent / overshoot / miss) found the **2B model outperforms the online LLM on timeliness anchoring and detail granularity**.
- Validated **2B-replaces-large-model** as a cost-down deployment path.
