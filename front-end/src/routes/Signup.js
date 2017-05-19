import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';

import {
  Row,
  Col,
  Icon,
  Grid,
  Form,
  Badge,
  Radio,
  Checkbox, 
  Panel,
  Button,
  PanelBody,
  FormGroup,
  LoremIpsum,
  InputGroup,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';

@withRouter
export default class Signup extends React.Component {
  back(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.router.goBack();
  }

  componentDidMount() {
    $('html').addClass('authentication');
  }

  componentWillUnmount() {
    $('html').removeClass('authentication');
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div id='auth-container' className='login'>
        <div id='auth-row'>
          <div id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4} xs={10} xsOffset={1} collapseLeft collapseRight>
                  <PanelContainer controls={false}>
                    <Panel>
                      <PanelBody style={{padding: 0}}>
                        <div className='text-center bg-darkblue fg-white'>
                          <h3 style={{margin: 0, padding: 25}}>Entre no Minhas Vacinas</h3>
                        </div>
                        <div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                      <Radio defaultValue='option1' defaultChecked name='radio-options'>
                        Cadastro Pessoa Física
                      </Radio>
                      <Radio defaultValue='option2' type='submit' name='radio-options' onClick='/SignupCnpj' href='/SignupCnpj'>
                        Cadastro Pessoa Juridica
                      </Radio>
                            <Form onSubmit={::this.back}>
                              <FormGroup controlId='username'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Usuário' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='emailaddress'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroup.Addon>
                                  <FormControl type='email' className='border-focus-blue' placeholder='E-mail' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='password'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' className='border-focus-blue' placeholder='Senha' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='password2'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' className='border-focus-blue' placeholder='Confirmar Senha' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='cpf'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' className='border-focus-blue' placeholder='CPF' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={12} collapseLeft collapseRight>
                                      <Button type='submit' outlined lg bsStyle='blue' block onClick={::this.back}>Criar Conta</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                          <div className='bg-hoverblue fg-black50 text-center' style={{padding: 25, paddingTop: 12.5}}>
                            <div style={{marginBottom: 12.5}}>Entre com</div>
                            <Grid>
                              <Row>
                                <Col xs={12} sm={6} smCollapseRight>
                                  <Button block type='submit' id='facebook-btn' lg bsStyle='darkblue' onClick={::this.back}>
                                    <Icon glyph='icon-fontello-facebook' />
                                    <span>Facebook</span>
                                  </Button>
                                  <br className='visible-xs' />
                                </Col>
                                <Col xs={12} sm={6}>
                                  <Button block type='submit' id='twitter-btn' lg bsStyle='darkblue' onClick={::this.back}>
                                    <Icon glyph='icon-fontello-twitter' />
                                    <span>Twitter</span>
                                  </Button>
                                </Col>
                              </Row>
                            </Grid>
                            <div style={{marginTop: 25}}>
                              Já tem uma conta Minhas Vacinas? <Link to={('Login')}>Login</Link>
                            </div>
                          </div>
                        </div>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
