## CRIAR CAMPOS DO FORMULÁRIO PADRÃO PARA O SISTEMA

       <FormGroup row>
                <Col lg="1" md="12" sm="12">
                  <Label htmlFor=""className="lblColor" ></Label>
                </Col>

                <Col lg="5" md="12" sm="12">
                  <Input
                    onChange={handleChange}
                    value={values.}
                    type=""
                    id=""
                    name=""
                    invalid={errors.}
                  />
                  <FormFeedback><h6>{errors.}<h6></FormFeedback>
                </Col>

                 <Col lg="1" md="12" sm="12">
                  <Label htmlFor=""className="lblColor" ></Label>
                </Col>

                <Col lg="5" md="12" sm="12">
                  <Select
                    id=""
                    placeholder="::Selecione::"
                    isClearable
                    isOptionSelected
                    isSearchable
                    options={}
                    onChange={value => setFieldValue("", value)}
                    value={values.}
                    noOptionsMessage={() => ""}
                  />
                  <FormText color="danger">
                    <h6>{errors.}</h6>
                  </FormText>
                </Col>
              </FormGroup>

## CRIAR FORMULÁRIO PADRÃO

    <div className="animated fadeIn">

  <Row>
    <Col xs="12" md="12">
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>CABEÇALHO</CardHeader>

          <CardBody>

          </CardBody>

          <CardFooter>
            <Button type="submit" size="sm" color="primary">
              <i className="fa fa-dot-circle-o" /> Salvar
            </Button>
            <Button type="reset" size="sm" color="danger">
              <i className="fa fa-ban" /> Reset
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </Col>

  </Row>
 </div>;
