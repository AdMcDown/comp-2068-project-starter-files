import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
    return (
        <>
            <Header title="Wishs">
                Hi I'm a child
            </Header>

            <Container>
                <Form endpoint="wishs" />
            </Container>

        </>
    );
}

export default New;