import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/auth";
import usersReducer from "./reducers/users";
import chatReducer from "./reducers/chat";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    auth: authReducer,
    users: usersReducer,
    chat: chatReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
