import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SortForm() {
  const {
    order,
    setOrder,
    planetsFiltered,
    setPlanetsFiltered,
  } = useContext(AppContext);
  const { column, sort } = order;

  const handleSortChange = (e) => {
    setOrder({ ...order, column: e });
  };

  const handleOrderChange = (e) => {
    setOrder({ ...order, sort: e.target.value });
  };

  const sortPlanets = (planets) => {
    const change = 1;
    const keep = -1;
    const sortedPlanets = planets.slice().sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA === 'unknown' && valueB !== 'unknown') {
        return change;
      } if (valueA !== 'unknown' && valueB === 'unknown') {
        return keep;
      }
      const numValueA = Number(valueA) || Infinity;
      const numValueB = Number(valueB) || Infinity;

      if (sort === 'ASC') {
        return numValueA - numValueB;
      }

      return numValueB - numValueA;
    });

    setPlanetsFiltered(sortedPlanets);
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    // console.log(`Ordenar por ${column} em ordem ${sort}`);

    sortPlanets(planetsFiltered);
  };

  return (
    <>
      <form onSubmit={ handleSortSubmit }>
        <label htmlFor="sort-column">
          Ordenar por:
          <select
            name="sort-column"
            value={ column }
            onChange={ (e) => handleSortChange(e.target.value) }
            id="sort-column"
            data-testid="column-sort"
          >
            {COLUMNS.map((col) => (
              <option key={ col } value={ col }>
                {col}
              </option>
            ))}
          </select>
        </label>

        <label>
          Ordem:
          <input
            type="radio"
            name="sort-order"
            value="ASC"
            checked={ sort === 'ASC' }
            onChange={ (e) => handleOrderChange(e) }
            data-testid="column-sort-input-asc"
          />
          Ascendente
        </label>
        <label>
          <input
            type="radio"
            name="sort-order"
            value="DESC"
            checked={ sort === 'DESC' }
            onChange={ (e) => handleOrderChange(e) }
            data-testid="column-sort-input-desc"
          />
          Descendente
        </label>

        <button
          data-testid="column-sort-button"
          type="submit"
          // disabled={ columns.length === 0 }
        >
          Ordenar
        </button>
      </form>

      <hr />
    </>
  );
}

export default SortForm;
