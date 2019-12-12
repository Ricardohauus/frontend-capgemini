import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  numConta: Yup.string()
    .required("Por favor, Informe uma Conta")
    .min(3, "A Conta deve conter no mínimo 3 caracteres")
    .max(15, "A Conta deve conter no máximo 15 caracteres"),
  tipoMov: Yup.string()
    .required("Por favor, Selecione uma Tipo de Movimentação")
    .nullable("Por favor, Selecione uma Tipo de Movimentação"),
  valor: Yup.number()
    .required("Por favor, Informe um valor")
    .min(5, "Você só pode depositar no minimo 5 reais")
    .max(5000, "Você só pode depositar no máximo 5.000,00 mil reais")
});

export default FormSchema;
