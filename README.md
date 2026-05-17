# inrstning.github.io

[Yingsong Ning](https://github.com/Inrstning) 的个人主页 — 部署在 GitHub Pages，基于 [academicpages](https://github.com/academicpages/academicpages.github.io) 模板。

线上地址：<https://inrstning.github.io>（中文版：<https://inrstning.github.io/zh/>）

---

## 待替换清单（搭骨架后剩下的工作）

全局搜索 `TODO` 即可定位所有占位符：

```bash
grep -rn "TODO" _pages _config.yml README.md
```

具体步骤：

1. **`_config.yml`** — 改 `title` / `description` / `author.*`（姓名、头像、bio、邮箱、employer、Google Scholar、ORCID 等）。
2. **头像** — 把图片放到 `images/profile.jpg`（路径已在 `_config.yml` 的 `author.avatar` 写好）。若文件名不同，改 `_config.yml` 而不是改文件名。
3. **`_pages/about.md`** — 英文首页，替换 News / Education / Selected Publications / Selected Projects / Contact 占位符。
4. **`_pages/about-zh.md`** — 中文首页，与英文版同步更新。
5. **`_pages/cv.md`** — Education / Work experience / Skills 段落。
6. **添加论文** — 在 `_publications/` 新建 `YYYY-MM-DD-paper-slug.md`，字段参考 [模板示例](https://github.com/academicpages/academicpages.github.io/tree/master/_publications)。
7. **添加项目** — 在 `_portfolio/` 新建 markdown，自动出现在 `/portfolio/`（导航显示为 "Projects"）。
8. **导航** — `_data/navigation.yml`。Talks / Teaching / Blog Posts 当前已注释；有内容后取消注释即可。

## 启用 Google Scholar 自动同步（可选）

模板自带 `google_scholar_crawler` 工作流，可定期把 Scholar 引用数同步到首页。要启用：

1. 在 `_config.yml` 填好 `author.googlescholar`。
2. 启用 `.github/workflows/` 下相关 workflow（默认可能禁用）。
3. 详见 [Scholar crawler 文档](https://github.com/academicpages/academicpages.github.io/tree/master/google_scholar_crawler)。

## 本地预览（可选）

不预览也可以——push 后 GitHub Pages 会自动 build，1-3 分钟生效。要本地预览：

```bash
bundle install
bundle exec jekyll serve -l -H localhost
# 浏览器打开 http://localhost:4000
```

需要 Ruby 3.x + Bundler。

## 修改后的发布流程

```bash
git add -A
git commit -m "feat: update homepage content"
git push
# 等 1-3 分钟，访问 https://inrstning.github.io
```

检查构建状态：

```bash
gh api repos/Inrstning/inrstning.github.io/pages | jq .status
```

## 模板信息

- 上游模板：[academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io)
- 双语方案：双页（`_pages/about.md` + `_pages/about-zh.md`） + 导航语言切换链接
- 本仓库已删除模板自带的全部示例内容（论文、项目、talks、teaching、blog post、demo 图片/PDF）
- 默认分支：`master`（跟随模板，未改 `main`）

## License

MIT — 沿用 academicpages 模板的协议。
