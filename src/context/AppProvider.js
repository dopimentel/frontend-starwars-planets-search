import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext([]);

function AppProvider({ children }) {
  const [data, setData] = useState();
  const [planetsFiltered, setPlanetsFiltered] = useState(data);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [operation, setOperation] = useState('maior que');
  const [value, setValue] = useState(0);
  const [currentFilters, setCurrentFilters] = useState([]);
  // const [order, setOrder] = useState('ASC');
  // const [columnSort, setColumnSort] = useState('population');
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });

  const fetchData = () => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((dataApi) => {
        dataApi.results.forEach((planet) => delete planet.residents);
        // console.log(dataApi.results);
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

  useEffect(() => {
    const compareBy = {
      'maior que': (a, b) => a > b,
      'menor que': (a, b) => a < b,
      'igual a': (a, b) => a === b,
    };

    if (currentFilters.length > 0 && currentFilters[0].column) {
      const newPlanetsFiltered = data
        .filter((planet) => currentFilters.every((filter) => compareBy[filter.operation](
          Number(planet[filter.column]),
          Number(filter.value),
        )));

      setPlanetsFiltered(newPlanetsFiltered);
    } else {
      setPlanetsFiltered(data);
    }
  }, [currentFilters, data]);

  const deleteFilter = (id) => {
    const newCurrentFilters = currentFilters.filter((filter) => filter.column !== id);
    setCurrentFilters(newCurrentFilters);
  };

  const values = {
    data,
    planetsFiltered,
    filterByName,
    column,
    operation,
    value,
    currentFilters,
    order,
    setFilterByName,
    setColumn,
    setOperation,
    setValue,
    setCurrentFilters,
    setOrder,
    deleteFilter,
    setPlanetsFiltered,
  };

  return <AppContext.Provider value={ values }>{children}</AppContext.Provider>;
}
AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
