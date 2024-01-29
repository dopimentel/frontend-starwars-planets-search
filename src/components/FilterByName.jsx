import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function FilterByName() {
  const { filterByName, setFilterByName } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="inputName">Filtrar por nome:</label>
      <input
        data-testid="name-filter"
        type="text"
        id="inputName"
        value={ filterByName }
        onChange={ (e) => setFilterByName(e.target.value) }
      />
    </div>
  );
}
