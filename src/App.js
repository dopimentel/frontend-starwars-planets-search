import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';
import SorterForm from './components/SorterForm'; // Import the SorterForm component

function App() {
  return (
    <AppProvider>
      <main>
        <h1>Star Wars Project</h1>
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
