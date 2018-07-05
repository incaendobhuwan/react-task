import React from 'react';

export default class Label extends React.Component {
  render() {
    return (
      <div className='data-lebal'>
        <i className={this.props.icon} /> {this.props.name}
      </div>
    );
  };
}
