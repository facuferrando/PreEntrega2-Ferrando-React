import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemCount } from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
function App()  {
  return (
  <>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:id" element={<ItemListContainer />}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
};

export default App;
