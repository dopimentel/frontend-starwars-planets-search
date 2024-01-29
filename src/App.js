import React, { useState, useEffect } from 'react';
import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';
import SorterForm from './components/SorterForm'; // Import the SorterForm component

function App() {
  const [showTitle, setShowTitle] = useState(false);

  // Função para mostrar o título gradualmente
  const handleShowTitle = () => {
    setShowTitle(true);
  };

  // UseEffect para ativar a transição ao montar o componente
  useEffect(() => {
    handleShowTitle();
  }, []);
  return (
    <AppProvider>
      <main className="App">
        <header className="App-header">
          <h1 className={ `App-title ${showTitle ? 'visible' : ''}` }>
            Star Wars Project
          </h1>
        </header>
        <section>
          <FilterForm />
          <SorterForm />
          <Table />
        </section>
      </main>
    </AppProvider>
  );
}

export default App;
