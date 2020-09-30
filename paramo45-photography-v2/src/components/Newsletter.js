import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import fire from  '../api/firebase';

import NewsletterModal from './NewsletterModal';

const formValidation = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  lastName: yup.string().required('Last name is a required field'),
  email: yup.string().required('Please provide an email')
});

function Newsletter() {

  const [formState, setFormState] = useState({
    name: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: ''
  });

  const [modalOpen, setModalOpen] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formValidation.isValid(formState)
    .then(valid => {
      setButtonDisabled(!valid)
    });
  }, [formState]);

  const inputCheck = event => {
    yup
    .reach(formValidation, event.target.name)
    .validate(event.target.value)
    .then(() => {
      setErrors({
        ...errors, [event.target.value]: ''
      });
    })
    .catch(error => {
      setErrors({
        ...errors,
        [event.target.name]: error.errors[0]
      })
    })
  };

const inputChange = event => {
  event.persist();
  const formValues = {
    ...formState,
    [event.target.name]: event.target.value
  };
  inputCheck(event);
  setFormState(formValues)
}

const submitForm = event => {
  event.preventDefault();

  fire.firestore().collection('Newsletter').add({
    name: formState.name,
    lastName: formState.lastName,
    email: formState.email
  });
  setFormState({
    name: '',
    lastName: '',
    email: ''
  })

  setModalOpen(true);
}

  return (
    <>
      <NewsletterModal 
        key='modal'
        modalOpen={modalOpen}
        modalClose={!modalOpen}
      />
      <div className='newsletter'>
        <div className='newsletterHeader'>
          <h1>Newsletter</h1>
          <h3>Subscribe to my newsletter to get notified when I upload new Photos!</h3>
        </div>
        <form onSubmit={submitForm}>
          <label htmlFor='name'>
            Name:
            <input 
              id='name'
              name='name'
              type='text'
              value={formState.name}
              onChange={inputChange}
              placeholder='Name'
              autoComplete='off'
            />
            {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
          </label>
          <label htmlFor='lastName'>
            Last Name:
            <input 
              id='lastName'
              name='lastName'
              type='text'
              value={formState.lastName}
              onChange={inputChange}
              placeholder='Last Name'
              autoComplete='off'
            /> 
            {errors.name.length > 0 ? <p className='error'>{errors.lastName}</p> : null}
          </label>
          <label htmlFor='email'>
            Email:
            <input 
              id='email'
              name='email'
              type='email'
              value={formState.email}
              onChange={inputChange}
              placeholder='Email'
              autoComplete='off'
            />
            {errors.name.length > 0 ? <p className='error'>{errors.email}</p> : null}
          </label>
          <button disabled={buttonDisabled}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;