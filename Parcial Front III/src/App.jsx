import React, { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length < 3 || input1.startsWith(' ') || input2.length < 6) {
      setErrorMsg('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setShowCard(true);
      setErrorMsg(" ")
    }
  };

  return (
    <div className='conteiner1'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input1">Ingrese su nombre:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          required
        />

        <label htmlFor="input2">Ingrese su pelicula favorita:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      {errorMsg && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMsg}</p>}

      {showCard && (
        <div className='finalCard'>
          <h3>Tarjeta:</h3>
          <p>Nombre: {input1}</p>
          <p>Pelicula: {input2}</p>
        </div>
      )}
    </div>
  );
}

export default App;
