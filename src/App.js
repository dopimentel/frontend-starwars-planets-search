import './App.css';
import { ReactTyped } from 'react-typed';
import { useEffect } from 'react';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';
import SorterForm from './components/SorterForm'; // Import the SorterForm component

function App() {
  const timeToShrink = 3000;
  useEffect(() => {
    const timer = setTimeout(() => {
      const header = document.querySelector('.App-header');
      if (header) {
        header.classList.add('shrink');
      }
    }, timeToShrink); // 3000 milissegundos = 3 segundos

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, []);
  return (
    <AppProvider>
      <main className="App">
        <header className="App-header">
          <ReactTyped strings={ ['Star Wars Planets'] } typeSpeed={ 200 } />
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
