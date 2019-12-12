import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import "../../App.css";
import CardColor from "../reactstrap/Card/CardColor";
import api from "../../services/api";
import FormSchema from "./FormSchema";
import { mensagemErro } from "../../services/mensagens";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  Label,
  Alert
} from "reactstrap";
import ModalLoading from "../reactstrap/Modal/ModalLoading";
const rota = "contas/saldo";
function SaldoForm({ history, match }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saldo, setSaldo] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function carregarDados() {
      const { id } = match.params;
      const response = await api.get(`/${rota}/${id}`);
      setData(response.data);
    }

    if (match.params.id) {
      carregarDados();
    }
  }, [match.params, match.params.id]);

  const valoresIniciais = {
    conta: { numConta: data.numConta || "" }
  };

  return (
    <div>
      <ModalLoading modalCarregar={loading} />
      <Formik
        validateOnBlur={true}
        validateOnChange={true}
        enableReinitialize
        initialValues={valoresIniciais}
        validationSchema={FormSchema}
        onSubmit={async values => {
          setLoading(true);
          const { numConta } = values;
          const response = await api
            .get(`/${rota}/${numConta}`, values.id, values)
            .then(response => {
              if (response) {
                const { saldoConta } = response.data;
                const { nome } = response.data.cliente;
                setNome(nome);
                setSaldo(saldoConta);
                setLoading(false);
                setError("");
              }
            })
            .catch(err => {
              setSaldo(0);
              setNome("");
              setLoading(false);
              if (err.response) {
                const { detail, fieldMessage } = err.response.data;
                if (fieldMessage) {
                  setError(fieldMessage);
                } else {
                  setError(detail);
                }
              } else {
                setError(mensagemErro);
              }
            });
        }}
        render={props => (
          <Card style={CardColor}>
            <CardHeader>
              <h5 style={{ textAlign: "center" }}>Verificar Saldo</h5>
            </CardHeader>
            <form onSubmit={props.handleSubmit}>
              <CardBody>
                {error ? (
                  <FormGroup row>
                    <Col lg="12" md="12" sm="12">
                      <Alert
                        color="danger"
                        style={{ textAlign: "center" }}
                        className="text-danger"
                      >
                        {error}
                      </Alert>
                    </Col>
                  </FormGroup>
                ) : (
                  ""
                )}

                <FormGroup row>
                  <Col lg="2" md="12" sm="12">
                    <Label htmlFor="numConta" className="lblColor">
                      Numero da Conta
                    </Label>
                  </Col>

                  <Col lg="4" md="12" sm="12">
                    <Input
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.numConta}
                      type="text"
                      id="numConta"
                      name="numConta"
                      invalid={props.errors.numConta && props.touched.numConta}
                    />
                    <FormFeedback>
                      {props.errors.numConta && props.touched.numConta && (
                        <div className="requireError">
                          {props.errors.numConta}
                        </div>
                      )}
                    </FormFeedback>
                  </Col>
                  {nome ? (
                    <>
                      <Col lg="3" md="12" sm="12">
                        <Label htmlFor="saldoConta" className="lblColor">
                          Saldo da Conta de {nome}
                        </Label>
                      </Col>

                      <Col lg="3" md="12" sm="12">
                        <Label htmlFor="saldoConta" className="lblColor">
                          {saldo}
                        </Label>
                      </Col>
                    </>
                  ) : (
                    ""
                  )}
                </FormGroup>
              </CardBody>

              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Pesquisar
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}
      />
    </div>
  );
}

export default SaldoForm;
