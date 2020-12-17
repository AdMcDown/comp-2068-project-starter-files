import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
    return (
        <div>
            <Header title="Wishs">
                Enter your wish details in the boxes provided!
            </Header>

            <Container>
                <Form endpoint="wishs" />
            </Container>

        </div>
    );
}

export default New;