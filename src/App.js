import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a nuestra página!" />} />

          <Route path="category/:categoryName" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1> error 404: Not found </h1>} />

        </Routes>
        
      </BrowserRouter>
  );
}

export default App;
