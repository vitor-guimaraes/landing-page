import logo from './logo.svg';
import './App.css';
import Sobre from './pages/Sobre';

function App() {

  return (
    <div className="App">
      <Sobre></Sobre>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia o Livro!
        </a> */}

        <a
          className="App-link"
          href="http://localhost:3000/pages/landing/index.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Landing page
        </a>
      </header>
    </div>
  );
}

export default App;
