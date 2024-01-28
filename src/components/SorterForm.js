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
  const { order, setOrder } = useContext(AppContext);
  const { column, sort } = order;

  // const [columns, setColumns] = useState(COLUMNS);

  const handleSortChange = (e) => {
    setOrder({ ...order, column: e });
  };

  const handleOrderChange = (e) => {
    setOrder({ ...order, sort: e.target.value });
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    console.log(`Ordenar por ${column} em ordem ${sort}`);
    // Lógica para aplicar a ordenação
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
          >
            {COLUMNS.map((col) => (
              <option key={ col } value={ col }>
                {col}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="sort-order">
          Ordem:
          <select
            name="sort-order"
            value={ sort }
            onChange={ (e) => handleOrderChange(e) }
            id="sort-order"
          >
            <option data-testid="column-sort-input-asc" value="ASC">Ascendente</option>
            <option data-testid="column-sort-input-desc" value="DESC">Descendente</option>
          </select>
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
