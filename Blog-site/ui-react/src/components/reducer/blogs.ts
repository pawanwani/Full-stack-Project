import * as Action from "./blogActions";

export default (state = [], action: any) => {
  switch (action.type) {
    case Action.FETCH_ALL_BLOGS:
      return action.payload;
    default:
      return state;
  }
};
