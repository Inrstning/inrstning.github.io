---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

📄 **[Download PDF version](/files/Yingsong_Ning_CV.pdf)** — last updated 2026.04 (Chinese)

Education
======
* **M.S. in Computer Science**, Northeastern University (China), 2024.09 – 2027.06 (expected). Admitted by recommendation (保研).
* **B.S. in Computer Science**, Shenyang Jianzhu University, 2020.09 – 2024.07.

Experience
======
* **2025.12 – Present** — **NLP Algorithm Intern**, Baidu Online Network Technology (Beijing) Co., Ltd., *Wenxin App* (文心 App).
  * Own the long / short-term memory module: extraction, retrieval, rewriting; supports personalized dialog and recommendation.
  * Lead modules: short-term profile extraction, long-term query rewriting & retrieval, personalized memory recall & rewriting, follow-up suggestion generation.
  * Stacks: LLM data synthesis, SFT, vector retrieval, RLHF (GRPO/GSPO).

Skills
======
* **LLMs & frameworks** — Qwen, LLaMA; end-to-end pipeline of data construction → fine-tuning → merging → quantization → deployment.
* **Training stack** — LLaMA-Factory, ModelScope Swift, DeepSpeed, LoRA, vLLM, DPO, verl (GRPO/GSPO), FSDP.
* **Retrieval & RAG** — BGE Embedding, BM25, RRF fusion, Reranker, LlamaIndex; SFT data synthesis; CoT / PoT verification.
* **Transformer internals** — self-attention, positional encoding, multi-head; attention-mixer designs.
* **Engineering** — Python, multi-threading & concurrency, Flask, pandas, openpyxl, automated evaluation pipelines.
* **Languages** — Chinese (native); English (CET-4 / CET-6).

Awards
======
* National First Prize, **China Collegiate Computing Contest** (3 consecutive years).
* National First Prize, **China Collegiate Computer Games Championship** (3 consecutive years).
* Honorable Mention, **MCM/ICM** (Mathematical Contest in Modeling).
* Outstanding University Student of Shenyang City.
* University First-class Scholarship; Outstanding Communist Youth League Member; Outstanding Volunteer.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Projects
======
  <ul>{% for post in site.portfolio reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Service and leadership
======
* Reviewer / volunteer activities — *to be added*.
