import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./views/home";
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProduto from "./views/produtos/consulta";

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/cadastro-produtos/:sku?"
        component={CadastroProduto}
      />
      <Route exact path="/consulta-produtos" component={ConsultaProduto} />
    </Switch>
  );
}

export default Rotas;
