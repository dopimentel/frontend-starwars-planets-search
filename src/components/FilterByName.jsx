import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import styles from './Form.module.css';

export default function FilterByName() {
  const { filterByName, setFilterByName } = useContext(AppContext);
  return (
    <div className={ styles.formName }>
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
