# Angular Starter

## App Starten

1. `npm install`
2. `npm start`

## App Struktur

- `src/app` enthält die Angular-App
- `src/lib/components` enthält die Komponenten
  - Jede Komponente hat ein eigenes Verzeichnis und besteht aus einer `.ts`, `.html` und `.scss` Datei
- `src/lib/services` enthält die Services --> Diese sind für die Business-Logik zuständig, zum Beispiel für HTTP-Requests
- `src/lib/store` enthält den Store
- `src/lib/types` enthält die Typ-Definitionen --> Typdefinitionen können auch einfach dort definiert werden, wo sie benötigt werden

### Store

![](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

- `src/lib/store` enthält den Store
- mit `store.dispatch()` kann ein Event ausgelöst werden
- mit `store.selectSignal()` kann aus dem Store gelesen werden
- `Effects` sind für asynchrone Operationen zuständig (z.B. HTTP-Requests)
- Mehr Infos: https://ngrx.io/guide/store
