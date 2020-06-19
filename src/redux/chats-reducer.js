let initialState = [
    { id: 1, name: 'Однокласники', idUsers: [1, 2, 4, 6], img: 'https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg', messages: [{ id: 1, idUser: 2, message: 'Привет ты где?' }, { id: 2, idUser: 1, message: 'Ща буду' }, { id: 3, idUser: 6, message: 'Даем вам 5 мин.' }, { id: 4, idUser: 4, message: 'Семеро одного не ждут' }] },
    { id: 2, name: 'Подготовка к курсачу', idUsers: [5, 7], img: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg', messages: [{ id: 1, idUser: 5, message: 'Ты курсач написал? Есть образец?' }, { id: 2, idUser: 7, message: 'Я только проснулся. ща сброшу.' }] },
    { id: 3, name: 'Группа', idUsers: [3, 4, 1, 7], img: 'https://pristor.ru/wp-content/uploads/2019/01/%D0%A8%D0%B8%D0%BA%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0%D0%BC-%D0%B8-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0%D0%BC-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-4.jpg', messages: [{ id: 1, idUser: 4, message: 'Когда мне выходить?' }, { id: 2, idUser: 1, message: 'Думаю через час пойдем' }, { id: 3, idUser: 3, message: 'А не рано?' }] }
];

const chatsReducer = (state = initialState, action) => {
    return state;
};

export default chatsReducer;