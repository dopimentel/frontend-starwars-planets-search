import React, { useState } from 'react';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];

function FilterForm() {
  const [inputValue, setInputValue] = useState('');
  const [column, setColumn] = useState('');
  const [operation, setOperation] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Os valores são: ${column}, ${operation}, ${value}`);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <hr />
      <label htmlFor="inputField">Filtrar por nome:</label>
      <input
        type="text"
        id="inputField"
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
      />
      <br />
      <label>
        Coluna
        <select
          name="coluna"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="">Selecione uma coluna</option>
          {COLUMNS.map((col) => (
            <option key={ col } value={ col }>
              {col}
            </option>
          ))}
        </select>
      </label>

      <label>
        Operação
        <select
          name="operad"
          value={ operation }
          onChange={ (e) => setOperation(e.target.value) }
        >
          <option value="">Selecione uma operação</option>
          {COMPARISON_OPTIONS.map((comparison) => (
            <option key={ comparison } value={ comparison }>
              {comparison}
            </option>
          ))}
        </select>
      </label>

      <label>
        Número
        <input
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button type="submit">Enviar</button>
      <hr />
    </form>
  );
}

export default FilterForm;
