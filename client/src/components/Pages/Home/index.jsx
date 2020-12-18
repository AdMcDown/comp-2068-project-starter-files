import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
  return (
    <>
      <Header title="Make your wishes a reality!">
        <p>
          Head on over to the <Link to={`/wishs`}>Wishs</Link> page to begin making your wishlist!
        </p>

        <p>
          The best way to find out just what the special people in your life are wanting for the holidays!
        </p>
      </Header>
      <div id="center">
        <iframe src="https://giphy.com/embed/oyMKeyifOotaw" width="480" height="270" frameBorder="0" class="giphy-embed" title="holidays" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/christmas-parks-and-recreation-oyMKeyifOotaw">holidays</a></p>
      </div>
      <Container>
        <hr />

        <p>
          Created by:<br></br>Adam McNown 200427796<br></br>Luke Murdock 200304037
        </p>

        <p>All that copyright junk here i guess?</p>
      </Container>
    </>
  );
}

export default Home;