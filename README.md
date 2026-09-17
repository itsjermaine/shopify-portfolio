# Jermaine Sosa — Shopify Portfolio

A responsive portfolio built with HTML, CSS, and vanilla JavaScript. Includes three Cellumove projects, accessible project tabs, screenshot dialogs, and an email contact link. No framework, package installation, or build step is required.

## Publish on GitHub Pages

1. Create a repository named `jermaine-portfolio` on GitHub. A public repository works with GitHub Free.
2. Extract this ZIP. Upload the contents of the `jermaine-portfolio` folder into the repository root, including `.github/workflows/deploy.yml` and the `site` folder. Do not upload the ZIP itself. Make sure the hidden `.github` folder is included; alternatively create `.github/workflows/deploy.yml` through GitHub’s Add file interface and paste its contents.
3. Use `main` as the repository branch.
4. Open repository **Settings → Pages** and select **GitHub Actions** as the source.
5. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. If an earlier run failed before Pages was enabled, run it again.
6. After success, find the live URL in **Settings → Pages** or the workflow’s deployment result. Future pushes to `main` publish updates automatically.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Local preview

Open `site/index.html` in a browser, or from this folder run:

```sh
python -m http.server 8000 --directory site
```

Then visit http://localhost:8000. Python is only needed for this optional local server.

## Edit the website

- `site/index.html`: content, projects, navigation, contact email.
- `site/style.css`: original layout styles.
- `site/refined.css`: final light theme, responsive refinements, and interactive component styles. Loaded after style.css.
- `site/portfolio.js`: project tabs and screenshot viewer, including keyboard handling.
- `site/assets/`: original project screenshots.
- `.github/workflows/deploy.yml`: automatic GitHub Pages publication.

All local assets use relative paths, so the site works under a GitHub repository URL. Google Fonts are loaded externally, with system-font fallbacks. Email links open the visitor’s email application; there is no contact-form backend.

## Content and access

Contact: jermaineisaia@gmail.com

This package includes the supplied client screenshots and project descriptions. Screenshots and brand assets remain the property of their respective owners. Publishing through GitHub Pages makes the website publicly accessible; it does not inherit the existing ChatGPT Site’s private access controls.

Prepared for GitHub Pages; not yet uploaded or deployed to a GitHub account.
