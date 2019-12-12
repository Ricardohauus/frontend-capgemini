//Propriedades da DataTable

const Options = {
  //Página inicial para a paginação
  page: 0,
  //Definir o número total de linhas
  count: 0,
  //True para Habilitar a fonte de dados remota
  serverSide: false,
  //Tipos de filtragem ('checkbox', 'dropdown', 'multiselect', 'textField')
  filterType: "multiselect",
  //Números de linhas que podem ser selecionados. As opções são "multiple", "single", "none".
  selectableRows: "none",
  //Enable/disable expandable rows
  expandableRows: false,
  //Enable/disable resizable columns
  resizableColumns: false,
  //Enable/disable responsive table views. Options: 'stacked', 'scroll'
  responsive: "scroll",
  //Number of rows allowed per page
  rowsPerPage: 10,
  //Options to provide in pagination for number of rows a user can select
  rowsPerPageOptions: [10, 20, 50, 100],
  //Enable/disable hover style over rows
  rowHover: true,
  //Enable/disable fixed header columns
  fixedHeader: true,
  //Texto inicial de pesquisa
  searchText: "",
  //Show/hide print	icon from toolbar
  print: true,
  //Show/hide download icon from toolbar
  download: true,
  //Options to change the output of the CSV file. Default options: {filename: 'tableDownload.csv', separator: ','}
  downloadOptions: {
    filename: "arquivo.csv",
    separator: ";"
  },
  //Visualizar Colunas
  viewColumns: true,

  //Opções da DataTable
  textLabels: {
    body: {
      noMatch: "Não há Registros",
      toolTip: "Reordenar"
    },
    pagination: {
      next: "Proxima Página",
      previous: "Página Anterior",
      rowsPerPage: "Linhas por Página:",
      displayRows: "de"
    },
    toolbar: {
      search: "Procurar",
      downloadCsv: "Baixar Arquivo CSV",
      print: "Imprimir",
      viewColumns: "Visualizar Colunas",
      filterTable: "Filtros da Tabela"
    },
    filter: {
      all: "Todos",
      title: "Filtros",
      reset: "Resetar Filtros"
    },
    viewColumns: {
      title: "Visualizar Colunas",
      titleAria: "Mostrar/Ocultar Colunas da Tabela"
    },
    selectedRows: {
      text: "Linhas Selecionadas",
      deleteAria: "Apagar Linhas Selecionadas"
    }
  }
};
export default Options;
