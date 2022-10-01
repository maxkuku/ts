

import { renderSearchFormBlock } from './search-form.js'
import { renderSearchResultsBlock } from './search-results.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { toggleFavoriteItem } from './toggleFavorites.js'




window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock()
  renderSearchFormBlock()
  renderSearchStubBlock()

  renderSearchResultsBlock()

  // renderToast(
  //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )

  toggleFavoriteItem()

})

