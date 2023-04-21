import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppProvider';

export default function Table() {
  const { data } = useContext(AppContext);
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      setHeaders(Object.keys(data[0]));
    }
  }, [data]);

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
        {data && data.map((planet, index) => (
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
