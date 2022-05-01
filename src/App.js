import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
 
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer
      greeting='Hola! Bienvenido a Cornicione Pizza!'/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
