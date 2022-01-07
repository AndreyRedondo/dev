import React, { Fragment } from 'react';
import UseState from "./components/UseState/UseState"
import './App.css';
import UseEffect from './components/UseEffect/UseEffect';
import Effect from './components/Playground/Playground';

function App() {
  return (
    <Fragment>
      <UseState />
      <br></br>
      <br></br>
      <Effect></Effect>
    {/*   <UseEffect /> */}
    </Fragment>
  );
}

export default App;
