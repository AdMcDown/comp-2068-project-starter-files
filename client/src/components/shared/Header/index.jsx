import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Header = ({ title, children }) => {
  useEffect(() => {
    document.title = title || 'Default tab title if the title property is falsey.';
  });

  return (
    <Container className="my-3" >
      <header>
        <h1>{title || 'Default header title if the title property is falsey'}</h1>
        {children ? (
          <div id="header-children">
            <hr />
            {children}
          </div>
        ) : null}
      </header>
    </Container>
  );
}

export default Header;