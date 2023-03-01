
 import React, { useState } from 'react'
  import './UseState.css'

export const UseState = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("black");
  
  const incrementarContador = () => {
    if (contador >= 10) {
      setContador(0);
    } else {
      setContador(contador + 1);
      setColor("violet");
    }
  };
  
  const decrementarContador = () => {
    setContador(contador - 1);
  };
  
  const resetCount = () => {
    setContador(0);
    setColor("blue");
  };
  
  return (
    <div className="container-buttons">
      <h2 style={{ color: color }}>{contador}</h2>
      <button onClick={incrementarContador}>+</button>
      <button onClick={decrementarContador}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
  }  




