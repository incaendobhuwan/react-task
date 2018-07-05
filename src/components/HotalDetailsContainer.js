import React from 'react';
import HotalDetail from './HotalDetail'

export default class HotalDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotalDetails : [
        {name: 'ROOMS', icon: 'fa fa-bed', value: 1},
        {name: 'ADULTS', icon: 'fa fa-user', value: 1},
        {name: 'CHILDREN', icon: 'fa fa-child', value: 0}
      ],
      roomRange : [1,5],
      adultsRange: [1,null],
      childsRange: [0,null],
    }
  }

  componentDidMount(){
    this.setAdultsRange();
    this.setChildRange();
  }

  handleChange(label,type){
    for(let i = 0; i < this.state.hotalDetails.length; i++) {
      if(this.state.hotalDetails[i].name == label){
        this.state.hotalDetails[i].value += type;
        if(type == -1 && this.state.hotalDetails[0].value * 4 < this.state.hotalDetails[1].value + this.state.hotalDetails[2].value){
          this.state.hotalDetails[2].value =  Math.max(0, this.state.hotalDetails[2].value - 4)
          this.state.hotalDetails[1].value =  Math.min(this.state.hotalDetails[i].value * 4 ,this.state.hotalDetails[1].value)
        }
        if(type == 1){
          if(this.state.hotalDetails[1].value + this.state.hotalDetails[2].value < this.state.hotalDetails[0].value){
            this.state.hotalDetails[1].value += 1;
          }
        }
        this.setState({hotalDetails:this.state.hotalDetails});
        this.setAdultsRange();
        this.setChildRange();
      }
    }
  }

  setAdultsRange(){
    let minVal = Math.max(1,this.state.hotalDetails[0].value - this.state.hotalDetails[2].value);
    this.setState({adultsRange: [minVal,this.state.hotalDetails[0].value*4 - this.state.hotalDetails[2].value]})
  }

  setChildRange(){
    let minVal = Math.max(0,this.state.hotalDetails[0].value - this.state.hotalDetails[1].value);
    this.setState({childsRange: [minVal,this.state.hotalDetails[0].value*4 - this.state.hotalDetails[1].value]})
  }

  render(){
    return (
      <div className='container'>
        <p> <i className="fa fa-users"> </i> Choose number of <b> people </b> </p>
        <div className='data-box'>
          <HotalDetail  data={this.state.hotalDetails[0]} range={this.state.roomRange} getUpdate={this.handleChange.bind(this)} />
          <hr/>
          <HotalDetail  data={this.state.hotalDetails[1]} range={this.state.adultsRange} getUpdate={this.handleChange.bind(this)} />
          <hr/>
          <HotalDetail  data={this.state.hotalDetails[2]} range={this.state.childsRange} getUpdate={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  };
}
