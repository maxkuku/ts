import { renderBlock } from './lib.js';
export function renderUserBlock() {
    const user = getUserData();
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${user.avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${user.username}</p>
          <p class="fav">
            <i class="heart-icon${getFavoritesAmount() ? ' active' : ''}"></i>${getFavoritesAmount()}
          </p>
      </div>
    </div>
    `);
}
function getUserData() {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    let user = {};
    if (localStorageUser)
        user = {
            username: localStorageUser.username,
            avatarUrl: localStorageUser.avatarUrl ? localStorageUser.avatarUrl : '/img/avatar.png',
        };
    else {
        user = {
            username: 'no user',
            avatarUrl: '/img/avatar.png',
        };
    }
    return user;
}
export function getFavoritesAmount() {
    const favoritesAmount = JSON.parse(localStorage.getItem('favoritesAmount'));
    const favoritesCount = +favoritesAmount || 0;
    return favoritesCount;
}
