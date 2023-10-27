import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./telas/cadastro/Cadastro";
import Listagem from "./telas/listagem/Listagem";
import './App.css';
import ContextApp from "./context/Mycontext";
import { useState } from 'react'

function App() {

  const [data, setData] = useState([{
    id: 0,
    nome: "",
    email: "",
    senha: "",
    cargo: "",
    status: ""
  }]);

  return (
    <ContextApp.Provider value={[data, setData]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Cadastro} />
          <Route path="/listagem" Component={Listagem} />
        </Routes>
      </BrowserRouter>
    </ContextApp.Provider>
  )
}

export default App;
