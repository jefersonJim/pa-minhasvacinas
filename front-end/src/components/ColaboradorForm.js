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

export default class ColaboradorForm extends React.Component {
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
                  <h3>Cadastro de Colaborador</h3>
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
                    <FormGroup controlId='inlineinputgroupnomecol'>
                      <Col sm={3} componentClass={ControlLabel}>Nome</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-user-8' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Nome do Colaborador' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupemailcol'>
                      <Col sm={3} componentClass={ControlLabel}>E-mail</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-mail-7' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='E-mail do Colaborador' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupsenhacol'>
                      <Col sm={3} componentClass={ControlLabel}>Senha</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-key' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Senha do Colaborador' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupenderecocol'>
                      <Col sm={3} componentClass={ControlLabel}>Endereço</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-location-6' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Endereço do Colaborador' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupfonecol'>
                      <Col sm={3} componentClass={ControlLabel}>Fone</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-phone' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Fone do Colaborador' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupcpfcol'>
                      <Col sm={3} componentClass={ControlLabel}>CPF</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-stroke-gap-icons-Time' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='CPF do Colaborador' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                      <FormGroup controlId='textareahorizontalcol'>
                      <Col sm={3} componentClass={ControlLabel}>Observações</Col>
                      <Col sm={9}>
                        <FormControl componentClass='textarea' rows='3' placeholder='Observações do Colaborador...' />
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
	