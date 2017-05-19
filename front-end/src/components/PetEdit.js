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

export default class PetEdit extends React.Component {
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
                  <h3>Editar Pet</h3>
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
                    <FormGroup controlId='inlineinputgroupaname'>
                      <Col sm={3} componentClass={ControlLabel}>Nome</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-guidedog' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Nome do Pet' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupespecie'>
                      <Col sm={3} componentClass={ControlLabel}>Especie</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-tag-4' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Espécie do Pet' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupraca'>
                      <Col sm={3} componentClass={ControlLabel}>Raça</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-tag-4' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Raça do Pet' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupidade'>
                      <Col sm={3} componentClass={ControlLabel}>Idade</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-tag-4' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Idade do Pet' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgrouppeso'>
                      <Col sm={3} componentClass={ControlLabel}>Peso</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-tag-4' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Peso do Pet' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>                        
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupuserpet'>
                      <Col sm={3} componentClass={ControlLabel}>Usuário Vinculado</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-tag-4' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Usuário Vinculo ao Pet' className='inline' />
                          <HelpBlock className='inline'></HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                     <FormGroup controlId='textareahorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>Observações</Col>
                      <Col sm={9}>
                        <FormControl componentClass='textarea' rows='3' placeholder='Observações do Pet...' />
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
                    <Button outlined bsStyle='white' href='/allPets'>cancelar</Button>{' '}
                    <Button outlined bsStyle='white'>Editar</Button>
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
	