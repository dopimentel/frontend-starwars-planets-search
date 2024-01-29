import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import styles from './Form.module.css';

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
    columns,
    operation,
    value,
    currentFilters,
    setFilterByName,
    setColumn,
    setColumns,
    setOperation,
    setValue,
    setCurrentFilters,
  } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Os valores são: ${column}, ${operation}, ${value}`);
    setCurrentFilters([
      ...currentFilters,
      {
        column,
        operation,
        value,
      },
    ]);
    if (columns.length > 0) setColumn(columns[1]);
    setOperation(operation);
    setColumns(columns.filter((elem) => elem !== column));
    if (filterByName.length > 0) setFilterByName('');
  };

  return (
    <form onSubmit={ handleSubmit } className={ styles.container }>
      <br />
      <label htmlFor="column-filter">
        Coluna
        <select
          data-testid="column-filter"
          name="coluna"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
          id="column-filter"
        >
          {columns.map((col) => (
            <option key={ col } value={ col }>
              {col}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operação
        <select
          data-testid="comparison-filter"
          name="operad"
          value={ operation }
          onChange={ (e) => setOperation(e.target.value) }
          id="comparison-filter"
        >
          {COMPARISON_OPTIONS.map((comparison) => (
            <option key={ comparison } value={ comparison }>
              {comparison}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="value-filter">
        Número
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
          id="value-filter"
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
        disabled={ columns.length === 0 }
      >
        Filtrar
      </button>
      <br />

      <button
        data-testid="button-remove-filters"
        type="button"
        disabled={ !currentFilters.length }
        onClick={ () => {
          setCurrentFilters([]);
          setColumns(COLUMNS);
          setColumn('population');
        } }
      >
        Remover filtros
      </button>

      <hr />
    </form>

  );
}

export default FilterForm;
