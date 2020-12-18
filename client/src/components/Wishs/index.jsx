import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
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
          <table>
            <thead>
              <tr id="titles">
                <th>My Wish</th>
                <th>Creator</th>
                <th>Price</th>
                <th>WebLink</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {wishs.map((wish, i) => (
                <tr key={i}>
                  <td id="item">
                    {wish.item}
                  </td>

                  <td id="creator">
                    {wish.creator}
                  </td>

                  <td id="price">
                    ${wish.price}
                  </td>

                  <td id="weblink">
                    <a href={wish.websiteLink} target="_blank">Buy</a>
                  </td>

                  <td id="description">
                    {wish.description}
                  </td>
                  {user && user.token ? (
                    <td id="link-color">
                      <Link to={`/wishs/edit/${wish._id}`}>
                        edit
                    </Link>
                    &nbsp;|&nbsp;
                      <Link to={`/wishs/destroy/${wish._id}`}>
                        delete
                    </Link>
                    </td>
                  ) : (
                      <td>You must login for this feature</td>
                    )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </Container>
    </>
  );
}

export default Wishs;