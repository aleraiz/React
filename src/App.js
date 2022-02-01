import logo from './logo.svg';
import './App.css';

function App() {

  let contador = 1;
  contador++
  console.log(contador);

  let edad = 18;

  // if(edad>=18){
  //   console.log("es mayor de edad");
  // } else {
  //   console.log("es menor de edad");
  // }

  // se puede escribir de la siguiente manera:
  edad >= 18 ? console.log("es mayor de edad") : console.log("es menor de edad");


  return (
    <div className="App">
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
