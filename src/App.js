import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      forOne: false,
      forTwo: false,
      forThree: false
    }
    this.display = this.display.bind(this);
  }

  display(values){
    if(values === 'forOne'){
      let temp = !this.state.forOne
      this.setState({
        forOne: temp
      })
    } else if(values === 'forTwo'){
      this.setState({
          forTwo: 'Y'
      })
    } else{
      this.setState({
        forThree: 'Y'
      })
    }
  }
  
  render(){
    return (
      <div className="App">
          <ul>
            <li onClick={this.display.bind(null,'forOne')}>1</li>
            {this.state.forOne === true ? <ul>
              <li>a</li>
              <li>b</li>
            </ul> : ''}
            <li onClick={this.display.bind(null,'forTwo')}>2</li>
            <li onClick={this.display.bind(null,'forThree')}>3</li>
        </ul>
      </div>
    );
  }
  
}

export default App;
