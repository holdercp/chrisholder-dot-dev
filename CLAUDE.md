# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Chris Holder's personal website built with Hugo, a static site generator. The site is a simple portfolio/blog showcasing professional experience and personal projects.

## Commands

### Development

- `hugo server` - Start development server with live reload
- `hugo server -D` - Start development server including draft content
- `hugo` - Build static site to `public/` directory

### Deployment

- `hugo --minify` - Build optimized production site

## Architecture

### Hugo Site Structure

- **Content**: Markdown files in `content/` define pages and posts
  - `content/_index.md` - Homepage content
  - `content/uses.md` - Uses page content
- **Layouts**: HTML templates in `layouts/` control site structure
  - `layouts/baseof.html` - Base template with common HTML structure
  - `layouts/home.html` - Homepage template (minimal, just renders content)
  - `layouts/_partials/` - Reusable template components (head, header, footer)
- **Assets**: Source files in `assets/` processed by Hugo Pipes
  - CSS files are concatenated, minified, and fingerprinted automatically
  - `assets/css/reset.css` - CSS reset styles
  - `assets/css/global.css` - Global site styles
- **Static**: Files in `static/` copied directly to output (PDFs, etc.)
- **Public**: Generated site output (not tracked in git)

### CSS Pipeline

The site uses Hugo Pipes for asset processing. CSS files are:

1. Concatenated in order: reset.css → global.css
2. Minified for production
3. Fingerprinted for cache busting
4. Output as single `index.css` file

### Configuration

- `hugo.toml` - Main Hugo configuration
- Site URL: https://chrisholder.dev/
- Git integration enabled for last modified dates

## Key Files to Understand

- `layouts/baseof.html:6-10` - Base template structure and partial includes
- `layouts/_partials/head.html:6-9` - CSS asset pipeline configuration
- `content/_index.md` - Homepage content and frontmatter

## Development Notes

- This is a minimal Hugo site focused on simplicity
- No JavaScript framework or complex build process
- Content is primarily static with focus on performance and accessibility
- Currently on `migrate-to-hugo` branch (migrated from previous platform)
