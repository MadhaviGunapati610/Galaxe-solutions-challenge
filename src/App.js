import React from 'react';
import {connect} from 'react-redux';
import FormComponent from './components/FormComponent';
import './App.css';

class App extends React.Component{
  state = {
    name:""
  }
handleSubmit=(e)=>{
  e.preventDefault();
  this.setState({...this.state.name, name: this.props.updateName})
}
render() {
  return (
    <div className="App">
      <FormComponent submitHandler={this.handleSubmit} changeHandler={(value)=>this.props.changeHandler(value)}/>
      <div>
        <h2>{this.state.name}</h2>
      </div>
    </div>
  );
}
}


const mapStateToProps = (state)=>{
  return {
    updateName: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      changeHandler:(value)=>dispatch({type:"UPDATE_NAME", payload:value})
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
