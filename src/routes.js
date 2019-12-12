import React from "react";
const Home = React.lazy(() => import("./components/home/Home"));
const Movimentacao = React.lazy(() => import("./components/movimentacao/Movimentacao"));
const Saldo = React.lazy(() => import("./components/saldo/Saldo"));
const routes = [
  { path: "/", exact: true, name: "Inicio", component: Home },

  {
    path: "/movimentacoes",
    exact: true,
    name: "Realizar Movimentacao",
    component: Movimentacao
  },
  {
    path: "/contas/saldo",
    exact: true,
    name: "Saldo",
    component: Saldo
  },

];

export default routes;
