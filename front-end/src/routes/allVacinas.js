import React from 'react';

import Vacina from '../components/Vacina';
import VacinaForm from '../components/VacinaForm';
import VacinaDatatablesjs from '../components/VacinaDatatablesjs';

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

export default class allVacinas extends React.Component {
  

  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, paddingBottom: 25}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Lista de Vacinas: <h3></h3><Button outlined style={{marginBottom: 5,}} bsStyle='primary' href='/allVacinasCreate'>Cadastrar Vacina</Button></h3>

                  

                  <VacinaDatatablesjs  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
