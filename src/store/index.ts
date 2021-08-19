import { Provider } from "react-redux";

import { createStore } from "redux";

import loginReducer from "./login";

const store = createStore(loginReducer);

export default store;
