import { ReactTyped } from 'react-typed';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import AppProvider from './context/AppProvider';
import SorterForm from './components/SorterForm';

function App() {
  const [shrinkTitle, setShrinkTitle] = useState(false);
  const timeToShrink = 3000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setShrinkTitle(true);
    }, timeToShrink);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppProvider>
      <main className={ styles.container }>
        <ReactTyped
          className={ `${styles.title} ${shrinkTitle ? styles.shrink : ''}` }
          strings={ ['STAR WARS PLANETS'] }
          typeSpeed={ 200 }
        />
        <header className={ styles.header }>
          <FilterForm />
          <SorterForm />
        </header>
        <section>
          <h1> PLANETS</h1>
          <Table />
        </section>
      </main>
    </AppProvider>
  );
}

export default App;
