import logo from './logo.svg';
import './App.css';
import CadastrarProdutos from './pages/CadastrarProdutos';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cadastrarProdutos" element={<CadastrarProdutos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
