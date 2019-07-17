import React from 'react';
import './App.css';
import { connect } from "react-redux";
import MyComponent from './MyComponent';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        {/* onClick is defined only for one */}
          <ul>
            <li onClick={this.props.display}>RENDER CHILDREN</li>
            <ul>
              {this.props.dataState === true ? this.props.data.map((item) => {
                return (
                  <li key={item}>{item}</li>
                )
              }): ''}
            </ul>
            {/* to render and hide a component */}
            <li onClick={this.props.displayComponent}>{this.props.label}</li>
        </ul>
        
        {this.props.displayComponentState === true ? <MyComponent /> : ''}
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    data: state.data,
    dataState: state.dataState,
    displayComponentState: state.displayComponentState,
    label: state.label
  };
};

const mapDispachToProps = dispatch => {
  return {
    display: () => dispatch({ type: "DATA" }),
    displayComponent: () => dispatch({ type : "COMPONENT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
