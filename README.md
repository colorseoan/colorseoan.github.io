# colorseoan.github.io

## Mind Palette

Static frontend build for GitHub Pages.

### Local development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### GitHub Pages deployment

1. Push this project to GitHub.
2. In the repository, open `Settings -> Pages`.
3. Set `Build and deployment -> Source` to `GitHub Actions`.
4. Push to `main` or run the `Deploy static site to GitHub Pages` workflow manually.

If the repository name is `colorseoan.github.io`, the site is deployed at the root domain.
For any other repository name, the Vite `base` path is set from `GITHUB_REPOSITORY` during the workflow.
