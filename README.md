# SINA Trading — Company Website

Marketing website for **SINA Supplies and Logistics PLC**, an Ethiopian provider of procurement, logistics,
event, property, and staffing services, trading online as **SINA Trading** (www.sinatrading.et).

Static site — plain HTML, CSS, and vanilla JavaScript. No build step.

## Brand naming
- Registered name: SINA Supplies and Logistics PLC (used in the footer, About page, and legal copy)
- Web brand / domain: SINA Trading — www.sinatrading.et (used in page titles and meta)

## Pages
- **index.html** — hero, company overview, stats, the five core services, capabilities teaser
- **about.html** — who we are, vision, mission, working methodology, values, why clients choose SINA, strategic focus and client benefits
- **sectors.html** — the five core service lines in detail (procurement, logistics, events, property, staffing)
- **capabilities.html** — the company's full registered scope, 27 business lines grouped into six categories
- **contact.html** — contact details, company profile download, and quote request form

Content on every page is sourced from the SINA company profile deck and the "Our Services" scope document.

## Structure
```
index.html, about.html, sectors.html, capabilities.html, contact.html
assets/   logos, photography, company profile PDF
css/      base.css, layout.css + one stylesheet per page/section
js/       main.js (nav), animations.js (scroll reveals), plus per-page scripts
```

`css/base.css` holds the design tokens (colors, fonts, spacing) and `css/layout.css` the shared header,
footer, and page hero. Stylesheet links carry a `?v=` cache-busting query — bump it when a file changes.

## Design system
- Ink `#111112` · Paper `#F7F5F1` · Amber `#E8940C` · Gold `#FFCB47` · Slate `#5B5B58`
- Display: Big Shoulders Display · Body: Space Grotesk · Mono: IBM Plex Mono
- Responsive down to mobile, with a hamburger nav below 900px and reduced-motion support

## Running locally
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Known gaps
- The contact form is client-side only; it needs an email backend or a service such as Formspree
- No Google Maps embed on the contact page
- English only; no Amharic version
- Photography is generic — real company photos would replace `assets/port-sunset.png` and `port-crane-bw.png`

## Contact
- sinasupplies@outlook.com · +251 90-969-6932
- Lemi Kura Sub-city, W 03, Addis Ababa, Ethiopia
