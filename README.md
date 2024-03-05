# AngularRouterTourOfHeroes

Questo progetto è stato creato con [Angular CLI](https://github.com/angular/angular-cli) versione 17.1.2.

## Descrizione

Questa applicazione è un esempio di una applicazione multi-pagina con routing sviluppata come tutorial. Durante lo sviluppo, vengono evidenziate alcune caratteristiche chiave del router di Angular.
L’applicazione di esempio per questo tutorial aiuta l’Agenzia di Impiego degli Eroi a trovare crisi da risolvere per gli eroi.

L’applicazione ha tre aree di funzionalità principali:

- Un “Crisis Center” per mantenere l’elenco delle crisi da assegnare agli eroi
- Un’area “Heroes” per mantenere l’elenco degli eroi impiegati dall’agenzia
- Un’area “Admin” per gestire l’elenco delle crisi e degli eroi

## Installazione

Prima di tutto, assicurati di avere Node.js e npm installati sulla tua macchina. 

Per installare le dipendenze del progetto, naviga nella directory del progetto e esegui:

```bash
npm install
```

## Development server

Per avviare l’applicazione, esegui il seguente comando nella directory del progetto: 

```bash
ng serve
```

## Costruzione dell’applicazione
Per costruire l’applicazione per la produzione, esegui il seguente comando:
```bash
ng build
```

## Guida all'App
L'applicazione è composta da diverse componenti, tra cui `heroes`, `crisis-center`, `admin`, `login` (che si trova nella cartella `auth`) e ovviamente la `app component`. Le componenti `heroes` e `crisis-center` hanno delle sotto-componenti che comunicano tra di loro.

Il routing ha giocato un ruolo fondamentale nello sviluppo di questa applicazione. Di seguito sono riportate alcune delle funzionalità chiave implementate:

- **Organizzazione delle funzionalità dell'applicazione in moduli**: Questo aiuta a mantenere il codice organizzato e facilmente gestibile.
- **Navigazione verso una componente**: Ad esempio, il link "Heroes" porta alla "Lista degli Eroi".
- **Inclusione di un parametro di route**: Ad esempio, passando l'ID dell'eroe durante il routing al "Dettaglio dell'Eroe".
- **Route figlie**: Ad esempio, il "Crisis Center" ha le sue proprie route.
- **Guardia canActivate**: Questa verifica l'accesso alla route.
- **Guardia canActivateChild**: Questa verifica l'accesso alla route figlia.
- **Guardia canDeactivate**: Questa chiede il permesso di scartare le modifiche non salvate.
- **Guardia resolve**: Questa pre-carica i dati della route.
- **Caricamento pigro di un NgModule**: Questo migliora le prestazioni dell'applicazione caricando le funzionalità solo quando necessario.
- **Guardia canMatch**: Questa verifica prima di caricare gli asset del modulo di funzionalità.

## Ringraziamenti
Grazie per aver visitato il mio progetto!