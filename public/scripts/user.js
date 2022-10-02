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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBSTFDLE1BQU0sVUFBVSxlQUFlO0lBRzdCLE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBSTNCLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixJQUFJLENBQUMsU0FBUyxVQUFVLElBQUksQ0FBQyxRQUFROzs0QkFFMUMsSUFBSSxDQUFDLFFBQVE7O2tDQUVQLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGtCQUFrQixFQUFFOzs7O0tBSS9GLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFVRCxNQUFNLFVBQVUsV0FBVztJQUt6QixJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsSUFBSSxHQUFHO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLGlCQUFpQjtTQUM3QixDQUFBO0tBQ0Y7SUFHRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFJRCxNQUFNLFVBQVUsa0JBQWtCO0lBR2hDLE1BQU0sZUFBZSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVFLElBQUksZUFBZSxFQUFFO1FBRW5CLE1BQU0sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQTtRQUNuQyxNQUFNLGNBQWMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO1NBQ0k7UUFDSCxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBsb2NhbFMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcbmltcG9ydCB7IFRGYXZvcml0ZXMgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2soKSB7XG5cblxuICBjb25zdCB1c2VyID0gZ2V0VXNlckRhdGEoKTtcblxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7dXNlci5hdmF0YXJVcmx9XCIgYWx0PVwiJHt1c2VyLnVzZXJuYW1lfVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7Z2V0RmF2b3JpdGVzQW1vdW50KCkgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtnZXRGYXZvcml0ZXNBbW91bnQoKX1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuXG5cbmludGVyZmFjZSBJVHlwZVVzZXIge1xuICB1c2VybmFtZT86IHVua25vd24sXG4gIGF2YXRhclVybD86IHVua25vd24sXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuXG4gIFxuXG4gIFxuICBsZXQgdXNlcjogSVR5cGVVc2VyID0gSlNPTi5wYXJzZShsb2NhbFMuZ2V0KCd1c2VyJykpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHVzZXIgPSB7XG4gICAgICB1c2VybmFtZTogJ25vIHVzZXInLFxuICAgICAgYXZhdGFyVXJsOiAnL2ltZy9hdmF0YXIucG5nJyxcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiB1c2VyO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Ftb3VudCAoKSB7XG5cblxuICBjb25zdCBmYXZvcml0ZXNBbW91bnQ6IFRGYXZvcml0ZXMgPSBKU09OLnBhcnNlKGxvY2FsUy5nZXQoJ2Zhdm9yaXRlSXRlbXMnKSk7XG4gIGlmIChmYXZvcml0ZXNBbW91bnQpIHtcbiAgICBcbiAgICBjb25zdCBsZW4gPSArZmF2b3JpdGVzQW1vdW50Lmxlbmd0aFxuICAgIGNvbnN0IGZhdm9yaXRlc0NvdW50ID0gbGVuIHx8IDA7XG4gICAgcmV0dXJuIGZhdm9yaXRlc0NvdW50O1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=