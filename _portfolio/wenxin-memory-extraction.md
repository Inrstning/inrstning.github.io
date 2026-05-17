---
title: "Wenxin App — User Memory Extraction & Retrieval System"
excerpt: "Two-level profile extraction · query rewriting (81.7% effective) · BM25 + Qwen3-Embedding + Reranker hybrid retrieval · Recall@5 67.25%, MRR 0.9643. **Shipped to production.**"
collection: portfolio
date: 2026-02-01
---

**Role:** Algorithm lead · **Org:** Baidu / Wenxin App · **Timeline:** 2025.12 – 2026.02

## Problem

User dialog history can't be used directly for cross-session or long-context personalization. Vector retrieval over raw memory has low recall because user queries (*"recommend a restaurant"*) and stored profiles (*"user lives in Beijing"*) sit in different semantic spaces.

## What I built

**Two-level profile extraction pipeline.** Aggregates raw signals into structured profiles in two stages:
1. **L1** clusters by *"life role / scenario + decision chain"* to extract behavioral preferences.
2. **L2** infers higher-level traits (occupation, identity).

**Query-rewriting retrieval chain.** Before retrieval, a small model rewrites a user query into 0–3 profile-dimension sub-queries (*"recommend a restaurant" → "user's dietary preference" + "user's residence"*), each retrieved against the memory store. **E2E effective rewrite rate: 81.7%.**

**SFT data synthesis & model distillation (shipped).** Online query-rewriting demanded low latency, so I distilled the task into **Qwen3-4B**. Designed 8 profile categories with boundary rules to suppress hallucination, synthesized **10K SFT examples**, full-parameter fine-tuning. Injected `/no_think` to truncate CoT for latency. Built an E2E validation harness chaining rewriting → vector retrieval → suggestion generation.

**Hybrid retrieval evaluation (shipped).** Single-route vector retrieval is weak on literal entity matching; single-route BM25 generalizes poorly. Built **BM25 + Qwen3-Embedding** dual recall, fused by initial ranking, then added a **Qwen3-Reranker** cross-encoder for precision ranking. Designed a **hard-negative sampling strategy** for the embedding model.

## Results

- **Recall@5:** 67.25% (single embedding); **MRR:** 0.9643.
- **Effective query-rewrite rate:** 81.7% (end-to-end).
