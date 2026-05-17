---
title: "Critic Rule Induction: Improving Temporal Knowledge Graph Forecasting with Generator-Critic Language Models"
collection: publications
category: conferences
permalink: /publication/2026-04-01-critic-rule-induction
excerpt: 'An adversarial rule-induction framework with generator–critic LLMs. The generator induces candidate rules from data while the critic verifies and filters erroneous ones. Multi-round adversarial iteration significantly boosts rule precision and coverage, especially on long-tail relations.'
date: 2026-04-01
venue: 'ACL 2026 (Accepted)'
citation: 'Yingsong Ning, et al. "Critic Rule Induction: Improving Temporal Knowledge Graph Forecasting with Generator-Critic Language Models." ACL 2026.'
---

**Role:** First author.

LLMs directly producing rules are prone to fallacies. We propose an **adversarial rule-induction framework** built on a generator–critic LLM architecture:

- The **generator** induces candidate rules from data.
- The **critic** verifies their plausibility and filters out incorrect ones.
- Multi-round adversarial iteration improves both the **precision and coverage** of the induced rule base.

On temporal knowledge graph forecasting, the method delivers consistent improvements, with the largest gains on **long-tail relations and sparse scenarios**.
