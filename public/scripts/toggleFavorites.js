import { localS } from './localStorage.js';
export function toggleFavoriteItem() {
    setTimeout(() => {
        document.querySelectorAll('[data-fav]').forEach((item) => {
            item.addEventListener('click', (event) => {
                if (!(event.target instanceof HTMLDivElement)) {
                    return;
                }
                else {
                    const target = event.target;
                    const id = target.dataset.fav;
                    if (!item.classList.contains('active')) {
                        const id = event.target.dataset.fav.toString();
                        const favoriteItems = localS.get('favoriteItems');
                        const favItemsObj = JSON.parse(favoriteItems);
                        const newItemToLS = { 'id': id,
                            'name': target.closest('.result-container').querySelectorAll('.result-info--header p')[0].textContent,
                            'image': target.closest('.result-container').querySelectorAll('.result-img')[0].getAttribute('src')
                        };
                        if (favItemsObj == null) {
                            const favItemsNew = [];
                            favItemsNew.push(newItemToLS);
                            localS.set('favoriteItems', JSON.parse(JSON.stringify(favItemsNew)));
                        }
                        else {
                            favItemsObj.push(newItemToLS);
                            localS.set('favoriteItems', favItemsObj);
                        }
                        target.classList.add('active');
                    }
                    else {
                        const favoriteItems = localS.get('favoriteItems');
                        const favoriteObj = JSON.parse(favoriteItems);
                        favoriteObj.forEach((favorite, index) => {
                            if (favorite.id === id) {
                                favoriteObj.splice(index, 1);
                            }
                        });
                        if (favoriteObj.length) {
                            localS.set('favoriteItems', favoriteObj);
                        }
                        target.classList.remove('active');
                    }
                }
                const favoritesAmount = JSON.parse(localS.get('favoriteItems'));
                if (favoritesAmount) {
                    const len = +favoritesAmount.length;
                    const favoritesCount = len || 0;
                    document.querySelectorAll('p.fav')[0].innerHTML = `<i class="heart-icon active"></i>${favoritesCount}`;
                }
            });
        });
    }, 1000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlRmF2b3JpdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RvZ2dsZUZhdm9yaXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFLMUMsTUFBTSxVQUFVLGtCQUFrQjtJQUloQyxVQUFVLENBQUUsR0FBRyxFQUFFO1FBQ2YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFJdkMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxjQUFjLENBQUMsRUFBRTtvQkFDN0MsT0FBTztpQkFDUjtxQkFDSTtvQkFDSCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBd0IsQ0FBQztvQkFDOUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUE7b0JBRzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDdEMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO3dCQUM5QyxNQUFNLGFBQWEsR0FBa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDakUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTt3QkFHN0MsTUFBTSxXQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRTs0QkFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7NEJBQ3JHLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt5QkFDcEcsQ0FBQTt3QkFFRCxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQzs0QkFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTs0QkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDdEU7NkJBQ0k7NEJBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTs0QkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQzFDO3dCQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUVoQzt5QkFDSTt3QkFDSCxNQUFNLGFBQWEsR0FBa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDakUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFFOUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQW1CLEVBQUUsS0FBYSxFQUFFLEVBQUU7NEJBQzFELElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0NBQ3RCLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzZCQUM5Qjt3QkFDSCxDQUFDLENBQUMsQ0FBQTt3QkFDRixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7NEJBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO3lCQUMxQzt3QkFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDbkM7aUJBTUY7Z0JBRUQsTUFBTSxlQUFlLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLElBQUksZUFBZSxFQUFFO29CQUVuQixNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUE7b0JBQ25DLE1BQU0sY0FBYyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBR2hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0NBQW9DLGNBQWMsRUFBRSxDQUFBO2lCQUN2RztZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7QUFFVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBsb2NhbFMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcbmltcG9ydCB7IFRGYXZvcml0ZSwgVEZhdm9yaXRlcyB9IGZyb20gJy4vdHlwZXMuanMnXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGVJdGVtICgpIHtcblxuICBcblxuICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmF2XScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBcblxuICAgICAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmRhdGFzZXQuZmF2XG5cblxuICAgICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmZhdi50b1N0cmluZygpXG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZUl0ZW1zOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTLmdldCgnZmF2b3JpdGVJdGVtcycpO1xuICAgICAgICAgICAgY29uc3QgZmF2SXRlbXNPYmogPSBKU09OLnBhcnNlKGZhdm9yaXRlSXRlbXMpXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbVRvTFMgPSB7J2lkJzogaWQsIFxuICAgICAgICAgICAgICAnbmFtZSc6IHRhcmdldC5jbG9zZXN0KCcucmVzdWx0LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHQtaW5mby0taGVhZGVyIHAnKVswXS50ZXh0Q29udGVudCwgXG4gICAgICAgICAgICAgICdpbWFnZSc6IHRhcmdldC5jbG9zZXN0KCcucmVzdWx0LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHQtaW1nJylbMF0uZ2V0QXR0cmlidXRlKCdzcmMnKSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZhdkl0ZW1zT2JqID09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmF2SXRlbXNOZXcgPSBbXTtcbiAgICAgICAgICAgICAgZmF2SXRlbXNOZXcucHVzaChuZXdJdGVtVG9MUylcbiAgICAgICAgICAgICAgbG9jYWxTLnNldCgnZmF2b3JpdGVJdGVtcycsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmF2SXRlbXNOZXcpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgZmF2SXRlbXNPYmoucHVzaChuZXdJdGVtVG9MUylcbiAgICAgICAgICAgICAgbG9jYWxTLnNldCgnZmF2b3JpdGVJdGVtcycsIGZhdkl0ZW1zT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVJdGVtczogc3RyaW5nIHwgbnVsbCA9IGxvY2FsUy5nZXQoJ2Zhdm9yaXRlSXRlbXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlT2JqID0gSlNPTi5wYXJzZShmYXZvcml0ZUl0ZW1zKTtcblxuICAgICAgICAgICAgZmF2b3JpdGVPYmouZm9yRWFjaCggKGZhdm9yaXRlOiBURmF2b3JpdGUsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGZhdm9yaXRlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGZhdm9yaXRlT2JqLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZmF2b3JpdGVPYmoubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGxvY2FsUy5zZXQoJ2Zhdm9yaXRlSXRlbXMnLCBmYXZvcml0ZU9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYXZvcml0ZXNBbW91bnQ6IFRGYXZvcml0ZXMgPSBKU09OLnBhcnNlKGxvY2FsUy5nZXQoJ2Zhdm9yaXRlSXRlbXMnKSk7XG4gICAgICAgIGlmIChmYXZvcml0ZXNBbW91bnQpIHtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBsZW4gPSArZmF2b3JpdGVzQW1vdW50Lmxlbmd0aFxuICAgICAgICAgIGNvbnN0IGZhdm9yaXRlc0NvdW50ID0gbGVuIHx8IDA7XG4gICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AuZmF2JylbMF0uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiaGVhcnQtaWNvbiBhY3RpdmVcIj48L2k+JHtmYXZvcml0ZXNDb3VudH1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSwxMDAwKVxuXG59Il19