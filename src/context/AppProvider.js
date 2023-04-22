import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext([]);

function AppProvider({ children }) {
  const [data, setData] = useState();
  const [planetsFiltered, setPlanetsFiltered] = useState(data);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('');
  const [operation, setOperation] = useState('');
  const [value, setValue] = useState('');

  const fetchData = () => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((dataApi) => {
        dataApi.results.forEach((planet) => delete planet.residents);
        console.log(dataApi.results);
        setData(dataApi.results);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const newNameFiltered = data
        .filter((planet) => planet.name.toLowerCase()
          .includes(filterByName.toLowerCase()));

      setPlanetsFiltered(newNameFiltered);
    }
  }, [filterByName, data]);

  const values = {
    data,
    planetsFiltered,
    filterByName,
    column,
    operation,
    value,
    setFilterByName,
    setColumn,
    setOperation,
    setValue,
  };

  return <AppContext.Provider value={ values }>{children}</AppContext.Provider>;
}
AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
