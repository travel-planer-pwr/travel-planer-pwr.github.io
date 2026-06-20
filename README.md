# Travel Planner - static website

Samodzielna strona prezentująca projekt. Nie wymaga instalowania zależności ani procesu budowania.

## Uruchomienie

Z katalogu głównego repozytorium:

```bash
python -m http.server 8080 --directory static_website
```

Następnie otwórz `http://localhost:8080`.

## Publikacja

Cały katalog `static_website/` można opublikować bez zmian przez GitHub Pages, Netlify, Cloudflare Pages lub dowolny serwer statyczny.

## Źródła treści

- `presentation/Red&Cream Modern Startup Pitch Deck Presentation.pdf`
- dane i przykładowe wyniki z bieżącego repozytorium

## Inspiracje i decyzja technologiczna

Przejrzane zostały katalogi [Astro Themes](https://astro.build/themes/) i [HTML5 UP](https://html5up.net/) oraz instrukcja [Vite Static Deploy](https://vite.dev/guide/static-deploy.html). Finalnie użyto czystego HTML/CSS/JS, ponieważ pojedyncza strona produktowa nie potrzebuje frameworka ani procesu budowania. Układ i grafiki zostały przygotowane specjalnie dla Travel Planner, bez kopiowania szablonu.
