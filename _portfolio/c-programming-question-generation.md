---
title: "Knowledge-Retrieval based C-Programming Question Generation"
excerpt: "RAG (BGE-M3 multi-route) + LoRA-finetuned Qwen2.5-14B + dual CoT/PoT verification. Ensures knowledge-grounded, compilable C-programming questions."
collection: portfolio
date: 2024-06-01
---

**Role:** Project lead · **Timeline:** 2023.12 – 2024.06

## Problem

Single-model question generation suffers from knowledge omission, uncontrollable format, and hallucinated answers. Direct LLM generation of C-programming questions often produces wrong answers, mismatched knowledge points, or code that doesn't compile.

## What I built

**Two-model cascaded architecture: "knowledge parsing → question generation".**
- A **RAG module** retrieves relevant knowledge points.
- A **LoRA-fine-tuned Qwen2.5-14B** generates questions targeted at each retrieved point.

**Two-stage retrieval chain on LlamaIndex.**
- **BGE-M3** multi-route parallel retrieval + reranking.
- Auto-pipeline reverse-synthesizes fine-tuning data from existing textbook problems.

**Dual consistency verification.**
- **CoT semantic verification** — reasoning chain verifies answer logic.
- **PoT sandbox verification** — auto-compiles and executes code questions.

## Outcome

End-to-end pipeline produces **knowledge-grounded, syntactically correct, executable C-programming questions** suitable for educational use.
