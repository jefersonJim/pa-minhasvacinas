import React from 'react';

import Dashboard01 from '../components/Dashboard01';

import {
  Row,
  Tab,
  Col,
  Nav,
  Icon,
  Grid,
  Form,
  Table,
  Label,
  Panel,
  Button,
  NavItem,
  Checkbox,
  Progress,
  PanelBody,
  FormGroup,
  PanelLeft,
  isBrowser,
  InputGroup,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  FormControl,
  PanelContainer,
  PanelTabContainer,
} from '@sketchpixy/rubix';


export default class Home extends React.Component {
  
  render() {
    
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, paddingBottom: 25}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Bem Vindo ao Minhas Vacinas</h3>

                  

                  <Dashboard01  />

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

