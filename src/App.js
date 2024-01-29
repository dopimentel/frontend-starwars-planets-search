import './App.css';
import { ReactTyped } from 'react-typed';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';
import SorterForm from './components/SorterForm'; // Import the SorterForm component

function App() {
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
