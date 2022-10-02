import { renderBlock } from './lib.js';
import { localS } from './localStorage.js';
export function renderSearchFormBlock() {
    const dateObj = new Date();
    const datePlus2_Obj = new Date(+dateObj + 2 * 86400000);
    const minDate = dateObj.toLocaleDateString('en-CA');
    const curDate = dateObj.toLocaleDateString('en-CA');
    const minOutDate = datePlus2_Obj.toLocaleDateString('en-CA');
    dateObj.setMonth(dateObj.getMonth() + 2); // + 1 month
    dateObj.setDate(0);
    const maxOutDate = dateObj.toLocaleDateString('en-CA');
    function getSearchFormData() {
        const urlParams = new URLSearchParams(window.location.search);
        const storage = {
            city: urlParams.get('city') ? urlParams.get('city') : 'Санкт-Петербург',
            checkin: urlParams.get('checkin') ? urlParams.get('checkin') : curDate,
            checkout: urlParams.get('checkout') ? urlParams.get('checkout') : minOutDate,
            price: urlParams.get('price') ? urlParams.get('price') : '',
        };
        localS.set('searchParams', storage);
        return storage;
    }
    const storage = getSearchFormData();
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="${storage.city}" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${curDate}" min="${minDate}" max="${maxOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${storage.checkout}" min="${minOutDate}" max="${maxOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="${storage.price}" name="price" class="max-price" />
          </div>
          <div>
            <div><button onclick="getSearchFormData()">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFHMUMsTUFBTSxVQUFVLHFCQUFxQjtJQUVuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLE1BQU0sYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU3RCxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLFlBQVk7SUFDckQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFjdkQsU0FBUyxpQkFBaUI7UUFFeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5RCxNQUFNLE9BQU8sR0FBb0I7WUFDL0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtZQUN2RSxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUN0RSxRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUM1RSxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUM1RCxDQUFBO1FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFFbkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUdELE1BQU0sT0FBTyxHQUFvQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3JELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7OzsyREFNdUQsT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7OzJEQVdaLE9BQU8sVUFBVSxPQUFPLFVBQVUsVUFBVTs7Ozs0REFJM0MsT0FBTyxDQUFDLFFBQVEsVUFBVSxVQUFVLFVBQVUsVUFBVTs7Ozt1REFJN0QsT0FBTyxDQUFDLEtBQUs7Ozs7Ozs7O0tBUS9ELENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgbG9jYWxTIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayAoKSB7XG5cbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGVQbHVzMl9PYmogPSBuZXcgRGF0ZSgrZGF0ZU9iaiArIDIqODY0MDAwMDApO1xuXG4gIGNvbnN0IG1pbkRhdGUgPSBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKTtcbiAgY29uc3QgY3VyRGF0ZSA9IGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpO1xuICBjb25zdCBtaW5PdXREYXRlID0gZGF0ZVBsdXMyX09iai50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7XG4gIFxuICBkYXRlT2JqLnNldE1vbnRoKGRhdGVPYmouZ2V0TW9udGgoKSArIDIpIC8vICsgMSBtb250aFxuICBkYXRlT2JqLnNldERhdGUoMCk7XG5cbiAgY29uc3QgbWF4T3V0RGF0ZSA9IGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpO1xuXG5cblxuXG4gIGludGVyZmFjZSBJU2VhcmNoRm9ybURhdGEge1xuICAgIGNpdHk/OiBzdHJpbmcsXG4gICAgY2hlY2tpbj86IHN0cmluZyxcbiAgICBjaGVja291dD86IHN0cmluZyxcbiAgICBwcmljZT86IG51bWJlciB8IHN0cmluZyxcbiAgfVxuXG5cblxuICBmdW5jdGlvbiBnZXRTZWFyY2hGb3JtRGF0YSgpIHtcbiAgICBcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIFxuICAgIGNvbnN0IHN0b3JhZ2U6IElTZWFyY2hGb3JtRGF0YSA9IHtcbiAgICAgIGNpdHk6IHVybFBhcmFtcy5nZXQoJ2NpdHknKSA/IHVybFBhcmFtcy5nZXQoJ2NpdHknKSA6ICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsycsXG4gICAgICBjaGVja2luOiB1cmxQYXJhbXMuZ2V0KCdjaGVja2luJykgPyB1cmxQYXJhbXMuZ2V0KCdjaGVja2luJykgOiBjdXJEYXRlLFxuICAgICAgY2hlY2tvdXQ6IHVybFBhcmFtcy5nZXQoJ2NoZWNrb3V0JykgPyB1cmxQYXJhbXMuZ2V0KCdjaGVja291dCcpIDogbWluT3V0RGF0ZSxcbiAgICAgIHByaWNlOiB1cmxQYXJhbXMuZ2V0KCdwcmljZScpID8gdXJsUGFyYW1zLmdldCgncHJpY2UnKSA6ICcnLFxuICAgIH1cblxuICAgIGxvY2FsUy5zZXQoJ3NlYXJjaFBhcmFtcycsIHN0b3JhZ2UpXG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfVxuXG5cbiAgY29uc3Qgc3RvcmFnZTogSVNlYXJjaEZvcm1EYXRhID0gZ2V0U2VhcmNoRm9ybURhdGEoKTtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCIke3N0b3JhZ2UuY2l0eX1cIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjdXJEYXRlfVwiIG1pbj1cIiR7bWluRGF0ZX1cIiBtYXg9XCIke21heE91dERhdGV9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtzdG9yYWdlLmNoZWNrb3V0fVwiIG1pbj1cIiR7bWluT3V0RGF0ZX1cIiBtYXg9XCIke21heE91dERhdGV9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3N0b3JhZ2UucHJpY2V9XCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gb25jbGljaz1cImdldFNlYXJjaEZvcm1EYXRhKClcIj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG59XG5cblxuXG5cblxuIl19