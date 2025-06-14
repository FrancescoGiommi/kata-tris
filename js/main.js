/* # Arcade: Tris

## Obiettivi

- Sviluppare logica di gioco con JS
- Implementare interazioni per la UI del gioco

## Argomenti da ripassare

- Fundamentals HTML, CSS e JS


### Assets

- Puoi usare gli assets che preferisci e personalizzare la griglia di gioco
- In alternativa puoi incorporare il web font [**Press Start 2P**](https://fonts.google.com/specimen/Press+Start+2P)

## Consegna


📚 esercizio di oggi: Arcade: Tris
nome repo: **kata-tris**

Il Tris è un classico gioco di strategia che mette alla prova la logica e l'astuzia dei giocatori. L'obiettivo è essere il primo a creare una linea di tre simboli uguali, orizzontalmente, verticalmente o in diagonale.

**Sviluppiamo interfaccia e logica di gioco usando solo HTML, CSS e JS.**

**Regole del gioco:**

- La griglia di gioco è composta da 9 celle disposte in una matrice 3x3
- I giocatori si alternano posizionando i loro simboli (X e O)
- Il primo giocatore usa sempre la X, il secondo la O
- Clicca su una cella vuota per posizionare il tuo simbolo
- Vince il primo giocatore che riesce ad allineare tre simboli uguali:
    - in orizzontale (riga)
    - in verticale (colonna)
    - in diagonale
- Se tutte le 9 celle vengono riempite senza che nessuno vinca, la partita finisce in pareggio

**✨ Bonus:**

- Quando qualcuno vince, le celle vincenti devono essere evidenziate
- Può essere possibile iniziare una nuova partita senza ricaricare la pagina
- Sistema di punteggio per tenere traccia delle vittorie

Rimetti “in gioco” tutto quello che sai sulle basi di HTML, CSS e JS. 

Ti servirà!

Buon divertimento 👾


## Suggerimenti

- Inizia creando la griglia statica in HTML/CSS, poi aggiungi gradualmente la logica JavaScript per gestire i click, l'alternanza dei turni e il controllo delle vittorie.
- Ragiona sui dati: ad es. quale struttura dati potrebbe rappresentare al meglio la griglia di gioco? E le combinazioni vincenti?
- Non esiste una sola soluzione corretta. L'importante è che funzioni e che tu capisca perché funziona!
- Non è necessario che il gioco sia responsive, limitiamoci alla versione desktop */

const gameDataEl = document.querySelector(".game-data");
const buttonEl = document.querySelectorAll(".game-button");
const c0 = document.getElementById("cell-0");
const c1 = document.getElementById("cell-1");
const c2 = document.getElementById("cell-2");
const c3 = document.getElementById("cell-3");
const c4 = document.getElementById("cell-4");
const c5 = document.getElementById("cell-5");
const c6 = document.getElementById("cell-6");
const c7 = document.getElementById("cell-7");
const c8 = document.getElementById("cell-8");
const winText = document.getElementById("winText");

console.log(buttonEl);

let currentPLayer = "X";

document.querySelectorAll(".game-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.textContent === "") {
      const giocatore = currentPLayer; // Chi sta giocando ORA
      e.target.textContent = giocatore; // Mostro il simbolo
      currentPLayer = giocatore === "X" ? "O" : "X"; // Cambio turno
      if (
        c0.textContent !== "" &&
        c0.textContent === c1.textContent &&
        c1.textContent === c2.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c3.textContent !== "" &&
        c3.textContent === c4.textContent &&
        c4.textContent === c5.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c6.textContent !== "" &&
        c6.textContent === c7.textContent &&
        c7.textContent === c8.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c0.textContent !== "" &&
        c0.textContent === c4.textContent &&
        c4.textContent === c8.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c2.textContent !== "" &&
        c2.textContent === c4.textContent &&
        c4.textContent === c6.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c0.textContent !== "" &&
        c0.textContent === c3.textContent &&
        c3.textContent === c6.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c2.textContent !== "" &&
        c2.textContent === c5.textContent &&
        c5.textContent === c8.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      } else if (
        c1.textContent !== "" &&
        c1.textContent === c4.textContent &&
        c4.textContent === c7.textContent
      ) {
        winText.innerHTML = `${giocatore} Ha vinto!`;
      }
    }
  });
});
