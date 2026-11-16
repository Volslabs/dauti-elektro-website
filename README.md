# Drilon Dauti Leitung und Kabelverlegung – Website-Relaunch

Responsive React/Vite-Website nach dem gelieferten Mockup. Die Anwendung enthält die Startseite, sechs Leistungsdetailseiten, Projekte, Über uns, Kontakt, Impressum und Datenschutz.

## Projekt später aus GitHub wiederherstellen

Das Repository enthält den vollständigen bearbeitbaren Quellcode, alle verwendeten Bilddateien und die GitHub-Pages-Konfiguration. Der Ordner `dist/` wird nicht gespeichert, weil er bei jedem Build automatisch neu erzeugt wird.

```powershell
git clone https://github.com/Volslabs/dauti-elektro-website.git
Set-Location dauti-elektro-website
npm ci
npm run dev
```

Für einen reproduzierbaren Produktions-Build wird Node.js 24 verwendet, genau wie im GitHub-Actions-Workflow.

## Lokal starten

```powershell
npm install
npm run dev
```

Produktions-Build:

```powershell
npm run build
npm run preview
```

## Inhalte vor Veröffentlichung

- Projektkarten und Kundenbewertung sind bewusst als Demo gekennzeichnet.
- Impressum, Betriebsanschrift und technische Datenschutzhinweise wurden anhand der bereitgestellten Unternehmensdaten und des aktuellen GitHub-Pages-Hostings ergänzt.
- Die Leistungsdarstellung trennt Dautis Kabelverlegung von zulassungspflichtigen Anschluss-, Prüf- und Elektroarbeiten der eingetragenen Partnerbetriebe.
- Canonical-Domain, offizielle E-Mail-Adresse und Social-Media-Ziele müssen vor dem Go-live bestätigt werden.
- Das Formular öffnet derzeit einen vorausgefüllten E-Mail-Entwurf; ein serverseitiger Versand kann später ergänzt werden.
- Generierte Bildmotive liegen in `public/assets/` und können ohne Strukturänderung durch echte Unternehmensfotos ersetzt werden.
