import React from 'react';
import Label from './Label'
import Action from './Action'

export default class HotalDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return (
      <div className='data-field'>
        <Label name={this.props.data.name} icon={this.props.data.icon} />
        <Action value={this.props.data.value} label={this.props.data.name} range={this.props.range} getUpdate={this.props.getUpdate} />
      </div>
    );
  };
}
