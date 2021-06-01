import React from 'react';
import { connect } from 'react-redux';
import './App.css';
// import Rich from './componenets/RichTextField';
// import Rich from './componenets/draftjsexample';
// import Rich from './componenets/draftjs_ex1';
// import Rich from './componenets/draft-wysiwygstyle';
import Rich from './componenets/draft-wyang';


function App(Props:any) {
  // console.log(Props);
  return (
    <div className="App" style={{
      border: '1px solid #ddd',
      borderRadius: 2,
      boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
      padding: 16,
      backgroundColor: '#fefefe',
    }}>
        <Rich />
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