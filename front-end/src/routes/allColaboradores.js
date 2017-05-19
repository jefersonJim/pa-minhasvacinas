import React from 'react';

import Colaborador from '../components/Colaborador';
import ColaboradorForm from '../components/ColaboradorForm';
import ColaboradorDatatablesjs from '../components/ColaboradorDatatablesjs';

import {
  Row,
  Col,
  Button,
  Grid,
  Panel,
  Alert,
  PanelBody,
  PanelContainer,
  ButtonGroup,
  ButtonToolbar,

} from '@sketchpixy/rubix';

export default class allColaboradores extends React.Component {
  

  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, paddingBottom: 25}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Lista de Colaboradores: <h3></h3><Button outlined style={{marginBottom: 5,}} bsStyle='primary' href='/allColaboradoresCreate'>Cadastrar Colaborador</Button></h3>
                 
                  
                  
                  <ColaboradorDatatablesjs  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
