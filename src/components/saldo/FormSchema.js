import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  numConta: Yup.string()
    .required("Por favor, Informe uma Conta")
    .min(3, "A Conta deve conter no mínimo 3 caracteres")
    .max(15, "A Conta deve conter no máximo 15 caracteres")
});

export default FormSchema;
