# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with live reload (uses Eleventy --serve)
- `npm run build` - Build the site for production
- `npm run build-ghpages` - Build for GitHub Pages deployment with path prefix
- `npx prettier --write .` - Format code with Prettier

### Testing
- No test suite configured - this is intentionally a simple site

## Architecture

This is a personal website built with Eleventy (11ty) v3.1.2 following a "plain vanilla" web approach. The philosophy is to use minimal abstractions and build tools to keep things simple.

### Key Structure
- **Content**: `src/` directory contains Markdown content files (input directory)
- **Templates**: `src/_includes/` contains HTML templates (Nunjucks) including modular `header.html`, `footer.html`, `head.html`, and main `layout.html`
- **Styles**: `src/assets/css/` contains CSS files processed through Nunjucks templates
- **Data**: `src/_data/` contains site metadata and global data
- **Assets**: `src/assets/icons/` contains static assets like favicon
- **Output**: `_site/` is the build output directory

### Template Engine
- Uses Nunjucks for all template processing (HTML, Markdown, and data templates)
- Content files support front matter with `eleventyNavigation` for menu generation

### CSS Architecture
- `src/assets/css/index.css.njk` compiles all CSS into a single `index.css` file using CSS layers
- Uses `@layer reset, html, utilities` structure for cascade control
- CSS files are included via Nunjucks `{% include %}` statements
- CSS reset in `reset.css`, variables in `variables.css`, main styles in `html.css`, utilities in `utilities.css`

### Navigation
- Uses `@11ty/eleventy-navigation` plugin for automatic menu generation
- Pages define navigation structure via front matter `eleventyNavigation` object

### Shortcodes and Data
- `time` shortcode generates semantic `<time>` elements with datetime attributes using Intl.DateTimeFormat
- `currentYear` global data for copyright footer
- Site metadata stored in `src/_data/meta.json`

## Site Philosophy

This site intentionally avoids modern build complexity. It's designed as an escape from frameworks and build tools to focus on web standards and native capabilities. When working on this codebase, respect this philosophy by keeping solutions simple and avoiding unnecessary abstractions.