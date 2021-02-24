import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router';
// Use at least Nodemailer v4.1.0



// send form to database
const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $name: String!
    $phone: String!
    $company: String!
    $email: String!
    $message: String!
   


  ) {
    post(name: $name, phone: $phone, company: $company, message: $message, email:$email) {
      id
      name
      phone
      company
      email
      message
      
    }
  }
`;







const CreateQuote = () => {

    const history = useHistory();

    const [formState, setFormState] = useState({
        name: '',
        phone: '', 
        company: '',
        email: '',
        message: '',
      
      });
      
    const [createQuote] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
          name: formState.name,
          phone: formState.phone,
          company: formState.company,
          message: formState.message,
          email: formState.email,
        }, 
        onCompleted: () => {
        
          history.push('/');
        }
      });
 
        const cancelCourse = () => { 
          setFormState({
            ...formState,
            name: '',
            phone: '', 
            company: '',
            email: '',
            message: '',
          })
      }

  return (
    <div>
      <form className="form" id="Contact"
        onSubmit={(e) => {
          e.preventDefault();
          createQuote();
     
          cancelCourse();
        }}
      >
        <h4>Deseja trabalhar conosco?</h4>
        <h3>Então faça seu orçamento!</h3>
        <p> Preencha o formulario abaixo e  anexe o desenho Mecanico ou foto, vamos entrar em contato em até 24 horas.         </p>
        <div>
          <label  className="form_label"  htmlFor="name">Nome</label>
          <input  value={formState.name} onChange={(e) => 
                setFormState({...formState,name: e.target.value})}
            placeholder="Digite seu nome"  className="form_input form_shadow" type="text" id="name"
          />
          <label  className="form_label"  htmlFor="phone">Telefone</label>
          <input  value={formState.phone} onChange={(e) => 
                setFormState({...formState,phone: e.target.value})}
            placeholder="Digite seu telefone "  className="form_input form_shadow" type="text" id="phone"
          />
          <label  className="form_label"  htmlFor="company">Empresa</label>
          <input  value={formState.company} onChange={(e) => 
                setFormState({...formState,company: e.target.value})}
            placeholder="Nome da empresa"  className="form_input form_shadow" type="text" id="company"
          />
           <label  className="form_label"  htmlFor="email">Email</label>
          <input  value={formState.email} onChange={(e) => 
                setFormState({...formState,email: e.target.value})}
            placeholder="Digite seu email"  className="form_input form_shadow" type="text" id="email"
          />



          <label  className="form_label"  htmlFor="message">Mensagem</label>
          <textarea  value={formState.message} onChange={(e) => 
                setFormState({...formState,message: e.target.value})}
            placeholder="Escreva a sua mensagem"  className="form_textarea form_shadow"  
            rows="4" cols="80" type="text" id="message"
          ></textarea>
          
          

        </div>
        <button className="button form_button" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CreateQuote;