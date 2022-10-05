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
export function dateToUnixStamp(date) {
    return date.getTime() / 1000;
}
export function responseToJson(requestPromise) {
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
        if (urlParams) {
            const checkInDate = new Date(urlParams.get('checkin'));
            const checkOutDate = new Date(urlParams.get('checkout'));
            const maxPrice = urlParams.get('price');
            let url = `http://localhost:3030/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`;
            if (+maxPrice > 0) {
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
                      <button>Забронировать</button>
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
        return this;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFrQjFDLE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVTtJQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDOUIsQ0FBQztBQUdELE1BQU0sVUFBVSxjQUFjLENBQUMsY0FBaUM7SUFDOUQsT0FBTyxjQUFjO1NBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBRWpCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtRQUU3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBTUQsTUFBTSxVQUFnQixlQUFlOztRQUVuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSTlELElBQUcsU0FBUyxFQUFFO1lBRVosTUFBTSxXQUFXLEdBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1lBQzVELE1BQU0sWUFBWSxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtZQUM5RCxNQUFNLFFBQVEsR0FBa0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUV0RCxJQUFJLEdBQUcsR0FBRyw0Q0FBNEMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQTtZQUU5SixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRyxJQUFJLGFBQWEsUUFBUSxFQUFFLENBQUE7YUFDL0I7WUFJRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNqQyxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQTthQUN4RDtpQkFDSTtnQkFPSCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUVuQixJQUFJLEdBQUcsR0FBRywwREFBMEQsQ0FBQTtvQkFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQTZHLEVBQUUsRUFBRTt3QkFFN0gsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUdoQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFtQixFQUFFLEVBQUU7Z0NBQ3RFLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO29DQUMxQyxNQUFNLEdBQUcsUUFBUSxDQUFBO2lDQUVsQjs0QkFDSCxDQUFDLENBQUMsQ0FBQTt5QkFDSDt3QkFHRCxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFOzRCQUVoRCxHQUFHLElBQUksZ0JBQWdCLFFBQVEsQ0FBQyxFQUFFOzs7MENBR0osTUFBTSxlQUFlLFFBQVEsQ0FBQyxFQUFFO2lEQUN6QixRQUFRLENBQUMsS0FBSyxVQUFVLFFBQVEsQ0FBQyxJQUFJOzs7O3lCQUk3RCxRQUFRLENBQUMsSUFBSTt1Q0FDQyxRQUFRLENBQUMsS0FBSzs7MkVBRXNCLFFBQVEsQ0FBQyxVQUFVO29EQUMxQyxRQUFRLENBQUMsV0FBVzs7Ozs7Ozs7a0JBUXRELENBQUE7eUJBQ1A7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsR0FBRyxJQUFJLGFBQWEsQ0FBQTtvQkFFcEIsT0FBTyxHQUFHLENBQUE7aUJBQ1g7cUJBQ0k7b0JBQ0gsT0FBTyx1RUFBdUUsQ0FBQztpQkFDaEY7YUFHRjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGxvY2FsUyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgVEZhdm9yaXRlIH0gZnJvbSAnLi90eXBlcy5qcydcblxuXG5leHBvcnQgaW50ZXJmYWNlIElBcGFydFJlc3BvbnNlIHtcbiAgaWQ/OiBudW1iZXJcbiAgbmFtZT86IHN0cmluZ1xuICBpbWFnZT86IHN0cmluZ1xuICBwcmljZT86IG51bWJlclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICByZW1vdGVuZXNzPzogbnVtYmVyXG4gIGJvb2tlZERhdGVzPzoge1xuICAgIGNoZWNrSW46IERhdGVcbiAgICBjaGVja091dDogRGF0ZVxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1VuaXhTdGFtcChkYXRlOiBEYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAvIDEwMDBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2VUb0pzb24ocmVxdWVzdFByb21pc2U6IFByb21pc2U8UmVzcG9uc2U+KTogb2JqZWN0IHtcbiAgcmV0dXJuIHJlcXVlc3RQcm9taXNlXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZVRleHQ6IHN0cmluZykgPT4ge1xuICAgIFxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIH0pXG59XG5cblxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEFwYXJ0bWVudCgpOiBQcm9taXNlPHN0cmluZz5cbntcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuXG5cbiAgaWYodXJsUGFyYW1zKSB7XG5cbiAgICBjb25zdCBjaGVja0luRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNraW4nKSkgXG4gICAgY29uc3QgY2hlY2tPdXREYXRlOiBEYXRlID0gbmV3IERhdGUodXJsUGFyYW1zLmdldCgnY2hlY2tvdXQnKSlcbiAgICBjb25zdCBtYXhQcmljZTogc3RyaW5nIHwgbnVsbCA9IHVybFBhcmFtcy5nZXQoJ3ByaWNlJylcblxuICAgIGxldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDMwL3BsYWNlcz9jaGVja0luRGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja0luRGF0ZSl9JmNoZWNrT3V0RGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja091dERhdGUpfSZjb29yZGluYXRlcz01OS45Mzg2LDMwLjMxNDFgXG5cbiAgICBpZiAoK21heFByaWNlID4gMCkge1xuICAgICAgdXJsICs9IGAmbWF4UHJpY2U9JHttYXhQcmljZX1gXG4gICAgfVxuICAgIFxuXG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ9Cd0LXRgiDQsNC/0LDRgNGC0LDQvNC10L3RgtC+0LIg0L/QviDRg9C60LDQt9Cw0L3QvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNCw0LwnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIFxuXG5cbiAgICAgIFxuICAgICAgXG5cbiAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBsZXQgc3RyID0gJzxkaXYgY2xhc3M9XCJzZWFyY2gtbGlzdC1ibG9ja1wiPjx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdFwiPidcblxuICAgICAgICBkYXRhLmZvckVhY2goKHJlc3VsdF8yOiB7IHByaWNlOiBudW1iZXI7IGlkOiBzdHJpbmc7IGltYWdlOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgcmVtb3RlbmVzczogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0pID0+IHtcblxuICAgICAgICAgIGxldCBhY3RpdmUgPSAnJztcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobG9jYWxTLmdldCgnZmF2b3JpdGVJdGVtcycpICE9IG51bGwpIHtcblxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFMuZ2V0KCdmYXZvcml0ZUl0ZW1zJykpLmZvckVhY2goKGZhdm9yaXRlOiBURmF2b3JpdGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGZhdm9yaXRlLmlkID09PSByZXN1bHRfMi5pZC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgXG4gICAgICAgICAgaWYgKCttYXhQcmljZSA+PSByZXN1bHRfMi5wcmljZSB8fCArbWF4UHJpY2UgPCAxKSB7XG4gIFxuICAgICAgICAgICAgc3RyICs9IGA8bGkgaWQ9XCJib29rXyR7cmVzdWx0XzIuaWR9XCIgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgJHthY3RpdmV9XCIgZGF0YS1mYXY9XCIke3Jlc3VsdF8yLmlkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIke3Jlc3VsdF8yLmltYWdlfVwiIGFsdD1cIiR7cmVzdWx0XzIubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXN1bHRfMi5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7cmVzdWx0XzIucHJpY2V9JiM4MzgxOzwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAke3Jlc3VsdF8yLnJlbW90ZW5lc3N90LrQvCDQvtGCINCy0LDRgTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cmVzdWx0XzIuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHN0ciArPSAnPC91bD48L2Rpdj4nXG4gIFxuICAgICAgICByZXR1cm4gc3RyXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICc8cCBjbGFzcz1cInBhZGRpbmdlZCBjZW50ZXJlZFwiPtCd0LXRgiDQutCy0LDRgNGC0LjRgCDQsiDRgdC/0LjRgdC60LUsINC90LDQttC80LjRgtC1INC/0L7QuNGB0Lo8L3A+JztcbiAgICAgIH1cbiAgICBcbiAgICAgIFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5cblxuIl19