import { renderBlock } from './lib.js'
import { localS } from './localStorage.js'


export function renderUserBlock() {


  const user = getUserData();



  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${user.avatarUrl}" alt="${user.username}" />
      <div class="info">
          <p class="name">${user.username}</p>
          <p class="fav">
            <i class="heart-icon${getFavoritesAmount() ? ' active' : ''}"></i>${getFavoritesAmount()}
          </p>
      </div>
    </div>
    `
  )
}



interface ITypeUser {
  username?: unknown,
  avatarUrl?: unknown,
}


export function getUserData() {

  

  
  let user: ITypeUser = JSON.parse(localS.get('user'));

  if (!user) {
    user = {
      username: 'no user',
      avatarUrl: '/img/avatar.png',
    }
  }


  return user;
}



export function getFavoritesAmount () {

  type TypeFavAmount = {
    amount: unknown,
  }

  const favoritesAmount: TypeFavAmount = JSON.parse(localS.get('favoriteItems'));
  const len = Object.keys(favoritesAmount).length
  const favoritesCount = len/3 || 0;
  return favoritesCount;
}
