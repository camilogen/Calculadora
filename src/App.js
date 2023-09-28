import './App.css';
import FreeCodeCamp_logo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


const [input, setInput] = useState('');

const agregarInput = val => {
  setInput(input + val);
};

const calcularResultado = () => {
setInput(evaluate(input))
};


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={FreeCodeCamp_logo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton handleClick={agregarInput}>7</Boton>
        <Boton handleClick={agregarInput}>8</Boton>
        <Boton handleClick={agregarInput}>9</Boton>
        <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton handleClick={}>=</Boton>
        <Boton handleClick={agregarInput}>0</Boton>
        <Boton handleClick={agregarInput}>.</Boton>
        <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear handleClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
        
    </div>
  );
}

export default App;
