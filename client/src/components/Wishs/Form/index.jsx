import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const WishForm = ({ endpoint, preload }) => {
    console.log(preload);
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);
    const { setNotification } = useContext(NotificationContext);
    const { user } = useContext(UserContext);
    const { globalStore } = useContext(GlobalStoreContext);

    useEffect(() => {
        setInputs({ ...preload });
    }, [preload]);

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
                        message: "Your wish was updated successfully"
                    });
                }

                setRedirect(true);
            })
            .catch((error) => {
                if (!inputs.item) {
                    setNotification({
                        type: "warning",
                        message: "The wish list item field is required!"
                    });
                } else {
                    setNotification({
                        type: "danger",
                        message: `There was an error creating your wish: ${error.message}`
                    });
                }
            });
    };

    if (redirect) return <Redirect to="/wishs" />

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Your Wish:</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    name="item"
                    placeholder="wish list item"
                    defaultValue={inputs.item}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Price:</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    name="new-price"
                    id="new-price"
                    placeholder="enter cost for item"
                    defaultValue={inputs.price}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    name="new-website"
                    id="new-website"
                    placeholder="copy a website link to your item"
                    defaultValue={inputs.websiteLink}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description:</Form.Label>
                <br />
                <textarea
                    onChange={handleChange}
                    name="description"
                    id="new-description"
                    rows={4}
                    placeholder="give a brief description of your wish list item"
                    defaultValue={inputs.description}
                />
            </Form.Group>
            <button type="submit">Add to Wish List</button>
        </Form>
    );
}

export default WishForm;