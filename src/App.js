import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.jsx';



function App() {

  return (
    <div className="App container">
          <header className="App-header bg-dark text-center" >
            <NavBar/>
          </header>
          <ItemListContainer
            greeting="Bienvenidos a mi Ecommerce React!"/>   
  </div>
  );
}

export default App;
