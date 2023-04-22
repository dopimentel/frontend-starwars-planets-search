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
          data-testid="column-filter"
          name="coluna"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
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
          data-testid="comparison-filter"
          name="operad"
          value={ operation }
          onChange={ (e) => setOperation(e.target.value) }
        >
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
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
      <hr />
    </form>
  );
}

export default FilterForm;
