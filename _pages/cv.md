---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- TODO: 替换为你的真实信息。Publications / Talks / Teaching 部分会从对应目录自动生成。 -->

Education
======
* M.S. in _Department_, _University_, 20XX – Present
* B.S. in _Department_, _University_, 20XX – 20XX

Work experience
======
* **20XX.MM – 20XX.MM** — _Role_, _Company / Lab_
  * _One-line summary of what you did_
  * _Bullet about result, with a number if possible_

* **20XX.MM – 20XX.MM** — _Role_, _Company / Lab_
  * _Bullet_

Skills
======
* _Skill area 1_
* _Skill area 2_
  * _Sub-skill_
* _Skill area 3_

Publications
======
  <ul>{% for post in site.publications reversed %}
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
* _Reviewer / Volunteer / Open-source contribution_
