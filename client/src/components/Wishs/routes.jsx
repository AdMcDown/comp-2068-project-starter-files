import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';

const Routes = () => {
    const { user } = useContext(UserContext);

    return (
        <Switch>
            <Route exact path="/wishs" component={Index} />

            {user && user.token ? (
                <>
                    <Route exact path="/wishs/new" component={New} />
                    <Route exact path="/wishs/edit/:id" component={Edit} />
                    <Route exact path="/wishs/destroy/:id" component={Destroy} />
                </>
            ) : null}
        </Switch>
    );
}

export default Routes;