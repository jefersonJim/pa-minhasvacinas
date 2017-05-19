import React from 'react';

import Pet from '../components/Pet';
import PetForm from '../components/PetForm';
import PetDatatableComponent from '../components/PetDatatablesjs';

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

export default class allPets extends React.Component {
  

  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, paddingBottom: 25}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Lista de Pets: <h3></h3><Button outlined style={{marginBottom: 5,}} bsStyle='primary' href='/allPetsCreate'>Cadastrar Pet</Button></h3>
                 
                  <PetDatatableComponent  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
