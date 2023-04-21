import React, { useState } from 'react';

function FilterForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`O valor do input é: ${inputValue}`);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <hr />
      <label htmlFor="inputField">Digite algo:</label>
      <input
        type="text"
        id="inputField"
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
      />
      <button type="submit">Enviar</button>
      <hr />
    </form>
  );
}

export default FilterForm;
