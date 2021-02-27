import React, {Fragment, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ])

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([])


  //Get date
  const date = new Date().getFullYear()

  return (
    <Fragment>
      <Header 
        titulo='Tienda virtual'
      />

      <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}

        <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

      <Footer 
        date={date}
      />
    </Fragment>
  );
}

export default App;