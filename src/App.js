import logo from './logo.svg';
import './App.css';
import SimpleContainer from './components/SimpleContainer';
import ColumnsGrid from './components/SummaryGrid';
import Types from './components/Text';
import { Item } from './components/SummaryGrid';


function App() {
  return (
    
    <div className="App">
      <SimpleContainer> HELLO</SimpleContainer>
      <ColumnsGrid >  </ColumnsGrid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      
    </div>
  );
}

export default App;
