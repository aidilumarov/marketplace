import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import Home from './containers/Home/Home';
import PrimarySearchAppBar from './containers/Home/MenuAppBar';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <PrimarySearchAppBar />
                    <Switch>
                        <Route exact path = "/admin" component = {AdminPanel} />
                        <Route exact path = "/" component = {Home} />
                        <Route exact path = "/signin" component={SignIn} />
                        <Route exact path = "/signup" component={SignUp} />
                    </Switch>
                    
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;