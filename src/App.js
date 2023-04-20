import React, { useContext } from 'react';
import './App.css';
import AppProvider, { AppContext } from './context/AppProvider';

function App() {
  const data = useContext(AppContext);
  console.log(data)
  return (
    <AppProvider>
      <span>Hello, App! {}</span>
    </AppProvider>
  );
}

export default App;
