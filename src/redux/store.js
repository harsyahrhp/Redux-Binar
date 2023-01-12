import { createStore } from "redux";

const counterstate = {
    total:20,
};

const counterReducer = (state = counterstate) => {
    return state;
};

const store = createStore(counterReducer);

export default store;