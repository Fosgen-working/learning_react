let state = {
    users: [
        { id: 1, name: 'Fosgen', img: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg', password: 6966 },
        { id: 2, name: 'Оля', img: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600', password: 6666 }
    ],
    chats: [
        { id: 1, name: 'Однокласники', idUsers: [1, 2], img: 'https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg', messages: [{ id: 1, idUser: 2, message: 'Привет ты где?' }, { id: 2, idUser: 1, message: 'Ща буду' }] }
    ],
    friends: [
        { id: 1, idUsers: [1, 2], messages: [{ id: 1, idUser: 2, message: 'Привет я в автобусе' }] }
    ]
};

export default state;