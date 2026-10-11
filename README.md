# Tråkk Sykkelverksted (demo)

A bilingual (Norwegian / English) one-page website for a **fictional** bike workshop in Oslo.
It is a work sample: the business, address, phone number and prices are made up.

Live: https://agent-carl.github.io/oslo-bike-shop-demo/ (English: `/en/`)

## What it shows

- A small-business site that loads fast on a phone: plain HTML and CSS, about 8 KB of CSS and 2 KB of JavaScript (before compression), no frameworks, no web fonts, no images to download (the illustration is inline SVG).
- Norwegian and English versions as separate pages with `hreflang`, so search engines show the right language.
- Local SEO basics: descriptive titles and meta descriptions, `BikeStore` structured data with address and opening hours, semantic headings.
- A booking form with accessible validation messages in both languages. In this demo the form does not send anything; on a real site it would go to the owner's inbox through a form service or a small serverless function.
- Light and dark mode, keyboard navigation, a skip link, visible focus states.

The pages are marked `noindex` on purpose: the business does not exist, so it should not show up when people search for a bike workshop in Oslo.

## Run locally

Any static file server works, for example:

```
python -m http.server 8080
```

Then open http://localhost:8080/.

## Hosting

Static files only, so it can be hosted for free on Cloudflare Pages, Netlify or the client's existing web hotel.
