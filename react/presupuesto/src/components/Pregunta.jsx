// eslint-disable-next-line

import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    // Define state
    const [cantidad, guardarCantidad] = useState(0)

    // Funcion que lee el presupuesto
    const denifirPresupuesto = field => {
        console.log(field.target.value);
    }
    
    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={denifirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;