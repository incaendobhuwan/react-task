import React from 'react';
export default class Action extends React.Component {
  handleClick(type){
    this.props.getUpdate(this.props.label,type);
  }
  render() {
    return (
      <div className='data-action'>
        <button className='btn btn-color-blue' disabled={ this.props.range[0] == this.props.value ? true:false } onClick={()=>this.handleClick(-1)}><i className="fa fa-minus"></i> </button>
        {this.props.value}
        <button className='btn btn-color-red' disabled={this.props.range[1] == this.props.value ? true:false} onClick={()=>this.handleClick(1)}> <i className="fa fa-plus"></i></button>
      </div>
    );
  }
}
