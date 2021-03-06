const ADD_FRIEND_MESSAGE = 'ADD_FRIEND_MESSAGE';
const UPDATE_FRIEND_MESSAGE_TEXT = 'UPDATE_FRIEND_MESSAGE_TEXT';

let initialState = {
    friends: [
        { id: 1, newFriendMessageText: "", idUsers: [1, 2], readUsers: [1, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] },
        { id: 2, newFriendMessageText: "", idUsers: [3, 4], readUsers: [3, 4], messages: [{ id: 1, idUser: 4, message: 'Просто текст' }, { id: 2, idUser: 3, message: 'Просто ответ' }] },
        { id: 3, newFriendMessageText: "", idUsers: [3, 2], readUsers: [3, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] },
        { id: 4, newFriendMessageText: "", idUsers: [4, 5], readUsers: [4, 5], messages: [{ id: 1, idUser: 5, message: 'Привет я в автобусе' }] },
        { id: 5, newFriendMessageText: "", idUsers: [5, 6], readUsers: [5, 6], messages: [{ id: 1, idUser: 5, message: 'Привет я в автобусе' }] },
        { id: 6, newFriendMessageText: "", idUsers: [1, 6], readUsers: [1, 6], messages: [{ id: 1, idUser: 1, message: 'Привет я в автобусе' }] }
    ]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND_MESSAGE:
            let friendId = state.friends.find(item => item.id === action.idChat);
            if (friendId.newFriendMessageText !== '') {
                let newMessage = {
                    id: 10,
                    idUser: 1,
                    message: friendId.newFriendMessageText
                };

                return {
                    ...state,
                    friends: state.friends.map(friend => {
                        if (friend.id === action.idChat) {
                            return {
                                ...friend,
                                messages: [...friend.messages, newMessage],
                                newFriendMessageText: ''
                            }
                        }
                        return friend;
                    })
                };
            }
            else {
                return state;
            }
        case UPDATE_FRIEND_MESSAGE_TEXT:
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.idChat) {
                        return {
                            ...friend,
                            newFriendMessageText: action.newText
                        }
                    }
                    return friend;
                })
            };
        default:
            return state;
    }
}

export const addFriendMessageCreator = (id) =>
    ({ type: ADD_FRIEND_MESSAGE, idChat: id });
export const updateFriendMessageCreator = (text, id) =>
    ({ type: UPDATE_FRIEND_MESSAGE_TEXT, newText: text, idChat: id });

export default friendsReducer;