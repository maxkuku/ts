import { responseToJson, dateToUnixStamp } from './search.js'
import { localS } from './localStorage.js'
import { renderToast } from './lib.js'
// import { TBook } from './types.js'



// const fetch = require('node-fetch')



// function searchForBooking(checkInDate: Date, checkOutDate: Date, maxPrice: number) {
//   let url = `http://localhost:3030/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`

//   if (maxPrice != null) {
//     url += `&maxPrice=${maxPrice}`
//   }

//   return responseToJson(fetch(url))
// }


export function book(placeId: string | number, checkInDate: Date | null, checkOutDate: Date | null) {

  

  if (placeId && checkInDate && checkOutDate) {

    const data = responseToJson(fetch(
      `http://localhost:3030/places/${placeId}?` +
      `checkInDate=${dateToUnixStamp(checkInDate)}&` +
      `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
      {method: 'PATCH'}
    ));

    if (data) {

      console.log(`booked: ${placeId}, chek in: ${checkInDate.getTime()}, check out: ${checkOutDate.getTime()}`)

      const bookRes = {
        'id': placeId, 
        'checkIn': checkInDate.getTime(), 
        'checkOut': checkOutDate.getTime()
      }

      localS.set('booked', bookRes )

      renderToast(
        { text: `Вы забронировали номер ${placeId} с ${new Date(checkInDate).toLocaleString('ru-RU')} по ${new Date(checkOutDate).toLocaleString('ru-RU')}`, type: 'success' },
        { name: 'Ок', handler: () => { console.log('Уведомление закрыто') } }
      )

    }

  }
  else {
    return false
  }



}



export function bookStart() {

  document.querySelectorAll('.result-info--footer button').forEach( (elt) => {
    elt.addEventListener('click', (ev: MouseEvent) => {

      

      const checkInDate: Date = new Date (document.getElementById('check-in-date').getAttribute('value') )
      const checkOutDate: Date = new Date ( document.getElementById('check-out-date').getAttribute('value') )

      
      const target = ev.target as Element;
      const placeId: string | number = target.closest('.result').getAttribute('id').substring(5);
      

      console.log(`${placeId}, ${checkInDate}, ${checkOutDate}`)
      book(placeId, checkInDate, checkOutDate);


      
    });
  });

}











