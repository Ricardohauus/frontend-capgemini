import { Badge } from "reactstrap";
import React from "react";

const getStatus = status => {
  return status === "Sim"
    ? "success"
    : status === "Não"
    ? "danger"
    : status === "Aberto"
    ? "success"
    : status === "Finalizado"
    ? "danger"
    : status === "Ativo"
    ? "success"
    : status === "Inativo"
    ? "danger"
    : "";
};

export default class badge extends React.Component {
  render() {
    return (
      <Badge color={getStatus(this.props.status)}>{this.props.status}</Badge>
    );
  }
}
