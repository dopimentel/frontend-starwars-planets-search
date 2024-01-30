import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function AppliedFilters() {
  const { filterByName,
    currentFilters,
    setFilterByName,
    deleteFilter,
    columns,
    setColumn,
    setColumns,
  } = useContext(AppContext);
  const handleClick = (e) => {
    deleteFilter(e.target.id);
    setColumns([...columns, e.target.id]);
    setColumn(columns[0] || e.target.id);
    if (filterByName.length > 0) setFilterByName('');
  };
  return (
    <ul>
      <h2>Filtros</h2>
      {!currentFilters.length ? (
        <p>Nenhum filtro aplicado</p>
      ) : (
        currentFilters.map(
          ({ column: col, operation: oper, value: val }, index) => (
            <li key={ index } data-testid="filter">
              {`${col} ${oper} ${val}`}
              <button
                id={ `${col}` }
                type="button"
                onClick={ (e) => handleClick(e) }
              >
                X
              </button>
            </li>
          ),
        )
      )}
    </ul>
  );
}
