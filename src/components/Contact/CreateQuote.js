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
        <h4>Want to work with us ?</h4>
        <p>Complete this form and attach the drawing, we will get back to you in 24 hours.  </p>
        <div>
          <label  className="form_label"  htmlFor="name">Name</label>
          <input  value={formState.name} onChange={(e) => 
                setFormState({...formState,name: e.target.value})}
            placeholder="Type your name"  className="form_input form_shadow" type="text" id="name"
          />
          <label  className="form_label"  htmlFor="phone">Phone</label>
          <input  value={formState.phone} onChange={(e) => 
                setFormState({...formState,phone: e.target.value})}
            placeholder="Type your phone number"  className="form_input form_shadow" type="text" id="phone"
          />
          <label  className="form_label"  htmlFor="company">Company</label>
          <input  value={formState.company} onChange={(e) => 
                setFormState({...formState,company: e.target.value})}
            placeholder="Name of the company"  className="form_input form_shadow" type="text" id="company"
          />
           <label  className="form_label"  htmlFor="email">Email</label>
          <input  value={formState.email} onChange={(e) => 
                setFormState({...formState,email: e.target.value})}
            placeholder="Type your email"  className="form_input form_shadow" type="text" id="email"
          />



          <label  className="form_label"  htmlFor="message">Message</label>
          <textarea  value={formState.message} onChange={(e) => 
                setFormState({...formState,message: e.target.value})}
            placeholder="Type your message"  className="form_textarea form_shadow"  
            rows="4" cols="80" type="text" id="message"
          ></textarea>
          
          

        </div>
        <button className="button form_button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateQuote;