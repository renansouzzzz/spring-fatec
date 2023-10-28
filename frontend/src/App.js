import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./telas/cadastro/Cadastro";
import Listagem from "./telas/listagem/Listagem";
import './App.css';
import ContextApp from "./context/Mycontext";
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([{
    name: '',
    email: '',
    password: '',
    jobRole: ''
}])

  return (
    <ContextApp.Provider value={{user, setUser}}>
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
