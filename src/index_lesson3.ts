


// import { Ratingable } from './ratingable.js'
// interface OptionalAuthor extends Partial<Ratingable> {
// // вопросительный знак означает не обязательное свойство
// // как и для аргументов функции
//   firstName?: string
//   lastName?: string
//   birthDate?: Date
//   booksWritten?: number
// }
// // можно описать только то, что нужно
// const OptionalAuthor: OptionalAuthor = {
//   rating: 5,
//   booksWritten: 10
// }
// // необходимо описать все свойства
// const fullAuthor: Required<OptionalAuthor> = {
//   firstName: 'J. K.',
//   lastName: 'Rowling',
//   birthDate: new Date(),
//   booksWritten: 15,
//   rating: 4.7
// }





import { Author } from './author.js'
import { Book } from './book.js'
import { Genre } from './types.js'
const author: Partial<Author> = {
  firstName: 'J. K',
  lastName: 'Rowling'
}

const book = new Book('Harry Potter', Genre.Fantasy, 100, author)

console.log(book)



// import { getBookInfo } from './google-books.js'
// const harryPotterIsbn = '9781408845646'
// getBookInfo(harryPotterIsbn)
// // здесь без дополнительных усилий тип автоматически выводится как Book
//   .then((book) => {
//     console.log(
//       book.volumeInfo.title,
//       book.volumeInfo.description,
//       book.volumeInfo.authors[0]
//     )
//   })
//   .catch((error) => {
//     console.error(error)
//   })




// import { Author } from './author.js'
// import { Book } from './book.js'
// import { Collection } from './collection'
// import { BookCollection, ProductCollection } from './book-collection.js'
// import { Notepad } from './notepad.js'
// import { Genre } from './types.js'



// const jkRowling: Author = {
//   firstName: 'J. K.',
//   lastName: 'Rowling',
//   rating: 4.6
// }


// const harryPotter = new Book('Harry Potter', Genre.Fantasy, 500, jkRowling)


// const magicCreatures = new Book('Magic Creatures', Genre.Fantasy, 340,
//   jkRowling
// )


// const unicornNotepad = new Notepad('Unicorn power', 30)


// // контекст работы с товарами
// const cart = new ProductCollection()
// cart.set(harryPotter.name, harryPotter)
// cart.set(magicCreatures.name, magicCreatures)
// cart.set(unicornNotepad.name, unicornNotepad)
// // контекст работы со списками книг
// const favoriteBooksShelf = new BookCollection()
// favoriteBooksShelf.set(harryPotter.name, harryPotter)
// favoriteBooksShelf.set(magicCreatures.name, magicCreatures)
// // уточнение типа коллекции
// function getSummary(collection: Collection<unknown>): string {
//   if (collection instanceof BookCollection) {
//     return `Total ${cart.size} books on the shelf.`
//   }
//   if (collection instanceof ProductCollection) {
//     return `Total ${cart.price}р. for ${cart.size} items.`
//   }
//   return 'No special summary for this kind of collection.'
// }

// console.log(getSummary(cart))
// console.log(getSummary(favoriteBooksShelf))





