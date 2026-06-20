# Travel Planner — strona statyczna

Strona prezentująca projekt Travel Planner. Jest zbudowana wyłącznie z HTML, CSS i JavaScriptu — nie wymaga backendu, instalowania zależności ani procesu budowania.

## GitHub Pages

To repozytorium jest bezpośrednio repozytorium strony — plik `index.html` znajduje się w jego katalogu głównym. Repozytorium na GitHubie powinno mieć nazwę `<nazwa-konta>.github.io`; dla obecnego zdalnego repozytorium jest to `travel-planer-pwr.github.io`.

Publikacja jest automatyczna. Każdy push do gałęzi `main` uruchamia workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), który wdraża pliki strony na GitHub Pages.

Docelowy adres dla tego repozytorium:

<https://travel-planer-pwr.github.io/>

Przy pierwszym wdrożeniu w repozytorium GitHub należy ustawić **Settings → Pages → Source** na **GitHub Actions**. Potem wystarczy push do `main`; lokalny serwer nie jest częścią wdrożenia.

## Struktura

- `index.html` — treść i semantyka strony,
- `styles.css` — układ, responsywność i animacje,
- `script.js` — animacje wejścia i liczników,
- `.nojekyll` — wymusza publikację plików bez przetwarzania przez Jekyll,
- `.github/workflows/deploy-pages.yml` — automatyczne wdrożenie.

Wszystkie lokalne zasoby używają ścieżek względnych, więc strona działa zarówno pod domeną główną Pages, jak i po przeniesieniu do repozytorium projektowego z prefiksem ścieżki.

## Źródła treści

- materiały prezentacyjne projektu,
- dane i przykładowe wyniki zespołu Travel Planner.

## Inspiracje i decyzja technologiczna

Przejrzane zostały katalogi [Astro Themes](https://astro.build/themes/) i [HTML5 UP](https://html5up.net/) oraz instrukcja [Vite Static Deploy](https://vite.dev/guide/static-deploy.html). Finalnie użyto czystego HTML/CSS/JS, ponieważ pojedyncza strona produktowa nie potrzebuje frameworka ani procesu budowania. Układ i grafiki zostały przygotowane specjalnie dla Travel Planner, bez kopiowania szablonu.
