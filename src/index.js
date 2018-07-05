import React from 'react';
import ReactDOM from 'react-dom';
import HotalDetailsContainer from './components/HotalDetailsContainer'
import './index.css';
// ========================================

class App extends React.Component {
  render(){
    return (
      <HotalDetailsContainer />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
