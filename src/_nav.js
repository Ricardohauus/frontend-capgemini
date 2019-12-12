export default function navigation(acesso) {
  return {
    items: [
      // Menu
      {
        title: true,
        name: "Menu",
        wrapper: {
          // optional wrapper object
          element: "", // required valid HTML5 element tag
          attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: "" // optional class names space delimited list for title item ex: "text-center"
      },
      // Inicio
      {
        name: "Inicio",
        icon: "fa fa-home",
        attributes: { hidden: false },
        // badge: {
        //   variant: "info",
        //   text: "NEW"
        // },
        children: [
          {
            name: "Página Inicial",
            url: "/",
            icon: "fa fa-home",
            attributes: { hidden: false }
          }
        ]
      },

      // Movimento
      {
        name: "Financeiro",
        icon: "fa fa-dollar",
        attributes: { hidden: false },
        // badge: {
        //   variant: "info",
        //   text: "NEW"
        // },
        children: [
          {
            name: "Saldo",
            url: "/contas/saldo",
            icon: "fa fa-table",
            attributes: { hidden: false }
          },
          {
            name: "Deposito / Saque",
            url: "/movimentacoes",
            icon: "fa fa-bank",
            attributes: { hidden: false }
          }
        ]
      }
    ]
  };
}
