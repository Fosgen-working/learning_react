const ADD_FRIEND_MESSAGE = 'ADD_FRIEND_MESSAGE';
const UPDATE_FRIEND_MESSAGE_TEXT = 'UPDATE_FRIEND_MESSAGE_TEXT';

let initialState = {
    friends: [
        { id: 1, idUsers: [1, 2], readUsers: [1, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] },
        { id: 2, idUsers: [3, 4], readUsers: [3, 4], messages: [{ id: 1, idUser: 4, message: 'Просто текст' }, { id: 2, idUser: 3, message: 'Просто ответ' }] },
        { id: 3, idUsers: [3, 2], readUsers: [3, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] },
        { id: 4, idUsers: [4, 5], readUsers: [4, 5], messages: [{ id: 1, idUser: 5, message: 'Привет я в автобусе' }] },
        { id: 5, idUsers: [5, 6], readUsers: [5, 6], messages: [{ id: 1, idUser: 5, message: 'Привет я в автобусе' }] },
        { id: 6, idUsers: [1, 6], readUsers: [1, 6], messages: [{ id: 1, idUser: 1, message: 'Привет я в автобусе' }] }
    ],
    newFriendMessageText: ""
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND_MESSAGE:
            let newMessage = {
                id: 10,
                idUser: 1,
                message: state.newFriendMessageText
            };
            let stateCpoy = { ...state };
            stateCpoy.friends[action.idChat - 1].messages = [stateCpoy.friends[action.idChat - 1].messages, newMessage]

            return stateCpoy;

        // {
        //     ...state,
        //     friends[action.idChat - 1].messages: [...state.friends[action.idChat - 1].messages, newMessage],
        //     newFriendMessageText: ''
        // };
        case UPDATE_FRIEND_MESSAGE_TEXT:
            return {
                ...state,
                newFriendMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addFriendMessageCreator = (id) =>
    ({ type: ADD_FRIEND_MESSAGE, idChat: id });
export const updateFriendMessageCreator = (text) =>
    ({ type: UPDATE_FRIEND_MESSAGE_TEXT, newText: text });

export default friendsReducer;