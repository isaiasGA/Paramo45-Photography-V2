import React, {useState} from 'react';


const Newsletter = () => {

  const [formState, setFormState] = useState({
    name: '',
    lastName: '',
    email: ''
  });

const inputChange = event => {
  const formValues = {
    ...formState,
    [event.target.name]: event.target.value
  }
  setFormState(formValues)
}

  return (
    <div>
      <form>
        <label>
          <input 
            id='name'
            name='name'
            type='text'
            value={formState.name}
            onChange={inputChange}
            placeholder='Name'
            autoComplete='off'
          />
        </label>
        <label>
          <input 
            id='lastName'
            name='lastName'
            type='text'
            value={formState.lastName}
            onChange={inputChange}
            placeholder='Last Name'
            autoComplete='off'
          /> 
        </label>
        <label>
          <input 
            id='email'
            name='email'
            type='email'
            value={formState.email}
            onChange={inputChange}
            placeholder='Email'
            autoComplete='off'
          />
        </label>
      </form>
    </div>
  );
}

export default Newsletter;