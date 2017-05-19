import React from 'react';
import ReactDOM from 'react-dom';

import {
  Nav,
  Icon,
  Panel,
  Radio,
  MenuItem,
  HelpBlock,
  PanelBody,
  InputGroup,
  SplitButton,
  PanelHeader,
  ButtonGroup,
  PanelFooter,
  ControlLabel,
  DropdownButton,
  PanelContainer,
  Row,
  Col,
  Grid,
  Form,
  Button,
  Checkbox,
  FormGroup,
  FormControl } from '@sketchpixy/rubix';

export default class VacinaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-darkblue fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Cadastro de Vacinas</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form horizontal>
                    <div></div>
                    <FormGroup controlId='inlineinputgroupnomevacina'>
                      <Col sm={3} componentClass={ControlLabel}>Nome</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-stroke-gap-icons-Seringe' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Nome da Vacina' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='textareahorizontalvacina'>
                      <Col sm={3} componentClass={ControlLabel}>Descrição</Col>
                      <Col sm={9}>
                        <FormControl componentClass='textarea' rows='3' placeholder='Descrição da Vacina...' />
                      </Col>
                    </FormGroup>
                    </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-blue text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='white'>cancelar</Button>{' '}
                    <Button outlined bsStyle='white'>cadastrar</Button>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
       );
  }
}
	