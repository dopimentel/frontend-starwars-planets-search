import './App.css';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div>
        <span>Hello, App!</span>
        <Table />
      </div>
    </AppProvider>
  );
}

export default App;
