import { useState } from 'react';
import {styled} from 'styled-components'; // To use installed file style-components
import Button from './Button.jsx';
import Input from './input.jsx';

//div ni css ne inline method ma use karva but easily.
 
const Control = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;
`



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <Control>
        

          <Input
            type="email"
            label= "email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
      
        
          
          <Input
            type="password"
            label = "password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      
      </Control>
      <div className="actions">
        <Button type="button" className="text-button">
          Create a new account
        </Button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
