var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { localS } from './localStorage.js';
function dateToUnixStamp(date) {
    return date.getTime() / 1000;
}
function responseToJson(requestPromise) {
    return requestPromise
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    });
}
export function searchApartment() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('checkin') !== '') {
            const checkInDate = new Date(urlParams.get('checkin'));
            const checkOutDate = new Date(urlParams.get('checkout'));
            const maxPrice = urlParams.get('price');
            let url = `http://localhost:3030/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`;
            if (maxPrice.length > 0) {
                url += `&maxPrice=${maxPrice}`;
            }
            const response = yield fetch(url);
            const responseText = yield response.text();
            const data = JSON.parse(responseText);
            if (!data) {
                throw Error('Нет апартаментов по указанным параметрам');
            }
            else {
                if (data.length > 0) {
                    let str = '<div class="search-list-block"><ul class="results-list">';
                    data.forEach((result_2) => {
                        let active = '';
                        if (localS.get('favoriteItems') != null) {
                            JSON.parse(localS.get('favoriteItems')).forEach((favorite) => {
                                if (favorite.id === result_2.id.toString()) {
                                    active = 'active';
                                }
                            });
                        }
                        if (+maxPrice >= result_2.price || +maxPrice < 1) {
                            str += `<li id="book_${result_2.id}" class="result">
              <div class="result-container">
                <div class="result-img-container">
                  <div class="favorites ${active}" data-fav="${result_2.id}"></div>
                  <img class="result-img" src="${result_2.image}" alt="${result_2.name}">
                </div>	
                <div class="result-info">
                  <div class="result-info--header">
                    <p>${result_2.name}</p>
                    <p class="price">${result_2.price}&#8381;</p>
                  </div>
                  <div class="result-info--map"><i class="map-icon"></i> ${result_2.remoteness}км от вас</div>
                  <div class="result-info--descr">${result_2.description}</div>
                  <div class="result-info--footer">
                    <div>
                      <button onclick="book(${result_2.id})">Забронировать</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>`;
                        }
                    });
                    str += '</ul></div>';
                    return str;
                }
                else {
                    return '<p class="paddinged centered">Нет квартир в списке, нажмите поиск</p>';
                }
            }
        }
    });
}
export function book(placeId, checkInDate, checkOutDate) {
    return responseToJson(fetch(`http://localhost:3030/places/${placeId}?` +
        `checkInDate=${dateToUnixStamp(checkInDate)}&` +
        `checkOutDate=${dateToUnixStamp(checkOutDate)}&`, { method: 'PATCH' }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFrQjFDLFNBQVMsZUFBZSxDQUFDLElBQVU7SUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFBO0FBQzlCLENBQUM7QUFHRCxTQUFTLGNBQWMsQ0FBQyxjQUFjO0lBQ3BDLE9BQU8sY0FBYztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUVqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxZQUFvQixFQUFFLEVBQUU7UUFFN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQU1ELE1BQU0sVUFBZ0IsZUFBZTs7UUFFbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUk5RCxJQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRWxDLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtZQUN0RCxNQUFNLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7WUFDeEQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUV2QyxJQUFJLEdBQUcsR0FBRyw0Q0FBNEMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQTtZQUU5SixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixHQUFHLElBQUksYUFBYSxRQUFRLEVBQUUsQ0FBQTthQUMvQjtZQUlELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2pDLE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDckMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO2FBQ3hEO2lCQUNJO2dCQU9ILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBRW5CLElBQUksR0FBRyxHQUFHLDBEQUEwRCxDQUFBO29CQUVwRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBNkcsRUFBRSxFQUFFO3dCQUU3SCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBR2hCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLEVBQUU7NEJBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQW1CLEVBQUUsRUFBRTtnQ0FDdEUsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7b0NBQzFDLE1BQU0sR0FBRyxRQUFRLENBQUE7aUNBRWxCOzRCQUNILENBQUMsQ0FBQyxDQUFBO3lCQUNIO3dCQUdELElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7NEJBRWhELEdBQUcsSUFBSSxnQkFBZ0IsUUFBUSxDQUFDLEVBQUU7OzswQ0FHSixNQUFNLGVBQWUsUUFBUSxDQUFDLEVBQUU7aURBQ3pCLFFBQVEsQ0FBQyxLQUFLLFVBQVUsUUFBUSxDQUFDLElBQUk7Ozs7eUJBSTdELFFBQVEsQ0FBQyxJQUFJO3VDQUNDLFFBQVEsQ0FBQyxLQUFLOzsyRUFFc0IsUUFBUSxDQUFDLFVBQVU7b0RBQzFDLFFBQVEsQ0FBQyxXQUFXOzs7OENBRzFCLFFBQVEsQ0FBQyxFQUFFOzs7OztrQkFLdkMsQ0FBQTt5QkFDUDtvQkFDSCxDQUFDLENBQUMsQ0FBQTtvQkFDRixHQUFHLElBQUksYUFBYSxDQUFBO29CQUVwQixPQUFPLEdBQUcsQ0FBQTtpQkFDWDtxQkFDSTtvQkFDSCxPQUFPLHVFQUF1RSxDQUFDO2lCQUNoRjthQUdGO1NBQ0Y7SUFDSCxDQUFDO0NBQUE7QUFHRCxNQUFNLFVBQVUsSUFBSSxDQUFDLE9BQXdCLEVBQUUsV0FBaUIsRUFBRSxZQUFrQjtJQUNsRixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQ3pCLGdDQUFnQyxPQUFPLEdBQUc7UUFDMUMsZUFBZSxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUc7UUFDOUMsZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUNoRCxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgbG9jYWxTIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnXG5pbXBvcnQgeyBURmF2b3JpdGUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwYXJ0UmVzcG9uc2Uge1xuICBpZD86IG51bWJlclxuICBuYW1lPzogc3RyaW5nXG4gIGltYWdlPzogc3RyaW5nXG4gIHByaWNlPzogbnVtYmVyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIHJlbW90ZW5lc3M/OiBudW1iZXJcbiAgYm9va2VkRGF0ZXM/OiB7XG4gICAgY2hlY2tJbjogRGF0ZVxuICAgIGNoZWNrT3V0OiBEYXRlXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBkYXRlVG9Vbml4U3RhbXAoZGF0ZTogRGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwXG59XG5cblxuZnVuY3Rpb24gcmVzcG9uc2VUb0pzb24ocmVxdWVzdFByb21pc2UpIHtcbiAgcmV0dXJuIHJlcXVlc3RQcm9taXNlXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZVRleHQ6IHN0cmluZykgPT4ge1xuICAgIFxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIH0pXG59XG5cblxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEFwYXJ0bWVudCgpOiBQcm9taXNlPHN0cmluZz5cbntcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuXG5cbiAgaWYodXJsUGFyYW1zLmdldCgnY2hlY2tpbicpICE9PSAnJykge1xuXG4gICAgY29uc3QgY2hlY2tJbkRhdGUgPSBuZXcgRGF0ZSh1cmxQYXJhbXMuZ2V0KCdjaGVja2luJykpIFxuICAgIGNvbnN0IGNoZWNrT3V0RGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNrb3V0JykpXG4gICAgY29uc3QgbWF4UHJpY2UgPSB1cmxQYXJhbXMuZ2V0KCdwcmljZScpXG5cbiAgICBsZXQgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXM/Y2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZjaGVja091dERhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tPdXREYXRlKX0mY29vcmRpbmF0ZXM9NTkuOTM4NiwzMC4zMTQxYFxuXG4gICAgaWYgKG1heFByaWNlLmxlbmd0aCA+IDApIHtcbiAgICAgIHVybCArPSBgJm1heFByaWNlPSR7bWF4UHJpY2V9YFxuICAgIH1cbiAgICBcblxuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dClcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEVycm9yKCfQndC10YIg0LDQv9Cw0YDRgtCw0LzQtdC90YLQvtCyINC/0L4g0YPQutCw0LfQsNC90L3Ri9C8INC/0LDRgNCw0LzQtdGC0YDQsNC8JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBcblxuXG4gICAgICBcbiAgICAgIFxuXG4gICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgbGV0IHN0ciA9ICc8ZGl2IGNsYXNzPVwic2VhcmNoLWxpc3QtYmxvY2tcIj48dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3RcIj4nXG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKChyZXN1bHRfMjogeyBwcmljZTogbnVtYmVyOyBpZDogc3RyaW5nOyBpbWFnZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IHJlbW90ZW5lc3M6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9KSA9PiB7XG5cbiAgICAgICAgICBsZXQgYWN0aXZlID0gJyc7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGxvY2FsUy5nZXQoJ2Zhdm9yaXRlSXRlbXMnKSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTLmdldCgnZmF2b3JpdGVJdGVtcycpKS5mb3JFYWNoKChmYXZvcml0ZTogVEZhdm9yaXRlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmYXZvcml0ZS5pZCA9PT0gcmVzdWx0XzIuaWQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgICAgXG4gIFxuICAgICAgICAgIGlmICgrbWF4UHJpY2UgPj0gcmVzdWx0XzIucHJpY2UgfHwgK21heFByaWNlIDwgMSkge1xuICBcbiAgICAgICAgICAgIHN0ciArPSBgPGxpIGlkPVwiYm9va18ke3Jlc3VsdF8yLmlkfVwiIGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzICR7YWN0aXZlfVwiIGRhdGEtZmF2PVwiJHtyZXN1bHRfMi5pZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiJHtyZXN1bHRfMi5pbWFnZX1cIiBhbHQ9XCIke3Jlc3VsdF8yLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzdWx0XzIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3Jlc3VsdF8yLnByaWNlfSYjODM4MTs8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtyZXN1bHRfMi5yZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZGVzY3JcIj4ke3Jlc3VsdF8yLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJib29rKCR7cmVzdWx0XzIuaWR9KVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5gXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBzdHIgKz0gJzwvdWw+PC9kaXY+J1xuICBcbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnPHAgY2xhc3M9XCJwYWRkaW5nZWQgY2VudGVyZWRcIj7QndC10YIg0LrQstCw0YDRgtC40YAg0LIg0YHQv9C40YHQutC1LCDQvdCw0LbQvNC40YLQtSDQv9C+0LjRgdC6PC9wPic7XG4gICAgICB9XG5cbiAgICAgIFxuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBib29rKHBsYWNlSWQ6IHN0cmluZyB8IG51bWJlciwgY2hlY2tJbkRhdGU6IERhdGUsIGNoZWNrT3V0RGF0ZTogRGF0ZSkge1xuICByZXR1cm4gcmVzcG9uc2VUb0pzb24oZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXMvJHtwbGFjZUlkfT9gICtcbiAgICBgY2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZgICtcbiAgICBgY2hlY2tPdXREYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSl9JmAsXG4gICAge21ldGhvZDogJ1BBVENIJ31cbiAgKSk7XG59XG4iXX0=