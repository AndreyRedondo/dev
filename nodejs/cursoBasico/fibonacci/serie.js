// Serie de Fibonacci
const fs = require("fs");

let crearSerie = (num) => {
  return new Promise((resolve, reject) => {
    let fibo1 = 1;
    let fibo2 = 1;
    let serie = "";

    serie += `${fibo1} `;

    for (let i = 2; i <= num-1; i++) {
      serie += `${fibo2} `;

      fibo2 = fibo1 + fibo2;
      fibo1 = fibo2 - fibo1;
    }

    fs.writeFile("finbonacci.txt", serie, (err) => {
      if (err) resolve("Error while creating the file....");
      else reject("The file has been saved!");
    });
  });
};

module.exports = {
  crearSerie,
};
