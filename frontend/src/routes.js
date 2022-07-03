import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import CadUsers from './pages/Cadastrar';
import CadEmpresas from './pages/CadEmpresas';
import ListarEmpresas from './pages/ListarEmpresas';
//import Profile from './pages/Profile';
//import NewIncident from './pages/NewIncident';<Route path="/register" component={Register} />
     //   <Route path="/profile" component={Profile} />
       // <Route path="/incidents/new" component={NewIncident} />


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastrar" component={CadUsers} />
        <Route path="/empresas" component={CadEmpresas} />
        <Route path="/listar-empresas" exact component={ListarEmpresas} />
      
      </Switch>
    </BrowserRouter>
  );
}