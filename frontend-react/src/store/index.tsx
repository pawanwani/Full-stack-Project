
import {combineReducers} from 'redux';

const intialState = {
    name : 'Preethi'
}

const nameReducer =(state:any= intialState, action:any)=>{
    switch(action.type){
        case 'SET_NAME':
            return {...state, name: action.payload}
        default :
            return state
    }
}

export default combineReducers({
    nameReducer
});

// export default nameReducer;