import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Pet extends React.Component {

    constructor(props) {
    super(props);
    this.state = { };
    }

    cadastrar(){
    axios({
  method: 'post',
  url: 'http://localhost:8081/wsminhasvacinas/api/pet',
  data: {
    namepet: '',
    racapet: ''
  }
  }); 
    }

    alterar(){
    axios({
  method: 'path',
  url: 'http://localhost:8081/wsminhasvacinas/api/pet',
  data: {
    namepet: '',
    racapet: ''
  }
  }); 
    }

    deletar(){
        
    }


    
}