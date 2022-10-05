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
    let user = JSON.parse(localS.get('user'));
    if (!user) {
        user = {
            username: 'no user',
            avatarUrl: '/img/avatar.png',
        };
    }
    return user;
}
export function getFavoritesAmount() {
    const favoritesAmount = JSON.parse(localS.get('favoriteItems'));
    if (favoritesAmount) {
        const len = +favoritesAmount.length;
        const favoritesCount = len || 0;
        return favoritesCount;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBSTFDLE1BQU0sVUFBVSxlQUFlO0lBRzdCLE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBSTNCLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixJQUFJLENBQUMsU0FBUyxVQUFVLElBQUksQ0FBQyxRQUFROzs0QkFFMUMsSUFBSSxDQUFDLFFBQVE7O2tDQUVQLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGtCQUFrQixFQUFFOzs7O0tBSS9GLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFVRCxNQUFNLFVBQVUsV0FBVztJQUt6QixJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsSUFBSSxHQUFHO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLGlCQUFpQjtTQUM3QixDQUFBO0tBQ0Y7SUFHRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFJRCxNQUFNLFVBQVUsa0JBQWtCO0lBR2hDLE1BQU0sZUFBZSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVFLElBQUksZUFBZSxFQUFFO1FBRW5CLE1BQU0sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQTtRQUNuQyxNQUFNLGNBQWMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO1NBQ0k7UUFDSCxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBsb2NhbFMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcbmltcG9ydCB7IFRGYXZvcml0ZXMgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2soKSB7XG5cblxuICBjb25zdCB1c2VyID0gZ2V0VXNlckRhdGEoKTtcblxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7dXNlci5hdmF0YXJVcmx9XCIgYWx0PVwiJHt1c2VyLnVzZXJuYW1lfVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7Z2V0RmF2b3JpdGVzQW1vdW50KCkgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtnZXRGYXZvcml0ZXNBbW91bnQoKX1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuXG5cbmludGVyZmFjZSBJVHlwZVVzZXIge1xuICB1c2VybmFtZT86IHN0cmluZyxcbiAgYXZhdGFyVXJsPzogc3RyaW5nLFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRGF0YSgpIHtcblxuICBcblxuICBcbiAgbGV0IHVzZXI6IElUeXBlVXNlciA9IEpTT04ucGFyc2UobG9jYWxTLmdldCgndXNlcicpKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICB1c2VyID0ge1xuICAgICAgdXNlcm5hbWU6ICdubyB1c2VyJyxcbiAgICAgIGF2YXRhclVybDogJy9pbWcvYXZhdGFyLnBuZycsXG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gdXNlcjtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZXNBbW91bnQgKCkge1xuXG5cbiAgY29uc3QgZmF2b3JpdGVzQW1vdW50OiBURmF2b3JpdGVzID0gSlNPTi5wYXJzZShsb2NhbFMuZ2V0KCdmYXZvcml0ZUl0ZW1zJykpO1xuICBpZiAoZmF2b3JpdGVzQW1vdW50KSB7XG4gICAgXG4gICAgY29uc3QgbGVuID0gK2Zhdm9yaXRlc0Ftb3VudC5sZW5ndGhcbiAgICBjb25zdCBmYXZvcml0ZXNDb3VudCA9IGxlbiB8fCAwO1xuICAgIHJldHVybiBmYXZvcml0ZXNDb3VudDtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19