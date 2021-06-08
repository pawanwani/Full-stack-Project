const initialState = {
  login : false
}


export default (state = initialState, action: any) => {
    switch (action.type) {
      case "SIGN-IN":
        return {
          ...state,
          login : true,
          user : action.payload
        };
      case "SIGN_OUT":
        return {
          ...state,
          login : false,
          user : {}
        }
  
      default:
        return state;
    }
  };
  