# Refactor plan

Goal: clean the project without changing the current layout.

Steps:

1. Split clinic config.
2. Split specialty data.
3. Split reusable components.
4. Split pages.
5. Keep main.jsx as app entry only.
6. Move footer logo logic to React.
7. Replace footer nth-child selectors with semantic classes.
8. Move home image to JSX.
9. Fix literal Markdown text.
10. Update sitemap.
11. Consolidate green theme in base CSS.
12. Remove public override CSS files.
13. Add lockfile.
14. Use npm ci after validation.
15. Run build checks.
