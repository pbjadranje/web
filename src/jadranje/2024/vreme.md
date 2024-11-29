---
title: Vremenska napoved
year: 2024
eleventyExcludeFromCollections: true
---
{% assign lastForecast = collections[route] | last %}
{% assign image = lastForecast.url %}

{% include 'weather-nav', route: '2024_a1' %}

## Scenarij 1: čez Kvarner
### Vrsar - Premuda: sreda, 4.12. ob 21h
{% include 'weather-route', route: '2024_a1' %}

### Premuda - Veruda: petek, 6.12. ob 9h
{% include 'weather-route', route: '2024_a2' %}

### Veruda - Vrsar: sobota, 7.12. ob 9h
{% include 'weather-route', route: '2024_a3' %}

## Scenarij 2: cilj Cres ali ob Istri
_Se bo v primeru neprimernega vremena določil kasneje..._

Povezava na stran za <a href="/vreme/" class="no-underline border-b-2 border-link hover:bg-link-hover">vreme in napovedi</a>.
