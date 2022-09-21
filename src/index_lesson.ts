
interface IBook {
  name: string;
  genre: string;
  pageAmount: number;
}

// type BookType = {
//   name: string;
//   genre: string;
//   pageAmount: number;
// }

class Book {

  name = ''
  genre = ''
  pageAmount = 0

  constructor({name, genre, pageAmount} : IBook) {
    this.name = name
    this.genre = genre
    this.pageAmount = pageAmount
  }
}


const books: Book[] = [
  new Book({
    name: 'Harry Potter', 
    genre: 'fantasy', 
    pageAmount: 980
  }),
//   new Book('Lord of the ring', 'fantasy', 1001),
//   new Book('How to be productive', 'lifestyle', 500),
//   new Book('Game of Thrones', 'fantasy', 999),
]


function findSuitableBook(genre: string, pagesLimit: number, multipleRecomendations = true): Book | Book[] | undefined {




  const findAlgorithm = (book: IBook) => {
    return book.genre == genre && book.pageAmount <= pagesLimit
  }

  // filter даст массив, find даст объект
  if (multipleRecomendations)
    return books.filter(findAlgorithm)
  else
    return books.find(findAlgorithm)

}


const recomendBook = findSuitableBook('fantasy', 1000)

if (recomendBook instanceof Book) {
  console.log(recomendBook.name)
}



console.log(findSuitableBook('fantasy', 1000, false))
console.log(findSuitableBook('fantasy', 1000))


// console.log('====')