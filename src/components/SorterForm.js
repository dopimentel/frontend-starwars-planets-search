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
  const { sorter, setSorter } = useContext(AppContext);
  const { column, order } = sorter;

  // const [columns, setColumns] = useState(COLUMNS);

  const handleSortChange = (e) => {
    setSorter({ ...sorter, column: e });
  };

  const handleOrderChange = (e) => {
    setSorter({ ...sorter, order: e.target.value });
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    console.log(`Ordenar por ${column} em ordem ${order}`);
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
            value={ order }
            onChange={ (e) => handleOrderChange(e) }
            id="sort-order"
          >
            <option value="Asc">Ascendente</option>
            <option value="Desc">Descendente</option>
          </select>
        </label>

        <button
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
