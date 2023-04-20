import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext([]);

function AppProvider({ children }) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((dataApi) => {
        console.log();
        setData(dataApi.results);
      });
  }, []);

  return <AppContext.Provider value={ { data } }>{children}</AppContext.Provider>;
}
AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
