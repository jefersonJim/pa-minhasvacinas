import React from 'react';
import ReactDOM from 'react-dom';

import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  Button,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class VacinaDatatableComponent extends React.Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  }

  render() {
    return (
      <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Deletar</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Deletar</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Antirrabica</td>
            <td>Previne a Raiva em Animais</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>H1N7</td>
            <td>Previne Doença em Aves</td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='success'>Editar</Button></td>
            <td><Button xs outlined style={{marginBottom: 5}} bsStyle='danger'>Deletar</Button></td>
            <td></td>
            <td></td>
          </tr>
       </tbody>
      </Table>
    );
  }
}

