# Traccia

Biglietto del treno
cartella/repo js-biglietto-treno

Stavolta lo scaffolding di cartelle e file lo lasciamo a voi 🤣.

NON vi buttate subito a capofitto sul codice JS, ma ragionate prima su tutti i vari passaggi da fare. Può aiutare scrivere lo pseudocodice in linguaggio naturale su tutti i passaggi da fare per ottenre il risultato corretto 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


# Struttura

// Prompt1: quanti chilometri devi percorrere?
//  prendiamo questo imput e trasformiamolo nella variabile (let) trattaKm
// e converti in float (ci servono tassativamente le virgole) 

// Prompt2: quanti anni hai?
//  prendiamo questo inpunt e trasformiamolo nella variabile (let) etaAnni
// e converti in float (ci servono tassativamente le virgole) 


// const prezzoKm = 0.21
// let prezzoTratta = prezzoKm * trattaKm

// e fin qua tutto bene.

// sconto: da applicare SE si rientra nella fascia eta'

// IF etaAnni <18, allora sconto 20% di valore da prezzoTratta
// ELSE IF etaAnni >= 65, allora sconto 40% di valore da prezzoTratta
// ELSE 0

// prezzo finale = prezzoTratta - sconto
// n.b.: METTI SOLO DUE VALORI DOPO VIRGOLA



prezzoBiglietto = 