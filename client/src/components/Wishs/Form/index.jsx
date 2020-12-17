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
                setNotification({
                    type: "danger",
                    message: `There was an error creating your wish: ${error.message}`
                });
            });
    };

    if (redirect) return <Redirect to="/wishs" />

    return (
        <Form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                name="item"
                placeholder="wish list item"
                defaultValue={inputs.item}
            />
            <input
                onChange={handleChange}
                name="price"
                placeholder="enter cost for item"
                defaultValue={inputs.price}
            />
            <textarea
                onChange={handleChange}
                name="description"
                rows={3}
                placeholder="give a brief description of your wish list item"
                defaultValue={inputs.description}
            />
            <button type="submit">Add to Wish List</button>
        </Form>
    );
}

export default WishForm;