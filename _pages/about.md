---
permalink: /
title: "Hi, I'm Yingsong Ning (宁英松)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a first-year **M.S. student** in Computer Science at **[Northeastern University (China)](https://www.neu.edu.cn/)** (since 2024.09, recommended admission), and currently an **NLP algorithm intern at Baidu** (Wenxin App, since 2025.12), focusing on **LLM long/short-term memory, retrieval, and RL-based suggestion optimization**.

My research sits at the intersection of:

- 🧠 **LLM memory & retrieval** — user-profile extraction, query rewriting, hybrid retrieval (BM25 + dense + reranker), SFT data synthesis.
- 🎯 **Reinforcement learning for LLMs** — GRPO / GSPO, learned reward models (CTR), reward hacking mitigation.
- 🔗 **Temporal knowledge graph reasoning** — generator–critic frameworks, denoising diffusion, hybrid Transformer architectures.

📄 [中文版主页 / Chinese version](/zh/)  |  [Download CV (PDF)](/files/Yingsong_Ning_CV.pdf)

News
======
- **2026.05** — Personal homepage launched 🚀
- **2026.04** — Paper *Critic Rule Induction* accepted to **ACL 2026** (first author).
- **2026.02** — Started a new project: **GRPO-based SUG model optimization** at Baidu.
- **2025.12** — Joined **Baidu / Wenxin App** as an NLP algorithm intern.
- **2025.xx** — Paper *DLTKG* accepted to **EMNLP** (co-author).
- **2024.09** — Started M.S. at Northeastern University (recommended admission / 保研).

Education
======
- **2024.09 – 2027.06 (expected)** — **M.S. in Computer Science**, Northeastern University (China). Admitted by recommendation (保研).
- **2020.09 – 2024.07** — **B.S. in Computer Science**, Shenyang Jianzhu University.

Experience
======
- **2025.12 – Present** — **NLP Algorithm Intern**, Baidu Online Network Technology (Beijing), *Wenxin App* (文心 App).
  Owning the long/short-term memory module: profile extraction, query rewriting, hybrid retrieval, suggestion generation, and GRPO/GSPO-based RL training.

Selected Publications
======
> Full list at [Publications](/publications/).

- **Critic Rule Induction: Improving Temporal Knowledge Graph Forecasting with Generator-Critic Language Models.** _Yingsong Ning et al._ **ACL 2026** (first author). An adversarial rule-induction framework with generator–critic LLMs.
- **DLTKG: Denoising Logic-based Temporal Knowledge Graph Reasoning.** **EMNLP** (co-author). Diffusion-based denoising over historical evolution paths.
- **Reasoning Along Temporal Paths: A Hybrid Transformer Architecture for Temporal Knowledge Graph Forecasting.** _Yingsong Ning et al._ Submitted to **ACL** (first author). HTA with multi-hop reasoning paths; +20% MRR on GDELT.
- **The Control of Intelligent Building Robot Patrol Technology Based on Raspberry Pi.** _Yingsong Ning et al._ Published (first author). Kalman filter + FAST-RCNN on a Raspberry Pi patrol robot.

Selected Projects
======
> Full list at [Projects](/portfolio/).

- **Wenxin App User Memory Extraction & Retrieval System** (Baidu, 2025.12–2026.02). Two-level profile extraction, query rewriting (81.7% effective rewrite), BM25 + Qwen3-Embedding + Qwen3-Reranker hybrid retrieval, Recall@5 67.25% / MRR 0.9643.
- **Personalized Memory Recall & Rewriting** (Baidu, 2025.12–2026.01). Doubao-seed teacher → Qwen3.5-2B student distillation with 5-step CoT (175k labels); 72.7% consistency vs. online LLM at 1/10 the cost.
- **GRPO-based SUG Model Optimization** (Baidu, 2026.02–present). verl + FSDP + vLLM rollout; CTR Reward Model (Qwen3-embedding + MLP); GSPO converges in 150 vs. 300 steps; high-quality suggestion rate **78.91% → 96.00%**, blind eval win-rate **65.66% vs. 34.34%** (+91% relative).
- **Knowledge-Retrieval based C-Programming Question Generation** (2023.12–2024.06). RAG (BGE-M3 multi-route) + LoRA-finetuned Qwen2.5-14B + CoT/PoT dual verification.

Selected Awards
======
- Multiple **national first prizes** at the **China Collegiate Computing Contest** (3 consecutive years).
- **Honorable Mention**, **MCM/ICM** (Mathematical Contest in Modeling).
- Outstanding Student of Shenyang City; University First-class Scholarship.

Contact
======
- Email: `inrstning@gmail.com`
- GitHub: [@Inrstning](https://github.com/Inrstning)
- Google Scholar: <!-- TODO: 待你给 link 后填入 _config.yml --> _coming soon_
