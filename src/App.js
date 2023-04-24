import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <main>
        <h1>Star Wars Project</h1>
        <section>
          <FilterForm />
          <Table />
        </section>
      </main>
    </AppProvider>
  );
}

export default App;
