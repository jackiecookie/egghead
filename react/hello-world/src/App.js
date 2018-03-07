import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super();
    this.state={val:'' };
    this.update=this.update.bind(this);
  }
  update(e) {
    this.setState({
      val: e.target.value
    })
  }
  render() { 
    return (
      <div>
        <Txt update={this.update}>   
        </Txt>
        <hr/>
        <Label>
        {this.state.val}
        </Label>
      </div>
    );
  }
}

class Txt extends Component {
  render() {
    return (
      <input type="text" onChange={this.props.update}/>
    );
  }
}

const Label = (props) => (
  <label>{props.children}</label>
);


export default App;

