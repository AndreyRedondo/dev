const serie = require('./serie')


let argv = process.argv
let valor = argv[2]
let result = valor.split('=')[1]

serie.crearSerie(result)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))