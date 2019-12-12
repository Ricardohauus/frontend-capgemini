import React from "react";
import { Jumbotron, Button } from "reactstrap";

import api from "../../services/api";

export default class Home extends React.Component {
  async handleSubmit(event) {
    await api
      .postOrPut("/clientes")
      .then(response => {
        if (response.status === 201) {
          alert("Criado as contas 0001 e 0002");
        }
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 404) {
            alert("Contas 0001 e 0002 já criadas");
          }
        } else {
          alert("Erro no Servidor");
        }
      });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Seja bem vindo!</h1>
          <p className="lead">Sistema Bancario Capgemini</p>
          <hr className="my-2" />
          <p>
            A Capgemini é uma multinacional francesa que está entre os maiores
            Bancos do mundo!
          </p>
          <p className="lead">
            <form onSubmit={this.handleSubmit}>
              <input
                type="submit"
                className="btn btn-primary"
                value="Criar Contas Fake"
              />
            </form>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
