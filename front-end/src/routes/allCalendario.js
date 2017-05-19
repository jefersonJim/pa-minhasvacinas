import React from 'react';

import Calendario from '../components/Calendario';
import CalendarioView from '../components/CalendarioView';

import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  Checkbox,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
  fullCalendar,
} from '@sketchpixy/rubix';

export default class allCalendario extends React.Component {
  

  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Planejamento Minhas Vacinas</h3>

                  

                  <CalendarioView  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
