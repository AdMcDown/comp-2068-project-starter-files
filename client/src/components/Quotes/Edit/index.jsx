import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const Edit = ({ preload }) => {
    return (
        <>
            <Header title="Quotes">
                Hi I'm an edited child
            </Header>

            <Container>
                <Form endpoint="quotes/update" preload={preload} />
            </Container>

        </>
    );
}

export default Edit;