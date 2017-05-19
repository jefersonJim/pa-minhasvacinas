import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

import Footer from './common/footer';
import Header from './common/header';
import Sidebar from './common/sidebar';
 
import Home from './routes/home';
import allPets from './routes/allPets';
import allPetsCreate from './routes/allPetsCreate';
import allPetsEdit from './routes/allPetsEdit';
import allCalendario from './routes/allCalendario';
import allColaboradores from './routes/allColaboradores';
import allColaboradoresCreate from './routes//allColaboradoresCreate';
import allVacinas from './routes/allVacinas';
import allVacinasCreate from './routes/allVacinasCreate';
import Login from './routes/Login';
import Signup from './routes/Signup';
import SignupCnpj from './routes/SignupCnpj';


class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <Route path='/home' component={Home} />
    <Route path='/allCalendario' component={allCalendario} />
    <Route path='/allVacinas' component={allVacinas} />
    <Route path='/allVacinasCreate' component={allVacinasCreate} />
    <Route path='/allPets' component={allPets} />
    <Route path='/allPetsCreate' component={allPetsCreate} />
    <Route path='/allPetsEdit' component={allPetsEdit} />
    <Route path='/allColaboradores' component={allColaboradores} />
    <Route path='/allColaboradoresCreate' component={allColaboradoresCreate} />
  </Route>
);

const basicRoutes = (
  <Route>
    <IndexRoute path='login' component={Login} />
    <Route path='signup' component={Signup} />
    <Route path='SignupCnpj' component={SignupCnpj} />
      </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
    <Route>
      {basicRoutes}
    </Route>
  </Route>
);

export default (
  <Route>
    <Route path='/' component={Login} />

    <Route path='/ltr'>
      {combinedRoutes}
    </Route>
    <Route path='/rtl'>
      {combinedRoutes}
    </Route>
  </Route>
);