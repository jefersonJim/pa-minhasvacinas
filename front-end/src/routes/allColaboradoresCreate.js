import React from 'react';

import Colaborador from '../components/Colaborador';
import ColaboradorForm from '../components/ColaboradorForm';

import {
  Row,
  Col,
  Grid,
  Panel,
  Alert,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class allColaboradoresCreate extends React.Component {
  

  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, paddingBottom: 25}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Colaboradores</h3>

                  

                  <ColaboradorForm  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
