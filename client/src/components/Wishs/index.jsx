import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css'

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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th id="test">My Wish</th>
                <th id="test">Creator</th>
                <th id="test">Description</th>
                <th id="test">Action</th>
              </tr>
            </thead>

            <tbody>
              {wishs.map((wish, i) => (
                <tr key={i}>
                  <td>
                    {wish.item}
                  </td>

                  <td>
                    {wish.creator}
                  </td>

                  <td>
                    {wish.description}
                  </td>

                  <td id ="link-color">
                    <Link to={`/wishs/edit/${wish._id}`}>
                      edit
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to={`/wishs/destroy/${wish._id}`}>
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Container>
    </>
  );
}

export default Wishs;