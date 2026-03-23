'strict';

// Prompt1: quanti chilometri devi percorrere?
//  prendiamo questo imput e trasformiamolo nella variabile trattaKm
// e converti in float (ci servono tassativamente le virgole) 

// accetto di proposito anche valori con la virgola, non si sa mai che becchiamo qualche precisino

const trattaKm = parseFloat(prompt('quanti chilometri devi percorrere (inserire solo valore numerico)?', '10'));
console.log(trattaKm);

// Prompt2: quanti anni hai?
//  prendiamo questo inpunt e trasformiamolo nella variabile etaAnni
// e converti in Integer (calcoliamo sui compleanni festeggiati) 

const etaAnni = parseInt(prompt('quanti anni hai(inserire solo valore numerico', '18'));
console.log(etaAnni);


// dichiariamo e assegnamo una variabile per il prezzo di viaggio al km

const prezzoKm = 0.21;

// creiamo ora una variabile per il prezzo al variare della tratta

const prezzoTratta = prezzoKm * trattaKm;
console.log(prezzoTratta);

// sconto: da applicare SE si rientra nella fascia eta'


if (etaAnni < 18) {
    let sconto = (prezzoTratta / 100 ) * 20;
}
else if (etaAnni>= 65) {
    let sconto = (prezzoTratta / 100) *40;
}
else {
    let sconto = 0;
}