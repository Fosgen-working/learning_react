let state = {
    users: [
        { id: 1, name: 'Fosgen', img: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg', password: 6966 },
        { id: 2, name: 'Оля', img: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600', password: 6666 },
        { id: 3, name: 'Маша', img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/05/16/screenshot_20200425_081212-350x250.jpg', password: 6666 },
        { id: 4, name: 'Лена', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', password: 6666 },
        { id: 5, name: 'Илья', img: 'https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375', password: 6666 },
        { id: 6, name: 'Ира', img: 'https://tipik.ru/wp-content/uploads/2019/07/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2%D0%BA-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9_023.jpg', password: 6666 },
        { id: 7, name: 'Нина', img: 'https://5bucks.ru/wp-content/uploads/2019/07/che2l-500x412.jpg', password: 6666 }
    ],
    chats: [
        { id: 1, name: 'Однокласники', idUsers: [1, 2, 4, 6], img: 'https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg', messages: [{ id: 1, idUser: 2, message: 'Привет ты где?' }, { id: 2, idUser: 1, message: 'Ща буду' }, { id: 3, idUser: 6, message: 'Даем вам 5 мин.' }, { id: 4, idUser: 4, message: 'Семеро одного не ждут' }] },
        { id: 2, name: 'Подготовка к курсачу', idUsers: [5, 7], img: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg', messages: [{ id: 1, idUser: 5, message: 'Ты курсач написал? Есть образец?' }, { id: 2, idUser: 7, message: 'Я только проснулся. ща сброшу.' }] },
        { id: 3, name: 'Группа', idUsers: [3, 4, 1, 7], img: 'https://pristor.ru/wp-content/uploads/2019/01/%D0%A8%D0%B8%D0%BA%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0%D0%BC-%D0%B8-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0%D0%BC-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-4.jpg', messages: [{ id: 1, idUser: 4, message: 'Когда мне выходить?' }, { id: 2, idUser: 1, message: 'Думаю через час пойдем' }, { id: 3, idUser: 3, message: 'А не рано?' }] }
    ],
    friends: [
        { id: 1, idUsers: [1, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] },
        { id: 2, idUsers: [3, 4], messages: [{ id: 1, idUser: 4, message: 'Просто текст' }, { id: 2, idUser: 3, message: 'Просто ответ' }] },
        { id: 3, idUsers: [3, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] },
        { id: 4, idUsers: [4, 5], messages: [{ id: 1, idUser: 5, message: 'Привет я в автобусе' }] },
        { id: 5, idUsers: [5, 6], messages: [{ id: 1, idUser: 5, message: 'Привет я в автобусе' }] },
        { id: 6, idUsers: [1, 6], messages: [{ id: 1, idUser: 1, message: 'Привет я в автобусе' }] }
    ]
};

export default state;