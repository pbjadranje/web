---
title: Vremenska napoved
year: 2024
eleventyExcludeFromCollections: true
---
{% assign lastForecast = collections[route] | last %}
{% assign image = lastForecast.url %}

{% include 'weather-nav', route: '2024_b1' %}

## Scenarij B: ostanemo v Istri
### Vrsar - Brioni - Vrsar: sreda, 4.12. ob 21h
{% include 'weather-route', route: '2024_b1' %}

### Vrsar - Sv.Ivan - Vrsar: petek, 6.12. ob 9h
{% include 'weather-route', route: '2024_b2' %}

### Vrsar - Altijež - Lunga - Vrsar: sobota, 7.12. ob 8:30h
{% include 'weather-route', route: '2024_b3' %}

Povezava na stran za <a href="/vreme/" class="no-underline border-b-2 border-link hover:bg-link-hover">vreme in napovedi</a>.
