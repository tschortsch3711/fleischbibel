# Die Fleischbibel

Die Fleischbibel ist die zentrale, dauerhaft verfügbare Dokumentation der Fleischgemeinschaft.

Sie sammelt Regeln, Abläufe, Begriffe, Links und Gruppen-Lore an einem Ort, damit wichtige Informationen nicht in der WhatsApp-Gruppenbeschreibung oder im Chatverlauf verloren gehen.

## Entwicklung

Voraussetzung: Node.js LTS, empfohlen Version 20 oder neuer.

```bash
npm install
npm run docs:dev
```

Die lokale VitePress-Seite läuft danach standardmäßig unter `http://localhost:5173/fleischbibel/`.

## Build

```bash
npm run docs:build
npm run docs:preview
```

Der statische Build entsteht in `docs/.vitepress/dist`.

## Inhalte selbst anpassen

Die Seiten liegen als Markdown-Dateien im Ordner `docs`.

Typische Anpassungen:

- Startseite ändern: `docs/index.md`
- Navigation und Sidebar ändern: `docs/.vitepress/config.ts`
- Farben und Layout ändern: `docs/.vitepress/theme/custom.css`
- Inhaltsseiten ändern: passende `.md`-Datei unter `docs/...`
- Links ändern: `docs/links.md`

Nach einer Änderung lokal prüfen:

```bash
npm run docs:dev
```

Im Browser dann `http://localhost:5173/fleischbibel/` öffnen. Falls der Server schon läuft, reicht meistens Neuladen im Browser.

Vor dem Veröffentlichen prüfen:

```bash
npm run docs:build
```

Damit Änderungen online sichtbar werden, die geänderten Dateien committen und auf `main` pushen. GitHub Actions baut die Seite dann automatisch und veröffentlicht sie über GitHub Pages.

## GitHub Pages

Das Deployment läuft über GitHub Actions.

In den GitHub Repository Settings muss unter `Pages` als Source `GitHub Actions` ausgewählt werden:

`GitHub Repository Settings -> Pages -> Source -> GitHub Actions`

Der Workflow baut VitePress und veröffentlicht `docs/.vitepress/dist` als GitHub Pages Artifact.

## Base Path

Das Repository heißt `fleischbibel` und wird als GitHub Project Page veröffentlicht. Deshalb ist in `docs/.vitepress/config.ts` gesetzt:

```ts
base: '/fleischbibel/'
```

Falls später eine Custom Domain verwendet wird, kann dieser Wert je nach Zielkonfiguration auf `/` geändert werden.
