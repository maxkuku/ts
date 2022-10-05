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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFJMUMsTUFBTSxVQUFVLHFCQUFxQjtJQUVuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLE1BQU0sYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU3RCxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLFlBQVk7SUFDckQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFJdkQsU0FBUyxpQkFBaUI7UUFFeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5RCxNQUFNLE9BQU8sR0FBb0I7WUFDL0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtZQUN2RSxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUN0RSxRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUM1RSxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUM1RCxDQUFBO1FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFFbkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUdELE1BQU0sT0FBTyxHQUFvQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3JELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7OzsyREFNdUQsT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7OzJEQVdaLE9BQU8sVUFBVSxPQUFPLFVBQVUsVUFBVTs7Ozs0REFJM0MsT0FBTyxDQUFDLFFBQVEsVUFBVSxVQUFVLFVBQVUsVUFBVTs7Ozt1REFJN0QsT0FBTyxDQUFDLEtBQUs7Ozs7Ozs7O0tBUS9ELENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgbG9jYWxTIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnXG5pbXBvcnQgeyBJU2VhcmNoRm9ybURhdGEgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2sgKCkge1xuXG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXRlUGx1czJfT2JqID0gbmV3IERhdGUoK2RhdGVPYmogKyAyKjg2NDAwMDAwKTtcblxuICBjb25zdCBtaW5EYXRlID0gZGF0ZU9iai50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7XG4gIGNvbnN0IGN1ckRhdGUgPSBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKTtcbiAgY29uc3QgbWluT3V0RGF0ZSA9IGRhdGVQbHVzMl9PYmoudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpO1xuICBcbiAgZGF0ZU9iai5zZXRNb250aChkYXRlT2JqLmdldE1vbnRoKCkgKyAyKSAvLyArIDEgbW9udGhcbiAgZGF0ZU9iai5zZXREYXRlKDApO1xuXG4gIGNvbnN0IG1heE91dERhdGUgPSBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKTtcblxuXG5cbiAgZnVuY3Rpb24gZ2V0U2VhcmNoRm9ybURhdGEoKSB7XG4gICAgXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBcbiAgICBjb25zdCBzdG9yYWdlOiBJU2VhcmNoRm9ybURhdGEgPSB7XG4gICAgICBjaXR5OiB1cmxQYXJhbXMuZ2V0KCdjaXR5JykgPyB1cmxQYXJhbXMuZ2V0KCdjaXR5JykgOiAn0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMnLFxuICAgICAgY2hlY2tpbjogdXJsUGFyYW1zLmdldCgnY2hlY2tpbicpID8gdXJsUGFyYW1zLmdldCgnY2hlY2tpbicpIDogY3VyRGF0ZSxcbiAgICAgIGNoZWNrb3V0OiB1cmxQYXJhbXMuZ2V0KCdjaGVja291dCcpID8gdXJsUGFyYW1zLmdldCgnY2hlY2tvdXQnKSA6IG1pbk91dERhdGUsXG4gICAgICBwcmljZTogdXJsUGFyYW1zLmdldCgncHJpY2UnKSA/IHVybFBhcmFtcy5nZXQoJ3ByaWNlJykgOiAnJyxcbiAgICB9XG5cbiAgICBsb2NhbFMuc2V0KCdzZWFyY2hQYXJhbXMnLCBzdG9yYWdlKVxuXG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH1cblxuXG4gIGNvbnN0IHN0b3JhZ2U6IElTZWFyY2hGb3JtRGF0YSA9IGdldFNlYXJjaEZvcm1EYXRhKCk7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwiJHtzdG9yYWdlLmNpdHl9XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y3VyRGF0ZX1cIiBtaW49XCIke21pbkRhdGV9XCIgbWF4PVwiJHttYXhPdXREYXRlfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7c3RvcmFnZS5jaGVja291dH1cIiBtaW49XCIke21pbk91dERhdGV9XCIgbWF4PVwiJHttYXhPdXREYXRlfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtzdG9yYWdlLnByaWNlfVwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIG9uY2xpY2s9XCJnZXRTZWFyY2hGb3JtRGF0YSgpXCI+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuXG5cblxuXG5cbiJdfQ==