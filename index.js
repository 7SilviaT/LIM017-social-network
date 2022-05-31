import home from './components/home.js';

import login from './components/login.js';

import register from './components/register.js';

import newsFeed from './components/news.js';

const components = {
  Home: home,
  Login: login,
  Register: register,
  Newsfeed: newsFeed,
};

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.Home()); }
    case '#/home':
    { return container.appendChild(components.Home()); }
    case '#/login':
    { return container.appendChild(components.Login()); }
    case '#/register':
    { return container.appendChild(components.Register()); }
    case '#/news':
    { return container.appendChild(components.Newsfeed()); }
    default:
      break;
  }
  return route;
};
