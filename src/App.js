import { Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
 
  return (
    <div className="App">
      <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='category/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
