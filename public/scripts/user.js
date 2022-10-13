import { renderBlock } from './lib.js';
import { localS } from './localStorage.js';
export function renderUserBlock() {
    const user = getUserData();
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${user.avatarUrl}" alt="${user.username}" />
      <div class="info">
          <p class="name">${user.username}</p>
          <p class="fav">
            <i class="heart-icon${getFavoritesAmount() ? ' active' : ''}"></i>${getFavoritesAmount()}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    const localUserVal = localS.get('user');
    let user = JSON.parse(localUserVal);
    if (!user) {
        user = {
            username: 'no user',
            avatarUrl: '/img/avatar.png',
        };
    }
    return user;
}
export function getFavoritesAmount() {
    const favLocalVal = localS.get('favoriteItems');
    const favoritesAmount = JSON.parse(favLocalVal);
    if (favoritesAmount) {
        const len = +favoritesAmount.length;
        const favoritesCount = len || 0;
        return favoritesCount;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBSTFDLE1BQU0sVUFBVSxlQUFlO0lBRzdCLE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBSTNCLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixJQUFJLENBQUMsU0FBUyxVQUFVLElBQUksQ0FBQyxRQUFROzs0QkFFMUMsSUFBSSxDQUFDLFFBQVE7O2tDQUVQLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGtCQUFrQixFQUFFOzs7O0tBSS9GLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFVRCxNQUFNLFVBQVUsV0FBVztJQUl6QixNQUFNLFlBQVksR0FBUSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzVDLElBQUksSUFBSSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFL0MsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULElBQUksR0FBRztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxpQkFBaUI7U0FDN0IsQ0FBQTtLQUNGO0lBR0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBSUQsTUFBTSxVQUFVLGtCQUFrQjtJQUVoQyxNQUFNLFdBQVcsR0FBUSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3BELE1BQU0sZUFBZSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsSUFBSSxlQUFlLEVBQUU7UUFFbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFBO1FBQ25DLE1BQU0sY0FBYyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxjQUFjLENBQUM7S0FDdkI7U0FDSTtRQUNILE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGxvY2FsUyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgVEZhdm9yaXRlcyB9IGZyb20gJy4vdHlwZXMuanMnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jaygpIHtcblxuXG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyRGF0YSgpO1xuXG5cblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHt1c2VyLmF2YXRhclVybH1cIiBhbHQ9XCIke3VzZXIudXNlcm5hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtnZXRGYXZvcml0ZXNBbW91bnQoKSA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2dldEZhdm9yaXRlc0Ftb3VudCgpfVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5cblxuaW50ZXJmYWNlIElUeXBlVXNlciB7XG4gIHVzZXJuYW1lPzogc3RyaW5nLFxuICBhdmF0YXJVcmw/OiBzdHJpbmcsXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuXG4gIFxuXG4gIGNvbnN0IGxvY2FsVXNlclZhbDogYW55ID0gbG9jYWxTLmdldCgndXNlcicpXG4gIGxldCB1c2VyOiBJVHlwZVVzZXIgPSBKU09OLnBhcnNlKGxvY2FsVXNlclZhbCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiAnbm8gdXNlcicsXG4gICAgICBhdmF0YXJVcmw6ICcvaW1nL2F2YXRhci5wbmcnLFxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3JpdGVzQW1vdW50ICgpIHtcblxuICBjb25zdCBmYXZMb2NhbFZhbDogYW55ID0gbG9jYWxTLmdldCgnZmF2b3JpdGVJdGVtcycpXG4gIGNvbnN0IGZhdm9yaXRlc0Ftb3VudDogVEZhdm9yaXRlcyA9IEpTT04ucGFyc2UoZmF2TG9jYWxWYWwpO1xuICBpZiAoZmF2b3JpdGVzQW1vdW50KSB7XG4gICAgXG4gICAgY29uc3QgbGVuID0gK2Zhdm9yaXRlc0Ftb3VudC5sZW5ndGhcbiAgICBjb25zdCBmYXZvcml0ZXNDb3VudCA9IGxlbiB8fCAwO1xuICAgIHJldHVybiBmYXZvcml0ZXNDb3VudDtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19