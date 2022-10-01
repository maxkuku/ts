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
            if (maxPrice != null) {
                url += `&maxPrice=${maxPrice}`;
            }
            const response = yield fetch(url);
            const responseText = yield response.text();
            const data = JSON.parse(responseText);
            if (!data) {
                throw Error('Нет апартаментов по указанным параметрам');
            }
            else {
                let str = '<div class="search-list-block"><ul class="results-list">';
                data.forEach((result_2) => {
                    let active = '';
                    // console.log(JSON.parse(localS.get('favoriteItems')).id)
                    if (localS.get('favoriteItems') && JSON.parse(localS.get('favoriteItems')).id === result_2.id.toString())
                        active = 'active';
                    if (+maxPrice >= result_2.price) {
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
        }
    });
}
export function book(placeId, checkInDate, checkOutDate) {
    return responseToJson(fetch(`http://localhost:3030/places/${placeId}?` +
        `checkInDate=${dateToUnixStamp(checkInDate)}&` +
        `checkOutDate=${dateToUnixStamp(checkOutDate)}&`, { method: 'PATCH' }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFrQjFDLFNBQVMsZUFBZSxDQUFDLElBQVU7SUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFBO0FBQzlCLENBQUM7QUFHRCxTQUFTLGNBQWMsQ0FBQyxjQUFjO0lBQ3BDLE9BQU8sY0FBYztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUVqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtRQUVyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBTUQsTUFBTSxVQUFnQixlQUFlOztRQUVuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSTlELElBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFFbEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1lBQ3RELE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtZQUN4RCxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXZDLElBQUksR0FBRyxHQUFHLDRDQUE0QyxlQUFlLENBQUMsV0FBVyxDQUFDLGlCQUFpQixlQUFlLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFBO1lBRTlKLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDcEIsR0FBRyxJQUFJLGFBQWEsUUFBUSxFQUFFLENBQUE7YUFDL0I7WUFJRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNqQyxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQTthQUN4RDtpQkFDSTtnQkFDSCxJQUFJLEdBQUcsR0FBRywwREFBMEQsQ0FBQTtnQkFNcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQTZHLEVBQUUsRUFBRTtvQkFFN0gsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNoQiwwREFBMEQ7b0JBQzFELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7d0JBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQTtvQkFHM0gsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO3dCQUUvQixHQUFHLElBQUksZ0JBQWdCLFFBQVEsQ0FBQyxFQUFFOzs7d0NBR0osTUFBTSxlQUFlLFFBQVEsQ0FBQyxFQUFFOytDQUN6QixRQUFRLENBQUMsS0FBSyxVQUFVLFFBQVEsQ0FBQyxJQUFJOzs7O3VCQUk3RCxRQUFRLENBQUMsSUFBSTtxQ0FDQyxRQUFRLENBQUMsS0FBSzs7eUVBRXNCLFFBQVEsQ0FBQyxVQUFVO2tEQUMxQyxRQUFRLENBQUMsV0FBVzs7OzRDQUcxQixRQUFRLENBQUMsRUFBRTs7Ozs7Z0JBS3ZDLENBQUE7cUJBQ1A7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsR0FBRyxJQUFJLGFBQWEsQ0FBQTtnQkFFcEIsT0FBTyxHQUFHLENBQUE7YUFHWDtTQUNGO0lBQ0gsQ0FBQztDQUFBO0FBR0QsTUFBTSxVQUFVLElBQUksQ0FBQyxPQUF3QixFQUFFLFdBQWlCLEVBQUUsWUFBa0I7SUFDbEYsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUN6QixnQ0FBZ0MsT0FBTyxHQUFHO1FBQzFDLGVBQWUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHO1FBQzlDLGdCQUFnQixlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFDaEQsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQ2xCLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGxvY2FsUyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJ1xuLy9pbXBvcnQgeyB0b2dnbGVGYXZvcml0ZUl0ZW0gfSBmcm9tICcuL3RvZ2dsZUZhdm9yaXRlcy5qcydcblxuXG5leHBvcnQgaW50ZXJmYWNlIElBcGFydFJlc3BvbnNlIHtcbiAgaWQ/OiBudW1iZXJcbiAgbmFtZT86IHN0cmluZ1xuICBpbWFnZT86IHN0cmluZ1xuICBwcmljZT86IG51bWJlclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICByZW1vdGVuZXNzPzogbnVtYmVyXG4gIGJvb2tlZERhdGVzPzoge1xuICAgIGNoZWNrSW46IERhdGVcbiAgICBjaGVja091dDogRGF0ZVxuICB9XG59XG5cblxuZnVuY3Rpb24gZGF0ZVRvVW5peFN0YW1wKGRhdGU6IERhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMFxufVxuXG5cbmZ1bmN0aW9uIHJlc3BvbnNlVG9Kc29uKHJlcXVlc3RQcm9taXNlKSB7XG4gIHJldHVybiByZXF1ZXN0UHJvbWlzZVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgXG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpXG4gICAgfSlcbn1cblxuXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQXBhcnRtZW50KCk6IFByb21pc2U8c3RyaW5nPlxue1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG5cblxuICBpZih1cmxQYXJhbXMuZ2V0KCdjaGVja2luJykgIT09ICcnKSB7XG5cbiAgICBjb25zdCBjaGVja0luRGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNraW4nKSkgXG4gICAgY29uc3QgY2hlY2tPdXREYXRlID0gbmV3IERhdGUodXJsUGFyYW1zLmdldCgnY2hlY2tvdXQnKSlcbiAgICBjb25zdCBtYXhQcmljZSA9IHVybFBhcmFtcy5nZXQoJ3ByaWNlJylcblxuICAgIGxldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDMwL3BsYWNlcz9jaGVja0luRGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja0luRGF0ZSl9JmNoZWNrT3V0RGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja091dERhdGUpfSZjb29yZGluYXRlcz01OS45Mzg2LDMwLjMxNDFgXG5cbiAgICBpZiAobWF4UHJpY2UgIT0gbnVsbCkge1xuICAgICAgdXJsICs9IGAmbWF4UHJpY2U9JHttYXhQcmljZX1gXG4gICAgfVxuICAgIFxuXG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ9Cd0LXRgiDQsNC/0LDRgNGC0LDQvNC10L3RgtC+0LIg0L/QviDRg9C60LDQt9Cw0L3QvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNCw0LwnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzdHIgPSAnPGRpdiBjbGFzcz1cInNlYXJjaC1saXN0LWJsb2NrXCI+PHVsIGNsYXNzPVwicmVzdWx0cy1saXN0XCI+J1xuXG5cbiAgICAgIFxuICAgICAgXG5cbiAgICAgIGRhdGEuZm9yRWFjaCgocmVzdWx0XzI6IHsgcHJpY2U6IG51bWJlcjsgaWQ6IHN0cmluZzsgaW1hZ2U6IHN0cmluZzsgbmFtZTogc3RyaW5nOyByZW1vdGVuZXNzOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfSkgPT4ge1xuXG4gICAgICAgIGxldCBhY3RpdmUgPSAnJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFMuZ2V0KCdmYXZvcml0ZUl0ZW1zJykpLmlkKVxuICAgICAgICBpZiAobG9jYWxTLmdldCgnZmF2b3JpdGVJdGVtcycpICYmIEpTT04ucGFyc2UobG9jYWxTLmdldCgnZmF2b3JpdGVJdGVtcycpKS5pZCA9PT0gcmVzdWx0XzIuaWQudG9TdHJpbmcoKSkgYWN0aXZlID0gJ2FjdGl2ZSdcbiAgICAgICAgICBcblxuICAgICAgICBpZiAoK21heFByaWNlID49IHJlc3VsdF8yLnByaWNlKSB7XG5cbiAgICAgICAgICBzdHIgKz0gYDxsaSBpZD1cImJvb2tfJHtyZXN1bHRfMi5pZH1cIiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhdm9yaXRlcyAke2FjdGl2ZX1cIiBkYXRhLWZhdj1cIiR7cmVzdWx0XzIuaWR9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIke3Jlc3VsdF8yLmltYWdlfVwiIGFsdD1cIiR7cmVzdWx0XzIubmFtZX1cIj5cbiAgICAgICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwPiR7cmVzdWx0XzIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtyZXN1bHRfMi5wcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtyZXN1bHRfMi5yZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtyZXN1bHRfMi5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwiYm9vaygke3Jlc3VsdF8yLmlkfSlcIj7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdHIgKz0gJzwvdWw+PC9kaXY+J1xuXG4gICAgICByZXR1cm4gc3RyXG5cbiAgICAgIFxuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBib29rKHBsYWNlSWQ6IHN0cmluZyB8IG51bWJlciwgY2hlY2tJbkRhdGU6IERhdGUsIGNoZWNrT3V0RGF0ZTogRGF0ZSkge1xuICByZXR1cm4gcmVzcG9uc2VUb0pzb24oZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXMvJHtwbGFjZUlkfT9gICtcbiAgICBgY2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZgICtcbiAgICBgY2hlY2tPdXREYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSl9JmAsXG4gICAge21ldGhvZDogJ1BBVENIJ31cbiAgKSk7XG59XG4iXX0=