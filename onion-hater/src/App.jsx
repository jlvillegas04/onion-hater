import React from 'react';
import './App.css';

class OnionHater extends React.Component {
  handleChange = (event) => {
    const text = event.target.value;
    if (text.includes('cebolla')) {
      alert('ODIO LA CEBOLLA');
    }
  };

  render() {
    return (
      <textarea onChange={this.handleChange} placeholder="Escribe algo..." />
    );
  }
}

export default OnionHater;
