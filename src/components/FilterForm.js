import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];

function FilterForm() {
  const {
    filterByName,
    column,
    operation,
    value,
    setFilterByName,
    setColumn,
    setOperation,
    setValue,
    setCurrentFilter,
  } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Os valores são: ${column}, ${operation}, ${value}`);
    setCurrentFilter({
      column,
      operation,
      value,
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <hr />
      <label htmlFor="inputName">Filtrar por nome:</label>
      <input
        data-testid="name-filter"
        type="text"
        id="inputName"
        value={ filterByName }
        onChange={ (e) => setFilterByName(e.target.value) }
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
      <button type="submit">Filtrar</button>
      <hr />
    </form>
  );
}

export default FilterForm;
