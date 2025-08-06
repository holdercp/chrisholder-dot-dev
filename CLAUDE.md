# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with live reload (uses Eleventy --serve)
- `npm run build` - Build the site for production
- `npm run format` - Format code with Prettier (available but not in package.json scripts)

### Testing
- No test suite configured - this is intentionally a simple site

## Architecture

This is a personal website built with Eleventy (11ty) v3.1.2 following a "plain vanilla" web approach. The philosophy is to use minimal abstractions and build tools to keep things simple.

### Key Structure
- **Content**: `content/` directory contains Markdown files (input directory)
- **Templates**: `_includes/` contains HTML templates (Nunjucks/Liquid)
- **Styles**: `assets/css/` contains CSS files processed through Nunjucks templates
- **Output**: `_site/` is the build output directory

### Template Engine
- Uses Nunjucks for all template processing (HTML, Markdown, and data templates)
- Content files support front matter with `eleventyNavigation` for menu generation

### CSS Architecture
- `assets/css/index.njk` compiles all CSS into a single `index.css` file
- Uses modern-normalize as CSS reset
- CSS variables defined in `variables.css`
- Global styles in `global.css`

### Navigation
- Uses `@11ty/eleventy-navigation` plugin for automatic menu generation
- Pages define navigation structure via front matter `eleventyNavigation` object

### Filters and Data
- `formatDate` filter for date formatting using Intl.DateTimeFormat
- `currentYear` global data for copyright footer

## Site Philosophy

This site intentionally avoids modern build complexity. It's designed as an escape from frameworks and build tools to focus on web standards and native capabilities. When working on this codebase, respect this philosophy by keeping solutions simple and avoiding unnecessary abstractions.