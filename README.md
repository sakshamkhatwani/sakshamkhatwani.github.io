# Academic Website Template (Jekyll + GitHub Pages)

A clean, fast personal site for CS researchers: profile, news, publications (with BibTeX/arXiv/code links), projects, teaching & service, blog with math, and CV. No custom plugins, so it builds natively on GitHub Pages. Dark mode and mobile layout included.

## Quick start

1. Create a repo named **`username.github.io`** (replace with your GitHub username) and push these files to it.
2. In the repo go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`.
3. Your site is live at `https://username.github.io` within a minute or two.

> Project site instead (e.g. `username.github.io/website`)? Set `baseurl: "/website"` in `_config.yml`.

## What to edit

| File | What it controls |
|---|---|
| `_config.yml` | Name, affiliation, advisor, email, social links, nav menu |
| `index.md` | Bio on the home page |
| `_data/news.yml` | News items (home page shows the latest 5; change `news_limit` in `index.md`) |
| `_data/publications.yml` | All papers. `selected: true` puts a paper on the home page; `type` groups them |
| `_data/projects.yml` | Project cards |
| `teaching.md`, `cv.md` | Teaching/service/talks and CV page |
| `_posts/` | Blog posts, named `YYYY-MM-DD-title.md`. Add `math: true` for LaTeX |
| `assets/img/profile.svg` | Replace with your photo (update `photo:` in config if you change the filename) |
| `assets/files/` | Put `cv.pdf`, `papers/*.pdf`, `slides/*.pdf` here |

Your name (from `highlight_name`) is automatically bolded in author lists. Add `*` after names for equal contribution.

### Adding a publication

```yaml
- id: lastname2026keyword        # used as the #anchor
  title: "Paper Title"
  authors: ["Your Name", "Coauthor"]
  venue: "Conference on Neural Information Processing Systems"
  venue_short: "NeurIPS"
  year: 2026
  type: conference               # conference | journal | workshop | preprint
  selected: true                 # optional
  award: "Spotlight"             # optional
  arxiv: "2601.12345"            # optional — any of pdf/code/slides/video/project too
  bibtex: |
    @inproceedings{...}
```

To remove a nav page, delete its entry from `nav:` in `_config.yml` (and the `.md` file).

## Preview locally (optional)

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

## Custom domain

Add a file named `CNAME` containing your domain (e.g. `jane.example.com`), point a DNS CNAME record to `username.github.io`, and enable **Enforce HTTPS** in Settings → Pages.
