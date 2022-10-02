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
import { Book } from './book.js';
import { Genre } from './types.js';
const author = {
    firstName: 'J. K',
    lastName: 'Rowling'
};
const book = new Book('Harry Potter', Genre.Fantasy, 100, author);
console.log(book);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfbGVzc29uMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleF9sZXNzb24zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLCtDQUErQztBQUMvQyx5REFBeUQ7QUFDekQsMkRBQTJEO0FBQzNELGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsSUFBSTtBQUNKLHdDQUF3QztBQUN4QywyQ0FBMkM7QUFDM0MsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixJQUFJO0FBQ0oscUNBQXFDO0FBQ3JDLGlEQUFpRDtBQUNqRCx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLElBQUk7QUFPSixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBQ2hDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFDbEMsTUFBTSxNQUFNLEdBQW9CO0lBQzlCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0NBQ3BCLENBQUE7QUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFFakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUlqQixrREFBa0Q7QUFDbEQsMENBQTBDO0FBQzFDLCtCQUErQjtBQUMvQiwwRUFBMEU7QUFDMUUsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyxRQUFRO0FBQ1IsT0FBTztBQUNQLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsT0FBTztBQUtQLHVDQUF1QztBQUN2QyxtQ0FBbUM7QUFDbkMsNENBQTRDO0FBQzVDLDJFQUEyRTtBQUMzRSx5Q0FBeUM7QUFDekMscUNBQXFDO0FBSXJDLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLGdCQUFnQjtBQUNoQixJQUFJO0FBR0osOEVBQThFO0FBRzlFLHlFQUF5RTtBQUN6RSxjQUFjO0FBQ2QsSUFBSTtBQUdKLDBEQUEwRDtBQUcxRCxnQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLDBDQUEwQztBQUMxQyxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hELHNDQUFzQztBQUN0QyxrREFBa0Q7QUFDbEQsd0RBQXdEO0FBQ3hELDhEQUE4RDtBQUM5RCw4QkFBOEI7QUFDOUIsaUVBQWlFO0FBQ2pFLGdEQUFnRDtBQUNoRCxzREFBc0Q7QUFDdEQsTUFBTTtBQUNOLG1EQUFtRDtBQUNuRCw2REFBNkQ7QUFDN0QsTUFBTTtBQUNOLDZEQUE2RDtBQUM3RCxJQUFJO0FBRUosZ0NBQWdDO0FBQ2hDLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8vIGltcG9ydCB7IFJhdGluZ2FibGUgfSBmcm9tICcuL3JhdGluZ2FibGUuanMnXG4vLyBpbnRlcmZhY2UgT3B0aW9uYWxBdXRob3IgZXh0ZW5kcyBQYXJ0aWFsPFJhdGluZ2FibGU+IHtcbi8vIC8vINCy0L7Qv9GA0L7RgdC40YLQtdC70YzQvdGL0Lkg0LfQvdCw0Log0L7Qt9C90LDRh9Cw0LXRgiDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDRgdCy0L7QudGB0YLQstC+XG4vLyAvLyDQutCw0Log0Lgg0LTQu9GPINCw0YDQs9GD0LzQtdC90YLQvtCyINGE0YPQvdC60YbQuNC4XG4vLyAgIGZpcnN0TmFtZT86IHN0cmluZ1xuLy8gICBsYXN0TmFtZT86IHN0cmluZ1xuLy8gICBiaXJ0aERhdGU/OiBEYXRlXG4vLyAgIGJvb2tzV3JpdHRlbj86IG51bWJlclxuLy8gfVxuLy8gLy8g0LzQvtC20L3QviDQvtC/0LjRgdCw0YLRjCDRgtC+0LvRjNC60L4g0YLQviwg0YfRgtC+INC90YPQttC90L5cbi8vIGNvbnN0IE9wdGlvbmFsQXV0aG9yOiBPcHRpb25hbEF1dGhvciA9IHtcbi8vICAgcmF0aW5nOiA1LFxuLy8gICBib29rc1dyaXR0ZW46IDEwXG4vLyB9XG4vLyAvLyDQvdC10L7QsdGF0L7QtNC40LzQviDQvtC/0LjRgdCw0YLRjCDQstGB0LUg0YHQstC+0LnRgdGC0LLQsFxuLy8gY29uc3QgZnVsbEF1dGhvcjogUmVxdWlyZWQ8T3B0aW9uYWxBdXRob3I+ID0ge1xuLy8gICBmaXJzdE5hbWU6ICdKLiBLLicsXG4vLyAgIGxhc3ROYW1lOiAnUm93bGluZycsXG4vLyAgIGJpcnRoRGF0ZTogbmV3IERhdGUoKSxcbi8vICAgYm9va3NXcml0dGVuOiAxNSxcbi8vICAgcmF0aW5nOiA0Ljdcbi8vIH1cblxuXG5cblxuXG5pbXBvcnQgeyBBdXRob3IgfSBmcm9tICcuL2F1dGhvci5qcydcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnXG5pbXBvcnQgeyBHZW5yZSB9IGZyb20gJy4vdHlwZXMuanMnXG5jb25zdCBhdXRob3I6IFBhcnRpYWw8QXV0aG9yPiA9IHtcbiAgZmlyc3ROYW1lOiAnSi4gSycsXG4gIGxhc3ROYW1lOiAnUm93bGluZydcbn1cblxuY29uc3QgYm9vayA9IG5ldyBCb29rKCdIYXJyeSBQb3R0ZXInLCBHZW5yZS5GYW50YXN5LCAxMDAsIGF1dGhvcilcblxuY29uc29sZS5sb2coYm9vaylcblxuXG5cbi8vIGltcG9ydCB7IGdldEJvb2tJbmZvIH0gZnJvbSAnLi9nb29nbGUtYm9va3MuanMnXG4vLyBjb25zdCBoYXJyeVBvdHRlcklzYm4gPSAnOTc4MTQwODg0NTY0Nidcbi8vIGdldEJvb2tJbmZvKGhhcnJ5UG90dGVySXNibilcbi8vIC8vINC30LTQtdGB0Ywg0LHQtdC3INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0YUg0YPRgdC40LvQuNC5INGC0LjQvyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQstGL0LLQvtC00LjRgtGB0Y8g0LrQsNC6IEJvb2tcbi8vICAgLnRoZW4oKGJvb2spID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgIGJvb2sudm9sdW1lSW5mby50aXRsZSxcbi8vICAgICAgIGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvbixcbi8vICAgICAgIGJvb2sudm9sdW1lSW5mby5hdXRob3JzWzBdXG4vLyAgICAgKVxuLy8gICB9KVxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbi8vICAgfSlcblxuXG5cblxuLy8gaW1wb3J0IHsgQXV0aG9yIH0gZnJvbSAnLi9hdXRob3IuanMnXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuLy8gaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vY29sbGVjdGlvbidcbi8vIGltcG9ydCB7IEJvb2tDb2xsZWN0aW9uLCBQcm9kdWN0Q29sbGVjdGlvbiB9IGZyb20gJy4vYm9vay1jb2xsZWN0aW9uLmpzJ1xuLy8gaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gJy4vbm90ZXBhZC5qcydcbi8vIGltcG9ydCB7IEdlbnJlIH0gZnJvbSAnLi90eXBlcy5qcydcblxuXG5cbi8vIGNvbnN0IGprUm93bGluZzogQXV0aG9yID0ge1xuLy8gICBmaXJzdE5hbWU6ICdKLiBLLicsXG4vLyAgIGxhc3ROYW1lOiAnUm93bGluZycsXG4vLyAgIHJhdGluZzogNC42XG4vLyB9XG5cblxuLy8gY29uc3QgaGFycnlQb3R0ZXIgPSBuZXcgQm9vaygnSGFycnkgUG90dGVyJywgR2VucmUuRmFudGFzeSwgNTAwLCBqa1Jvd2xpbmcpXG5cblxuLy8gY29uc3QgbWFnaWNDcmVhdHVyZXMgPSBuZXcgQm9vaygnTWFnaWMgQ3JlYXR1cmVzJywgR2VucmUuRmFudGFzeSwgMzQwLFxuLy8gICBqa1Jvd2xpbmdcbi8vIClcblxuXG4vLyBjb25zdCB1bmljb3JuTm90ZXBhZCA9IG5ldyBOb3RlcGFkKCdVbmljb3JuIHBvd2VyJywgMzApXG5cblxuLy8gLy8g0LrQvtC90YLQtdC60YHRgiDRgNCw0LHQvtGC0Ysg0YEg0YLQvtCy0LDRgNCw0LzQuFxuLy8gY29uc3QgY2FydCA9IG5ldyBQcm9kdWN0Q29sbGVjdGlvbigpXG4vLyBjYXJ0LnNldChoYXJyeVBvdHRlci5uYW1lLCBoYXJyeVBvdHRlcilcbi8vIGNhcnQuc2V0KG1hZ2ljQ3JlYXR1cmVzLm5hbWUsIG1hZ2ljQ3JlYXR1cmVzKVxuLy8gY2FydC5zZXQodW5pY29ybk5vdGVwYWQubmFtZSwgdW5pY29ybk5vdGVwYWQpXG4vLyAvLyDQutC+0L3RgtC10LrRgdGCINGA0LDQsdC+0YLRiyDRgdC+INGB0L/QuNGB0LrQsNC80Lgg0LrQvdC40LNcbi8vIGNvbnN0IGZhdm9yaXRlQm9va3NTaGVsZiA9IG5ldyBCb29rQ29sbGVjdGlvbigpXG4vLyBmYXZvcml0ZUJvb2tzU2hlbGYuc2V0KGhhcnJ5UG90dGVyLm5hbWUsIGhhcnJ5UG90dGVyKVxuLy8gZmF2b3JpdGVCb29rc1NoZWxmLnNldChtYWdpY0NyZWF0dXJlcy5uYW1lLCBtYWdpY0NyZWF0dXJlcylcbi8vIC8vINGD0YLQvtGH0L3QtdC90LjQtSDRgtC40L/QsCDQutC+0LvQu9C10LrRhtC40Lhcbi8vIGZ1bmN0aW9uIGdldFN1bW1hcnkoY29sbGVjdGlvbjogQ29sbGVjdGlvbjx1bmtub3duPik6IHN0cmluZyB7XG4vLyAgIGlmIChjb2xsZWN0aW9uIGluc3RhbmNlb2YgQm9va0NvbGxlY3Rpb24pIHtcbi8vICAgICByZXR1cm4gYFRvdGFsICR7Y2FydC5zaXplfSBib29rcyBvbiB0aGUgc2hlbGYuYFxuLy8gICB9XG4vLyAgIGlmIChjb2xsZWN0aW9uIGluc3RhbmNlb2YgUHJvZHVjdENvbGxlY3Rpb24pIHtcbi8vICAgICByZXR1cm4gYFRvdGFsICR7Y2FydC5wcmljZX3RgC4gZm9yICR7Y2FydC5zaXplfSBpdGVtcy5gXG4vLyAgIH1cbi8vICAgcmV0dXJuICdObyBzcGVjaWFsIHN1bW1hcnkgZm9yIHRoaXMga2luZCBvZiBjb2xsZWN0aW9uLidcbi8vIH1cblxuLy8gY29uc29sZS5sb2coZ2V0U3VtbWFyeShjYXJ0KSlcbi8vIGNvbnNvbGUubG9nKGdldFN1bW1hcnkoZmF2b3JpdGVCb29rc1NoZWxmKSlcblxuXG5cblxuXG4iXX0=