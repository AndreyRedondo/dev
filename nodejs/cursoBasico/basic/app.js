// Functions
/* const years = [2000, 2005, 2008, 2012];

let edad5 = years.map(function (el) {
  return 2019 - el;
});

console.log(edad5);

let edad2 = years.map((el) => {
  return 2019 - el;
});

console.log(edad2);

let edad = years.map((el) => 2019 - el);

console.log(edad);*/

// Callbacks

/*function Mensaje(callback) {
  console.log("Mensaje antes del callback");
  callback();
}

function Saludo() {
  console.log("Saludo");
}

Mensaje(Saludo)

setTimeout(() => console.log('lol'), 3000) */

// Promises
/* const msj = new Promise((res, rej) => {
  setTimeout(() => {
    if (false) {
      res("Good");
    } else {
      console.log("Bad");
    }
  }, 3000);
  //rej('Bad')
});

msj
  .then((msj) => {
    console.log(msj);
  })
  .catch((err) => {
    console.log(err);
  }); */

// Async Await
