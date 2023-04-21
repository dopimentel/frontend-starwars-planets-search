import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext([]);

function AppProvider({ children }) {
  const [data, setData] = useState();
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

  const values = {
    data,
  };

  return <AppContext.Provider value={ values }>{children}</AppContext.Provider>;
}
AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
