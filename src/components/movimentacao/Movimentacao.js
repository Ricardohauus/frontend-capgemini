import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import "../../App.css";
import CardColor from "../reactstrap/Card/CardColor";
import api from "../../services/api";
import FormSchema from "./FormSchema";
import Select from "react-select";
import { mensagemErro } from "../../services/mensagens";
import { carregaTipos } from "../../services/LoadSelect";
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
const rota = "movimentacoes";
function MovimentacaoForm({ history, match }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tipos, setTipos] = useState([]);

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

  useEffect(() => {
    async function loadTipos() {
      setTipos(await carregaTipos());
    }
    loadTipos();
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
          const { tipoMov } = values;
          values.conta.numConta = values.numConta;
          values.tipoMov = tipoMov.value;
          await api
            .postOrPut(`/${rota}`, values.id, values)
            .then(response => {
              if (response) {
                const { nome } = response.data.conta.cliente;
                setLoading(false);
                history.push(`/`);
                if (values.tipoMov === "D") {
                  alert(`Deposito realizado com sucesso na conta de ${nome}`);
                } else {
                  alert(`Saque realizado com sucesso na conta de ${nome}`);
                }
              }
            })
            .catch(err => {
              values.tipoMov = tipoMov;
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
              <h5 style={{ textAlign: "center" }}>Realizar Movimentação</h5>
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

                  <Col lg="2" md="12" sm="12">
                    <Label htmlFor="valor" className="lblColor">
                      Valor
                    </Label>
                  </Col>

                  <Col lg="4" md="12" sm="12">
                    <Input
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.valor}
                      type="number"
                      id="valor"
                      name="valor"
                      invalid={props.errors.valor && props.touched.valor}
                    />
                    <FormFeedback>
                      {props.errors.valor && props.touched.valor && (
                        <div className="requireError">{props.errors.valor}</div>
                      )}
                    </FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col lg="2" md="12" sm="12">
                    <Label htmlFor="tipoMov" className="lblColor">
                      Tipo Movimentação
                    </Label>
                  </Col>

                  <Col lg="4" md="12" sm="12">
                    <Select
                      id="tipoMov"
                      placeholder="::Selecione::"
                      isClearable
                      isOptionSelected
                      isSearchable
                      options={tipos}
                      onChange={value => props.setFieldValue("tipoMov", value)}
                      value={props.values.tipoMov}
                      noOptionsMessage={() => "Nenhum tipoMov Disponivel"}
                    />
                    <FormText color="danger">
                      {props.errors.tipoMov && props.touched.tipoMov && (
                        <div className="requireError">
                          {props.errors.tipoMov}
                        </div>
                      )}
                    </FormText>
                  </Col>
                </FormGroup>
              </CardBody>

              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Salvar
                </Button>

              </CardFooter>
            </form>
          </Card>
        )}
      />
    </div>
  );
}

export default MovimentacaoForm;
