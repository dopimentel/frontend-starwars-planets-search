import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div>
        <span>Hello, App!</span>
        <FilterForm />
        <Table />
      </div>
    </AppProvider>
  );
}

export default App;
