import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Ya estoy en React </h1>
        <a
          className="App-link"
          href="https://emersonespinoza.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emerson 
        </a>
      </header>
    </div>
  );
}

export default App;
