import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import * as serviceWorker from './serviceWorker';

let friendsData = [
    { id: 1, name: 'Костя', img: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg', textName: 'Вы', text: 'Что надо?' },
    { id: 2, name: 'Настя', img: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600', textName: 'Вы', text: 'Вы как?' }
];

let chatsData = [
    { id: 1, name: 'Однокласники', img: 'https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg', textName: 'Fosgen', text: 'Ну привет' },
    { id: 2, name: 'Друзья', img: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', textName: 'Оля', text: 'Я выезжаю. Через 30 мин буду у мака. Вы как?' }
];

ReactDOM.render(<App friendsData={friendsData} chatsData={chatsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
