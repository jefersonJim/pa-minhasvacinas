import React from 'react';

import Pet from '../components/Pet';
import PetForm from '../components/PetForm';


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

export default class allPetsCreate extends React.Component {
  

  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, paddingBottom: 25}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Crie e Gerêncie seus Pets</h3>
                 
                  

                  <PetForm  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
