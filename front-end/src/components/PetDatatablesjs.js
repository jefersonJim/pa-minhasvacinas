import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Pet from './Pet'

import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  PanelBody,
  Button,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class PetDatatableComponent extends React.Component {

  constructor(props){
    console.log("CONSTRUTOR");
    super(props);
    this.state = {petlist: []};    
  }


  componentDidMount() {
    //console.log(self);
    axios.get('http://localhost:8081/wsminhasvacinas/api/pet').then(function(response){
        console.log(response.data);
        this.setState({
        petlist: response.data,
      });
    });

    $(ReactDOM.findDOMNode(this.petlist))
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  }

  render() {
    console.log("")
    return (
      <Table ref={(c) => this.petlist = c} className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Peso em Kg</th>
            <th>Usuario Vinculo</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Peso em Kg</th>
            <th>Usuário Vinculo</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Manoel Tobias</td>
            <td>Cão</td>
            <td>Beagle</td>
            <td>12</td>
            <td>16</td>
            <td>Yuri Faheina</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Bruce</td>
            <td>Cão</td>
            <td>Terrier</td>
            <td>07</td>
            <td>12</td>
            <td>Roberto Evangelista</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success' href='/AllPetsEdit'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Mauricio</td>
            <td>Gato</td>
            <td>Mesclado</td>
            <td>07</td>
            <td>08</td>
            <td>Ashton Cox</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Princesa</td>
            <td>Cão</td>
            <td>Husky Siberiano</td>
            <td>12</td>
            <td>23</td>
            <td>Germania Chaves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Maria Augusta</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>33</td>
            <td>03</td>
            <td>Airi Satou</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>Roedor</td>
            <td>Ramster</td>
            <td>05</td>
            <td>01</td>
            <td>Brielle Williamson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Herrod</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>59</td>
            <td>02</td>
            <td>Herrod Chandler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linda</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>12</td>
            <td>7</td>
            <td>Rhona Davidson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Manoel Tobias</td>
            <td>Cão</td>
            <td>Beagle</td>
            <td>12</td>
            <td>16</td>
            <td>Yuri Faheina</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Boby</td>
            <td>Cão</td>
            <td>Poodle</td>
            <td>07</td>
            <td>12</td>
            <td>Roberto Evangelista</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Mauricio</td>
            <td>Gato</td>
            <td>Mesclado</td>
            <td>07</td>
            <td>08</td>
            <td>Ashton Cox</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Princesa</td>
            <td>Cão</td>
            <td>Husky Siberiano</td>
            <td>12</td>
            <td>23</td>
            <td>Germania Chaves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Maria Augusta</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>33</td>
            <td>03</td>
            <td>Airi Satou</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>Roedor</td>
            <td>Ramster</td>
            <td>05</td>
            <td>01</td>
            <td>Brielle Williamson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Herrod</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>59</td>
            <td>02</td>
            <td>Herrod Chandler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linda</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>12</td>
            <td>7</td>
            <td>Rhona Davidson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Manoel Tobias</td>
            <td>Cão</td>
            <td>Beagle</td>
            <td>12</td>
            <td>16</td>
            <td>Yuri Faheina</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Jonnh Lennon</td>
            <td>Cão</td>
            <td>Pittbull</td>
            <td>07</td>
            <td>12</td>
            <td>Roberto Ferreira</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Mauricio</td>
            <td>Gato</td>
            <td>Mesclado</td>
            <td>07</td>
            <td>08</td>
            <td>Ashton Cox</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Princesa</td>
            <td>Cão</td>
            <td>Husky Siberiano</td>
            <td>12</td>
            <td>23</td>
            <td>Germania Chaves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Maria Augusta</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>33</td>
            <td>03</td>
            <td>Airi Satou</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>Roedor</td>
            <td>Ramster</td>
            <td>05</td>
            <td>01</td>
            <td>Brielle Williamson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Herrod</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>59</td>
            <td>02</td>
            <td>Herrod Chandler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linda</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>12</td>
            <td>7</td>
            <td>Rhona Davidson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Manoel Tobias</td>
            <td>Cão</td>
            <td>Beagle</td>
            <td>12</td>
            <td>16</td>
            <td>Yuri Faheina</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Pingo</td>
            <td>Cão</td>
            <td>Pug</td>
            <td>07</td>
            <td>12</td>
            <td>Italo Evangelista</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Mauricio</td>
            <td>Gato</td>
            <td>Mesclado</td>
            <td>07</td>
            <td>08</td>
            <td>Ashton Cox</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Princesa</td>
            <td>Cão</td>
            <td>Husky Siberiano</td>
            <td>12</td>
            <td>23</td>
            <td>Germania Chaves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Maria Augusta</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>33</td>
            <td>03</td>
            <td>Airi Satou</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>Roedor</td>
            <td>Ramster</td>
            <td>05</td>
            <td>01</td>
            <td>Brielle Williamson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Herrod</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>59</td>
            <td>02</td>
            <td>Herrod Chandler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linda</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>12</td>
            <td>7</td>
            <td>Rhona Davidson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Manoel Tobias</td>
            <td>Cão</td>
            <td>Beagle</td>
            <td>12</td>
            <td>16</td>
            <td>Yuri Faheina</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Pluto</td>
            <td>Cão</td>
            <td>Poodle</td>
            <td>07</td>
            <td>12</td>
            <td>Roberto Carlos</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Mauricio</td>
            <td>Gato</td>
            <td>Mesclado</td>
            <td>07</td>
            <td>08</td>
            <td>Ashton Cox</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Princesa</td>
            <td>Cão</td>
            <td>Husky Siberiano</td>
            <td>12</td>
            <td>23</td>
            <td>Germania Chaves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Maria Augusta</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>33</td>
            <td>03</td>
            <td>Airi Satou</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>Roedor</td>
            <td>Ramster</td>
            <td>05</td>
            <td>01</td>
            <td>Brielle Williamson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Herrod</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>59</td>
            <td>02</td>
            <td>Herrod Chandler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linda</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>12</td>
            <td>7</td>
            <td>Rhona Davidson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Manoel Tobias</td>
            <td>Cão</td>
            <td>Beagle</td>
            <td>12</td>
            <td>16</td>
            <td>Yuri Faheina</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Bandit</td>
            <td>Cão</td>
            <td>Poodle</td>
            <td>04</td>
            <td>08</td>
            <td>Cassio Lima</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Mauricio</td>
            <td>Gato</td>
            <td>Mesclado</td>
            <td>07</td>
            <td>08</td>
            <td>Ashton Cox</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Princesa</td>
            <td>Cão</td>
            <td>Husky Siberiano</td>
            <td>12</td>
            <td>23</td>
            <td>Germania Chaves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Maria Augusta</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>33</td>
            <td>03</td>
            <td>Airi Satou</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>Roedor</td>
            <td>Ramster</td>
            <td>05</td>
            <td>01</td>
            <td>Brielle Williamson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Herrod</td>
            <td>Passaro</td>
            <td>Papagaio</td>
            <td>59</td>
            <td>02</td>
            <td>Herrod Chandler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linda</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>12</td>
            <td>7</td>
            <td>Rhona Davidson</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Linguissa</td>
            <td>Cão</td>
            <td>Dashshund</td>
            <td>16</td>
            <td>13</td>
            <td>Rosa Mara</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Red Label</td>
            <td>Cão</td>
            <td>Akita</td>
            <td>13</td>
            <td>22</td>
            <td>Jennifer Acosta</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Tsunami</td>
            <td>Cão</td>
            <td>Labrador</td>
            <td>16</td>
            <td>22</td>
            <td>Cara Stevens</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Dori</td>
            <td>Gato</td>
            <td>Persa</td>
            <td>17</td>
            <td>11</td>
            <td>Hermione Butler</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Lael Greer</td>
            <td>Cão</td>
            <td>London Terrier</td>
            <td>21</td>
            <td>24</td>
            <td>Almeida Neto</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Chuck Norris</td>
            <td>Cão</td>
            <td>Pastor Alemão</td>
            <td>19</td>
            <td>23</td>
            <td>Michael Bruce</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Charles Bronson</td>
            <td>Cão</td>
            <td>Poodle</td>
            <td>17</td>
            <td>11</td>
            <td>Donna Snider</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Chuck Norris</td>
            <td>Cão</td>
            <td>Pastor Alemão</td>
            <td>19</td>
            <td>23</td>
            <td>Michael Bruce</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          <tr>
            <td>Stalone</td>
            <td>Cão</td>
            <td>Poodle</td>
            <td>17</td>
            <td>11</td>
            <td>Donna Summer</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
          </tr>
          </tbody>
      </Table>
    );
  }
}

