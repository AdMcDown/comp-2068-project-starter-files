import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Make your wishes a reality!">
        <p>
          Head on over to the <a href="http://localhost:3000/wishs">Wishs</a> page to begin making your wishlist!
        </p>

        <p>
          The best way to find out just what the special people in your life are wanting for the holidays!
        </p>
      </Header>

      <Container>
        <hr/>

        <p>
          Created by:<br></br>Adam McNown 200427796<br></br>Luke Murdock 200304037
        </p>

        <p>All that copyright junk here i guess?</p>
      </Container>
    </>
  );
}
 
export default Home;