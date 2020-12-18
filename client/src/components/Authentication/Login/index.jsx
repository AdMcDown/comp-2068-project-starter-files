import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Login here to make and edit your wishlist!">
        <p>
          Lets login and make some wishlists!
        </p>
      </Header>
      
      <Container>
        
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;