var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { database } from './flat-rent-sdk.js';
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
                const textdb = database;
                if (data.length > 0 || textdb.length > 0) {
                    const textDbFormated = [];
                    textdb.forEach(text => {
                        textDbFormated.push({
                            id: text.id,
                            image: `/img/${text.photos[0]}`,
                            name: text.title,
                            description: text.details,
                            remoteness: 1,
                            price: text.price
                        });
                    });
                    const allResults = [].concat(data, textDbFormated);
                    console.log(allResults);
                    let str = '<div class="search-list-block"><ul class="results-list">';
                    allResults.forEach((result_2) => {
                        let active = '';
                        const favLocalVal = localS.get('favoriteItems');
                        if (favLocalVal != null) {
                            JSON.parse(favLocalVal).forEach((favorite) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBa0IxQyxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVU7SUFDeEMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFBO0FBQzlCLENBQUM7QUFHRCxNQUFNLFVBQVUsY0FBYyxDQUFDLGNBQWlDO0lBQzlELE9BQU8sY0FBYztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUVqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxZQUFvQixFQUFFLEVBQUU7UUFFN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQU1ELE1BQU0sVUFBZ0IsZUFBZTs7UUFFbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUk5RCxJQUFHLFNBQVMsRUFBRTtZQUVaLE1BQU0sV0FBVyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtZQUM1RCxNQUFNLFlBQVksR0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7WUFDOUQsTUFBTSxRQUFRLEdBQWtCLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFLdEQsSUFBSSxHQUFHLEdBQUcsNENBQTRDLGVBQWUsQ0FBQyxXQUFX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dCB7IGRhdGFiYXNlIH0gZnJvbSAnLi9mbGF0LXJlbnQtc2RrLmpzJ1xuaW1wb3J0IHsgbG9jYWxTIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnXG5pbXBvcnQgeyBURmF2b3JpdGUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwYXJ0UmVzcG9uc2Uge1xuICBpZD86IG51bWJlclxuICBuYW1lPzogc3RyaW5nXG4gIGltYWdlPzogc3RyaW5nXG4gIHByaWNlPzogbnVtYmVyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIHJlbW90ZW5lc3M/OiBudW1iZXJcbiAgYm9va2VkRGF0ZXM/OiB7XG4gICAgY2hlY2tJbjogRGF0ZVxuICAgIGNoZWNrT3V0OiBEYXRlXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVW5peFN0YW1wKGRhdGU6IERhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zZVRvSnNvbihyZXF1ZXN0UHJvbWlzZTogUHJvbWlzZTxSZXNwb25zZT4pOiBvYmplY3Qge1xuICByZXR1cm4gcmVxdWVzdFByb21pc2VcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIFxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpXG4gICAgfSlcbn1cblxuXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQXBhcnRtZW50KCk6IFByb21pc2U8c3RyaW5nPlxue1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG5cblxuICBpZih1cmxQYXJhbXMpIHtcblxuICAgIGNvbnN0IGNoZWNrSW5EYXRlOiBEYXRlID0gbmV3IERhdGUodXJsUGFyYW1zLmdldCgnY2hlY2tpbicpKSBcbiAgICBjb25zdCBjaGVja091dERhdGU6IERhdGUgPSBuZXcgRGF0ZSh1cmxQYXJhbXMuZ2V0KCdjaGVja291dCcpKVxuICAgIGNvbnN0IG1heFByaWNlOiBzdHJpbmcgfCBudWxsID0gdXJsUGFyYW1zLmdldCgncHJpY2UnKVxuXG4gICAgXG5cblxuICAgIGxldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDMwL3BsYWNlcz9jaGVja0luRGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja0luRGF0ZSl9JmNoZWNrT3V0RGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja091dERhdGUpfSZjb29yZGluYXRlcz01OS45Mzg2LDMwLjMxNDFgXG5cbiAgICBpZiAoK21heFByaWNlID4gMCkge1xuICAgICAgdXJsICs9IGAmbWF4UHJpY2U9JHttYXhQcmljZX1gXG4gICAgfVxuICAgIFxuXG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ9Cd0LXRgiDQsNC/0LDRgNGC0LDQvNC10L3RgtC+0LIg0L/QviDRg9C60LDQt9Cw0L3QvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNCw0LwnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIFxuXG4gICAgICBjb25zdCB0ZXh0ZGIgPSBkYXRhYmFzZVxuICAgICAgXG4gICAgICBcblxuICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCB8fCB0ZXh0ZGIubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGNvbnN0IHRleHREYkZvcm1hdGVkOiBvYmplY3RbXSA9IFtdXG4gICAgICAgIHRleHRkYi5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICAgIHRleHREYkZvcm1hdGVkLnB1c2goe1xuICAgICAgICAgICAgaWQ6IHRleHQuaWQsXG4gICAgICAgICAgICBpbWFnZTogYC9pbWcvJHt0ZXh0LnBob3Rvc1swXX1gLFxuICAgICAgICAgICAgbmFtZTogdGV4dC50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0ZXh0LmRldGFpbHMsXG4gICAgICAgICAgICByZW1vdGVuZXNzOiAxLFxuICAgICAgICAgICAgcHJpY2U6IHRleHQucHJpY2VcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbXS5jb25jYXQoZGF0YSwgdGV4dERiRm9ybWF0ZWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFJlc3VsdHMpXG5cbiAgICAgICAgbGV0IHN0ciA9ICc8ZGl2IGNsYXNzPVwic2VhcmNoLWxpc3QtYmxvY2tcIj48dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3RcIj4nXG5cbiAgICAgICAgYWxsUmVzdWx0cy5mb3JFYWNoKChyZXN1bHRfMjogeyBwcmljZTogbnVtYmVyOyBpZDogc3RyaW5nOyBpbWFnZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IHJlbW90ZW5lc3M6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9KSA9PiB7XG5cbiAgICAgICAgICBsZXQgYWN0aXZlID0gJyc7XG4gICAgICAgICAgY29uc3QgZmF2TG9jYWxWYWw6IGFueSA9IGxvY2FsUy5nZXQoJ2Zhdm9yaXRlSXRlbXMnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZmF2TG9jYWxWYWwgIT0gbnVsbCkge1xuXG5cbiAgICAgICAgICAgIEpTT04ucGFyc2UoZmF2TG9jYWxWYWwpLmZvckVhY2goKGZhdm9yaXRlOiBURmF2b3JpdGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGZhdm9yaXRlLmlkID09PSByZXN1bHRfMi5pZC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgXG4gICAgICAgICAgaWYgKCttYXhQcmljZSA+PSByZXN1bHRfMi5wcmljZSB8fCArbWF4UHJpY2UgPCAxKSB7XG4gIFxuICAgICAgICAgICAgc3RyICs9IGA8bGkgaWQ9XCJib29rXyR7cmVzdWx0XzIuaWR9XCIgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgJHthY3RpdmV9XCIgZGF0YS1mYXY9XCIke3Jlc3VsdF8yLmlkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIke3Jlc3VsdF8yLmltYWdlfVwiIGFsdD1cIiR7cmVzdWx0XzIubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXN1bHRfMi5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7cmVzdWx0XzIucHJpY2V9JiM4MzgxOzwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAke3Jlc3VsdF8yLnJlbW90ZW5lc3N90LrQvCDQvtGCINCy0LDRgTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cmVzdWx0XzIuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHN0ciArPSAnPC91bD48L2Rpdj4nXG4gIFxuICAgICAgICByZXR1cm4gc3RyXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICc8cCBjbGFzcz1cInBhZGRpbmdlZCBjZW50ZXJlZFwiPtCd0LXRgiDQutCy0LDRgNGC0LjRgCDQsiDRgdC/0LjRgdC60LUsINC90LDQttC80LjRgtC1INC/0L7QuNGB0Lo8L3A+JztcbiAgICAgIH1cbiAgICBcbiAgICAgIFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5cblxuIl19