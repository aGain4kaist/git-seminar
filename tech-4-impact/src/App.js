import './App.css';
import logo from './logo.svg';

function App() {
  const na = "minb__m";
  const user = {
    na : "김민범"
  }
  return (
    <div className="App">
      <h1
        style = {{
          color : "#f0f",
          backgroundColor : "blue"
        
        }
      }
      >
        <p>안녕, {na}</p>
        <p>정말로, {user.na}</p>
      </h1>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        안뇽!
        </p>
        <a
          className="App-link"
          href="https://yeezy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          buy yeezy
        </a>
      
      </header>
    </div>
  );
}

export default App;
