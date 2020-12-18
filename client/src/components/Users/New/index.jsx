import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="Register Here for your own wishlist!">
        <p>
          Please fill out the boxes below!
        </p>
      </Header>
      
      <Container>
        <p>
          If you don't fill the boxes out correctly you may not get the right gifts!
        </p>

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;