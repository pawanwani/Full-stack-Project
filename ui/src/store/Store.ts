import redux, { createStore, applyMiddleware,compose } from "redux";
import reducers from "../components/reducer/reducer";
import thunk from 'redux-thunk';

const store = createStore(reducers , compose(applyMiddleware(thunk)));

export default store;
