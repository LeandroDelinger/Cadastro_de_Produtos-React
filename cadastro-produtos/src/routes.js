import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./views/home";
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProduto from "./views/produtos/consulta";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro-produtos" element={<CadastroProduto />} />
      <Route path="/consulta-produtos" element={<ConsultaProduto />} />
    </Routes>
  );
}

export default Rotas;
