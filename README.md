# AstroSEO.io

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## GitHub Pages

1. Push to the `main` branch.
2. In GitHub repository settings, set Pages source to GitHub Actions.
3. The workflow in `.github/workflows/deploy.yml` publishes the static build output.
