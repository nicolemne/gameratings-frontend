import styles from './App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles.App}>
      <div className='NavBar'>
        <NavBar/>
      </div>
    </div>
  );
}

export default App;