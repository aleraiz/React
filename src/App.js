import './App.css';
import NavBar from './components/NavBar.js';
import logo from '../src/logo.svg'


function App() {

  return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar/>
            <div className='Menu-header'>
              <ul className='Lista-header'>
                <li>Favoritos</li>
                <li>Cuenta</li>
                <li>Bolsa</li>
              </ul>
            </div>
          </header>   
  </div>
  );
}

export default App;
