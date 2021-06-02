export default (state = [], action: any) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    default:
      return state;
  }
};
