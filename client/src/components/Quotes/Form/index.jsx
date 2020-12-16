import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';

const QuoteForm = ({ endpoint, preload }) => {
    const [inputs, setInputs] = useState({ ...preload });
    const { setNotification } = useContext(NotificationContext);
    const { user } = useContext(UserContext);
    const { globalStore } = useContext(GlobalStoreContext);

    const { id } = useParams();

    const handleChange = event => {
        event.persist();
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
            ...inputs,
            secret_token: (user && user.token)
        })
            .then(({ data }) => {
                if (data) {
                    setNotification({
                        type: "success",
                        message: "Quote was created successfully"
                    });
                }

                return (<Redirect to="/quotes" />);
            })
            .catch((error) => {
                setNotification({
                    type: "danger",
                    message: `There was an error creating the quote: ${error.message}`
                });
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                name="quote"
                placeholder="quote"
                defaultValue={inputs.quote}
            />
            <input
                onChange={handleChange}
                name="date"
                placeholder="YYYY-MM-DD"
                defaultValue={inputs.date}
            />
            <button type="submit">Submit</button>
        </Form>
    );
}

export default QuoteForm;