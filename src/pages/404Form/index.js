import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { textAlign } from "@material-ui/system";

class Page404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! Você está perdido?</h4>
                <p className="text-muted float-left">
                  A página que você está tentando visualizar, não foi
                  encontrada!
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h5 className="pt-3">
                  Deseja voltar para a <Link to="/">Página Principal</Link> ?
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Page404;
