
import { localS } from './localStorage.js'



export function toggleFavoriteItem () {

  

  setTimeout( () => {
    document.querySelectorAll('[data-fav]').forEach((item) => {
      item.addEventListener('click', (event) => {

        // console.log(event.target instanceof HTMLDivElement)

        if (!(event.target instanceof HTMLDivElement)) {
          return;
        }

        const id = event.target.dataset.fav.toString()
        const favoriteItems: string | null = localS.get('favoriteItems');
        
        
        if (favoriteItems && JSON.parse(favoriteItems).id === id.toString()) {
          
          localS.remove('favoriteItems')
          event.target.classList.remove('active')
        }
        else { 
          
          localS.set('favoriteItems', 
            {'id': id, 
              'name': event.target.closest('.result-container').querySelectorAll('.result-info--header p')[0].textContent, 
              'image': event.target.closest('.result-container').querySelectorAll('.result-img')[0].getAttribute('src') });
          event.target.classList.add('active')
        }
      })
    })
  },1000)

}