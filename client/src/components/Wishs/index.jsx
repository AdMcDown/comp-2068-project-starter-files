import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wishs = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);

  const [wishs, setWishs] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/wishs`)
      .then(({ data }) => {
        setWishs(data);
      })
      .catch(error => {
        setNotification({
          type: "danger",
          message: `There was an error retrieving your wishs: ${error.message}`
        });
      });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Wishs" />

      <Container>
        {wishs && wishs.length > 0 ? (
          wishs.map((wish, i) => (
            <>
              <blockquote>
                {wish.item}: "{wish.description}" ~ {wish.creator}
              </blockquote>

              {user && user.token ? (
                <Link to={`/wishs/edit/${wish._id}`}>...edit...</Link>
              ) : null}

            </>
          ))
        ) : null}
      </Container>
    </>
  );
}

export default Wishs;