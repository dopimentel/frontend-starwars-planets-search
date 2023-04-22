import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppProvider';

export default function Table() {
  const { planetsFiltered } = useContext(AppContext);
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    if (planetsFiltered && planetsFiltered.length > 0) {
      setHeaders(Object.keys(planetsFiltered[0]));
    }
  }, [planetsFiltered]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planetsFiltered && planetsFiltered.map((planet, index) => (
          <tr key={ index }>
            {headers.map((header) => (
              <td key={ header }>{planet[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
