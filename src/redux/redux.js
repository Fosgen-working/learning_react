import { createStore, combineReducers } from "redux";
import friendsReducer from "./friends-reducer";
import chatsReducer from "./chats-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    friendsPage: friendsReducer,
    chatsPage: chatsReducer,
    users: usersReducer
});

let store = createStore(reducers);

export default store;