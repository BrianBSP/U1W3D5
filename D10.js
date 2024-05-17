/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("------ Es A ------");
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("------ Es B ------");
const random = Math.floor(Math.random() * 20) + 1;
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: 
  name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("------ Es C ------");
const me = {
  name: "Brian",
  surname: "Pelinku",
  age: 30,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("------ Es D ------");
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", 
  contenente i linguaggi di programmazione che conosci.
*/
console.log("------ Es E ------");
me.skills = ["HTML", "CSS", "JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("------ Es F ------");
me.skills.push("React");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("------ Es G ------");
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("----- Es 01 -----");
const dado = function dice() {
  const numero = Math.floor(Math.random() * 6) + 1;
  return numero;
};
console.log(dado());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("----- Es 02 -----");
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(whoIsBigger(5, 2));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("----- Es 03 -----");
const splitato = function splitMe(stringa) {
  const stringaSlittata = stringa.split(" ");
  return stringaSlittata;
};

console.log(splitato("ciao a tutti"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/
console.log("----- Es 04 -----");
const elimina = function deleteOne(stringa, boolean) {
  if (boolean === true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
};

console.log(elimina("ciao a tutti", true));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("----- Es 05 -----");
const onlyLetters = (stringa) => {
  return stringa.replace(/[0-9]?/g, "");
};
console.log(onlyLetters("ciao 3 a 4 1234567890 tutti"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("----- Es 06 -----");
const isThisAnEmail = (email) => {
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailValido.test(email);
};
const email1 = "esempio@gmail.org";
const email2 = "fjdskhjfkj";
console.log(isThisAnEmail(email1));
console.log(isThisAnEmail(email2));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("----- Es 07 -----");
const whatDayIsIt = () => {
  const giorniSettimana = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ];
  const oggi = new Date();
  const prendiGiorno = oggi.getDay();
  return giorniSettimana[prendiGiorno - 1];
};
console.log("Oggi è:", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto 
  contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle 
  invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("----- Es 08 -----");

const tiraIlDado = function rollTheDices(numero) {
  const tiri = [];
  const user = {
    sum: 0,
    tiri: [],
  };
  let somma = 0;
  for (let i = 0; i < numero; i++) {
    const tira = dado();
    user.tiri.push(tira);
    somma = somma + tira;
  }
  user.sum = somma;
  return user;
};
console.log(tiraIlDado(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("----- Es 09 -----");
const numeroGiorni = function howManyDays(data) {
  const oggi = new Date();
  const targetData = new Date(data);
  const differenzaInMills = targetData - oggi;
  const diffGiorni = Math.ceil(differenzaInMills / (1000 * 60 * 60 * 24));
  return diffGiorni;
};
const dataACaso = "2024-6-1";
console.log(numeroGiorni(dataACaso));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("----- Es 10 -----");
const mioCompleanno = function isTodayMyBirthday(compleanno) {
  const giorno = new Date().getDate();
  const mese = new Date().getMonth();
  const comply = new Date(compleanno);
  const giornoComply = comply.getDate();
  const meseComply = comply.getMonth();

  if (giorno === giornoComply && mese === meseComply) {
    return true;
  } else {
    return false;
  }
};
const ilGiornoDelMioCompleanno = "1993-9-8";
console.log(mioCompleanno(ilGiornoDelMioCompleanno));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
/* console.log("----- Es 11 -----");
const me2 = {
  name: "Brian",
  surname: "Pelinku",
  age: 30,
};
const eliminaLaProprieta = function deleteProp(oggetto, stringa) {
  delete oggetto.stringa;
};

console.log(eliminaLaProprieta(me2, stringa)); */

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("----- Es 12 -----");
const newestMovie = function (movieArray) {
  let filmRecente = movieArray[0];
  movieArray.forEach(function (movie) {
    if (filmRecente.Year < movie.Year) {
      filmRecente = movie;
    }
  });
  return filmRecente;
};
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("----- Es 13 -----");

const countMovies = function (movieArray) {
  return movieArray.length;
};
console.log("Numero di film: ", countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti 
  nell'array "movies" fornito.
*/
console.log("----- Es 14 -----");
const onlyTheYears = function (films) {
  let anniDiUscita = films.map((film) => film.Year);
  return anniDiUscita;
};
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso 
  contenuti nell'array "movies" fornito.
*/
console.log("----- Es 15 -----");
const onlyInLastMillennium = (films) => {
  let titoli = films.filter((film) => film.Year < 2000);
  return titoli;
};
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film 
  contenuti nell'array "movies" fornito.
*/
console.log("----- Es 16 -----");

const sumAllTheYears = (films) => {
  let somma = films.reduce((somm, film) => somm + parseInt(film.Year), 0);
  return somma;
};
console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" 
  fornito che la contengono nel titolo.
*/
console.log("----- Es 17 -----");
const searchByTitle = (stringa) => {
  const titoli = movies.filter((film) => film.Title.includes(stringa));
  return titoli;
};
console.log(searchByTitle("Avenger"));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: 
  "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, 
  mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("----- Es 18 -----");
const searchAndDivide = (stringa) => {
  const films = {
    match: [],
    unmatch: [],
  };

  for (let i = 0; i < movies.length; i++) {
    if (movies.Title.includes(stringa)) {
      films.match.push();
    } else {
      films.unmatch.push();
    }
  }
  return films;
};

console.log(searchAndDivide("Avengers"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo 
  dell'elemento nella posizione ricevuta come parametro.
*/
console.log("----- Es 19 -----");
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("----- Es 20 -----");
const contenitore = document.getElementById("container");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("----- Es 21 -----");
const colonne = document.getElementsByTagName("td");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("----- Es 22 -----");
const stampaContenutoColonne = () => {
  for (let i = 0; i < colonne.length; i++) {
    console.log(colonne[i]);
  }
};
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("----- Es 23 -----");
const addBackground = () => {
  const urlsColorati = getElementsByTagName("a");
  urlsColorati.style.Background = "red";
};
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("----- Es 24 -----");
const aggiungiElementoLista = () => {
  const nuovoLi = document.createElement("li");
  nuovoLi.innerText = "Nuovo Elemnto Lista";
  const ul = document.getElementById("myList");
  ul.appendChild(nuovoLi);
};
addToTheSecond();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("----- Es 25 -----");
const EliminaLista = () => {
  const laMiaLista = document.getElementById("myList");
  laMiaLista.remove();
};
EliminaLista();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("----- Es 26 -----");
const assegnaClasse = () => {
  const tuttiTr = document.querySelectorAll("tr");
  for (let i = 0; i < tuttiTr.length; i++) {
    tuttiTr[i].classList.add("test");
  }
};
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("----- Es 27 -----");
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("----- Es 28 -----");
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("----- Es 29 -----");
