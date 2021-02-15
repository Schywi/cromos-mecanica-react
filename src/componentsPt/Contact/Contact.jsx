import React from 'react';


import { withFormik, Form, Field } from 'formik';

const api = "null";
const MyFormWithFormik = withFormik({
  mapPropsToValues: () => ({ 
    email: '',
    password: '',
    address: {
      /* outros campos */ 
      city: { 
        name: '',
        /* outros campos */
      }
    }
  }),
  handleSubmit: values => {
    /**
     * o values seria todos os valores do mapeados no  mapValuesToProps,
     * o segundo parametro são os métodos do formik, muito úteis
     * Antes de rodar o handleSubmit, o formik já roda o método de
     * validação dos dados, que posso escrever um novo artigo sobre
    **/
    api.post(values)
  }
})
const Form2 = () => (
  <Form className="form" id="Contact"> 
    <h4>Deseja trabalhar conosco ?</h4>
    <p> Preencha este formulário e anexe o desenho ou amostra, entraremos em contato com você em 24 horas.   </p>
    <label  className="form_label"  htmlFor="name">Nome</label>
    <input className="form_input form_shadow" type="text" id="name"/>
    <label className="form_label"  htmlFor="email">Email</label>
    <input className="form_input form_shadow"  type="text" id="email"/>
    <label  className="form_label" htmlFor="message">Mensagem</label>
    <textarea className="form_textarea form_shadow" type="text" id="message" rows="4" cols="80"></textarea>
    <label htmlFor="myfile"  className="form_label" >Selecione os arquivos, apenas pdf:</label>
    <input type="file" className="form_upload"  id="myfile" name="myfile" multiple accept="application/pdf"/>
    <button className="button form_button">Enviar</button>
     
  </Form>
)
export default MyFormWithFormik(Form2)