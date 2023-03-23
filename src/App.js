import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import { Button, Glyphicon } from 'react-bootstrap';
import { getElementError } from '@testing-library/react';

export default class App extends Component {
   constructor() {
     super();
     this.state = {
       id: ''
     }
     this.handleClick = this.handleClick.bind(this);

     this.handleClickAddress = this.handleClickAddress.bind(this);

  }

   handleClick() {
     axios.get('https://api.github.com/users/maecapozzi')
       .then(response =>this.setState({id:response.data.id}))
   }

   handleClickAddress() {
   window.location.href=document.getElementById("address").value;
  }


  render() {
    return (
      <div className='button_container'>
        <button className='button' onClick={this.handleClick}>
          push me
        </button>
         <p className='id'>{this.state.id}</p>

        <button className='button' onClick={this.handleClickAddress}>
          To Adress
        </button>
         <input id='address' defaultValue='https://' type="Text"></input>

      </div>
    )
  }
}