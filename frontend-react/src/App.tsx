import React from 'react';
import { connect } from 'react-redux';
import './App.css';


function App(Props:any) {
  // console.log(Props);
  return (
    <div className="App">
      <h2>Hello</h2>
      <h2>{Props.nameR.name}</h2>
      <button onClick = {()=>{Props.setName('Pawan')}}>Change Name</button>
    </div>
  );
}

const mapStateToProps = (state:any) =>{
  return {
    nameR : state.nameReducer
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return{
    setName : (name:any) =>{
      dispatch({
        type : 'SET_NAME',
        payload : name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);