import { renderBlock } from './lib.js';
import { searchApartment } from './search.js';
import { HomyProvider } from './store/providers/homy/homy-provider.js';
import { FlatProvider } from './store/providers/flatrent/flat-provider.js';
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock() {
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    `);
    searchApartment().then(data => {
        renderBlock('search-list-block', data);
    });
    const homy = new HomyProvider();
    const flat = new FlatProvider();
    const urlParams = new URLSearchParams(window.location.search);
    const checkInDate = new Date(urlParams.get('checkin'));
    const checkOutDate = new Date(urlParams.get('checkout'));
    const maxPrice = urlParams.get('price');
    const filter = {
        city: 'Санкт-Петербург',
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        maxPrice: +maxPrice,
        priceLimit: +maxPrice
    };
    function sortByPrice(one, two) {
        if (one.priceLimit > two.priceLimit) {
            return 1;
        }
        else if (one.priceLimit < two.priceLimit) {
            return -1;
        }
        else {
            return 0;
        }
    }
    Promise.all([
        homy.find(filter),
        flat.find(filter)
    ]).then((results) => {
        // мерджим все результаты в один
        const allResults = [].concat(results[0], results[1]);
        // работаем с ними как с единым целым
        allResults.sort(sortByPrice);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBSTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTtBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUE7QUFLMUUsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUUsYUFBcUI7SUFDbEUsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7O1dBR08sYUFBYTs7S0FFbkIsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUtELE1BQU0sVUFBVSx3QkFBd0I7SUFDdEMsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7Ozs7Ozs7O0tBWUMsQ0FDRixDQUFBO0lBR0QsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkIsSUFBSSxDQUNMLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUlGLE1BQU0sSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFDL0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUcvQixNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELE1BQU0sV0FBVyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUM1RCxNQUFNLFlBQVksR0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDOUQsTUFBTSxRQUFRLEdBQWtCLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFHdEQsTUFBTSxNQUFNLEdBQWlCO1FBQzNCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsWUFBWSxFQUFFLFlBQVk7UUFDMUIsUUFBUSxFQUFFLENBQUMsUUFBUTtRQUNuQixVQUFVLEVBQUUsQ0FBQyxRQUFRO0tBQ3RCLENBQUE7SUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUEyQixFQUFFLEdBQTJCO1FBRTNFLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxDQUFBO1NBQ1Q7YUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ1Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxDQUFBO1NBQ1Q7SUFDSCxDQUFDO0lBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNsQixnQ0FBZ0M7UUFDaEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEQscUNBQXFDO1FBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUIsQ0FBQyxDQUFDLENBQUE7QUFJSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IHNlYXJjaEFwYXJ0bWVudCB9IGZyb20gJy4vc2VhcmNoLmpzJ1xuXG5cbmltcG9ydCB7IFNlYXJjaEZpbHRlciB9IGZyb20gJy4vc3RvcmUvZG9tYWluL3NlYXJjaC1maWx0ZXIuanMnXG5pbXBvcnQgeyBIb215UHJvdmlkZXIgfSBmcm9tICcuL3N0b3JlL3Byb3ZpZGVycy9ob215L2hvbXktcHJvdmlkZXIuanMnXG5pbXBvcnQgeyBGbGF0UHJvdmlkZXIgfSBmcm9tICcuL3N0b3JlL3Byb3ZpZGVycy9mbGF0cmVudC9mbGF0LXByb3ZpZGVyLmpzJ1xuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoU3R1YkJsb2NrICgpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayAocmVhc29uTWVzc2FnZTogc3RyaW5nKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrICgpOiB2b2lkIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWZpbHRlclwiPjwvaT4g0KHQvtGA0YLQuNGA0L7QstCw0YLRjDo8L3NwYW4+XG4gICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC+0YDQvtCz0LjQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxuICBcbiAgXG4gIHNlYXJjaEFwYXJ0bWVudCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgcmVuZGVyQmxvY2soXG4gICAgICAnc2VhcmNoLWxpc3QtYmxvY2snLFxuICAgICAgZGF0YVxuICAgIClcbiAgfSlcblxuXG5cbiAgY29uc3QgaG9teSA9IG5ldyBIb215UHJvdmlkZXIoKVxuICBjb25zdCBmbGF0ID0gbmV3IEZsYXRQcm92aWRlcigpXG5cblxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBjaGVja0luRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNraW4nKSkgXG4gIGNvbnN0IGNoZWNrT3V0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNrb3V0JykpXG4gIGNvbnN0IG1heFByaWNlOiBzdHJpbmcgfCBudWxsID0gdXJsUGFyYW1zLmdldCgncHJpY2UnKVxuXG5cbiAgY29uc3QgZmlsdGVyOiBTZWFyY2hGaWx0ZXIgPSB7XG4gICAgY2l0eTogJ9Ch0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzJyxcbiAgICBjaGVja0luRGF0ZTogY2hlY2tJbkRhdGUsXG4gICAgY2hlY2tPdXREYXRlOiBjaGVja091dERhdGUsXG4gICAgbWF4UHJpY2U6ICttYXhQcmljZSxcbiAgICBwcmljZUxpbWl0OiArbWF4UHJpY2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRCeVByaWNlKG9uZTogeyBwcmljZUxpbWl0OiBudW1iZXIgfSwgdHdvOiB7IHByaWNlTGltaXQ6IG51bWJlciB9KSB7XG4gICBcbiAgICBpZiAob25lLnByaWNlTGltaXQgPiB0d28ucHJpY2VMaW1pdCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKG9uZS5wcmljZUxpbWl0IDwgdHdvLnByaWNlTGltaXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG5cbiAgUHJvbWlzZS5hbGwoW1xuICAgIGhvbXkuZmluZChmaWx0ZXIpLFxuICAgIGZsYXQuZmluZChmaWx0ZXIpXG4gIF0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAvLyDQvNC10YDQtNC20LjQvCDQstGB0LUg0YDQtdC30YPQu9GM0YLQsNGC0Ysg0LIg0L7QtNC40L1cbiAgICBjb25zdCBhbGxSZXN1bHRzID0gW10uY29uY2F0KHJlc3VsdHNbMF0sIHJlc3VsdHNbMV0pXG4gICAgLy8g0YDQsNCx0L7RgtCw0LXQvCDRgSDQvdC40LzQuCDQutCw0Log0YEg0LXQtNC40L3Ri9C8INGG0LXQu9GL0LxcbiAgICBhbGxSZXN1bHRzLnNvcnQoc29ydEJ5UHJpY2UpXG4gIH0pXG5cbiAgXG4gIFxufVxuIl19