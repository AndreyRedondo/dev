const andrey = new Promise((resolve, reject) => {
    if (false) {
        resolve('Good')
    }
    else {
        reject('Bad')
    }
})

andrey
    .then(msj =>{
        console.log(msj);
    })
    .catch(error =>{
        console.log(error);
    })

