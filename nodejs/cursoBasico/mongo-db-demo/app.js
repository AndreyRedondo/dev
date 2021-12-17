const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true })
    .then(() => console.log('Conected to MongoDB'))
    .catch(err => console.log('Not able to connect', err))

const cursoSchema = new mongoose.Schema({
    nombre: String,
    author: String,
    etiquetas: [String],
    fecha: { type: Date, default: Date.now },
    publicado: Boolean
});

const Curso = mongoose.model('Curso', cursoSchema);

async function crearCurso() {
    const curso = new Curso({
        nombre: 'NodeJS desde 100',
        author: 'Vargas',
        etiquetas: ['Desarrollo web', 'Backend'],
        publicado: true
    })
    const resultado = await curso.save();
    console.log(resultado);
}

// crearCurso();

async function listarCursos() {
    const cursos = await Curso
        .find({ author: "Vargas" })
        .limit(10)
        .sort({ author: 1 })
        .select({ nombre: 1, etiquetas: 1 })
    console.log(cursos);
}

// listarCursos()

async function actualizarCurso(id) {
    /*     const curso = await Curso.findById(id)
        if (!curso) {
            console.log('Course not found');
            return;
        }
        curso.publicado = false;
        curso.author = 'Redondillo' */

    /*     curso.set({
            publicado = false,
            author = 'Redondillo',
        }) */

    const resultado = await Curso.findByIdAndUpdate(id, {
        $set: {
            author: "Super Redondisimo2",
            publicado: true
        }
    }, { new: true });
    console.log(resultado);

    /*     const resultado = await curso.save()
        console.log(resultado); */
}

// actualizarCurso('6170af7dd4a6e1bf99194668')


async function eliminarDocumento(id) {
    const resultado = await Curso.deleteOne({ _id: id });
    console.log(resultado);

}

eliminarDocumento('6170ad2878724d3e0ebb82f6')