# Protokoll Review-Meeting Team XCalendar
## Anwesenheit
Das Meeting begann am 27.05.2024 um 12.20 und endete um 12.35.
Das Meeting wurde von Tobias Eberle geführt und von David Abert dokumentiert.
Anwesend waren:
  Tobias Eberle
  David Abert
  David Bohr
  Paul Kuhn
  
## Ziele/Schwerpunkte des Meetings
Untersucht wurde die Komponente "login-page.component". Die Komponente dient zur Darstellung der Loginmaske und leitet die Logindaten an das Backend weiter.
Bei fehlerhaften Logindaten, wird eine entsprechende Fehlermeldung im Frontend angezeigt.

Die Login-Page Komponente wurde gewählt, weil sie einerseits eine Hauptfunktion des Loginvorgangs beinhaltet und andererseits essenziell für Benutzung des Kalendars ist.

## Komponenten des Reviews
Dabei wurde auf folgende Klassen geachtet:
- login-page.component.html
- login-page.component.scss
- login-page.component.spec.ts
- login-page.component.ts

## Kriterien für den Review

### login-page.component.html
- Wartbarkeit
- Übersichtlichkeit
- Codequalität
- Einheitlichkeit

### login-page.component.scss
- Übersichtlichkeit
- Codequalität
- Einheitlichkeit
  
### login-page.component.spec.ts
- Wartbarkeit
- Gesamtheit (Test decken alle möglichen Cases ab)
  
### login-page.component.ts
- Codequalität

## Review-Methodik
Als Review-Methode wurden Walkthroughs und Code Reviews angewandt.

## Ergebnisse

### login-page.component.html
- Codequalität hochwertig
- sehr übersichtlich und einheitlich
  
### login-page.component.scss
- Einheitlichkeit gegeben (Klassennamen einheitlich)
  
### login-page.component.spec.ts
- Wartbarkeit gegeben
- Tests decken nicht alle Testfälle ab -> Mehr Tests (Paul Kuhn, 2 Wochen Zeit)
  
### login-page.component.ts
- Codequalität überzeugend

## Gelernte Lektionen
Einsatz von Review-Methodiken: 
Die Anwendung von Walkthroughs und Code Reviews als methodische Ansätze betont die Wichtigkeit, verschiedene Perspektiven und Techniken zu nutzen, um den Code umfassend zu bewerten
Mehr Testfälle implementieren:
Tests können ihr Potential nicht voll ausschöpfen, solange nicht alle Testfälle abgedeckt werden.

