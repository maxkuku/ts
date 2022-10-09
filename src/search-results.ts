import { renderBlock } from './lib.js'
import { searchApartment } from './search.js'


import { SearchFilter } from './store/domain/search-filter.js'
import { HomyProvider } from './store/providers/homy/homy-provider.js'
import { FlatProvider } from './store/providers/flatrent/flat-provider.js'




export function renderSearchStubBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock (reasonMessage: string) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}




export function renderSearchResultsBlock (): void {
  renderBlock(
    'search-results-block',
    `
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
    `
  )
  
  
  searchApartment().then(data => {
    renderBlock(
      'search-list-block',
      data
    )
  })



  const homy = new HomyProvider()
  const flat = new FlatProvider()


  const urlParams = new URLSearchParams(window.location.search);
  const checkInDate: Date = new Date(urlParams.get('checkin')) 
  const checkOutDate: Date = new Date(urlParams.get('checkout'))
  const maxPrice: string | null = urlParams.get('price')


  const filter: SearchFilter = {
    city: 'Санкт-Петербург',
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    maxPrice: +maxPrice,
    priceLimit: +maxPrice
  }

  function sortByPrice(one: { priceLimit: number }, two: { priceLimit: number }) {
   
    if (one.priceLimit > two.priceLimit) {
      return 1
    } else if (one.priceLimit < two.priceLimit) {
      return -1
    } else {
      return 0
    }
  }


  Promise.all([
    homy.find(filter),
    flat.find(filter)
  ]).then((results) => {
    // мерджим все результаты в один
    const allResults = [].concat(results[0], results[1])
    // работаем с ними как с единым целым
    allResults.sort(sortByPrice)
  })

  
  
}
