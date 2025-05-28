const library = {
  books: [
    { 
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      year: 1937,
      id: 1 
    }
  ],

  addBook(book) {
    if (!book.title || typeof book.title !== 'string') return false;
    if (!book.author || typeof book.author !== 'string') return false;
    if (!book.year || typeof book.year !== 'number' || book.year > new Date().getFullYear()) return false;

    const newId = this.books.length > 0 
      ? Math.max(...this.books.map(b => b.id)) + 1 
      : 1;
    
    this.books.push({ ...book, id: newId });
    return true;
  },

  findBookByTitle(title) {
    if (!title || typeof title !== 'string') return null;
    return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
  },

  removeBook(title) {
    if (!title || typeof title !== 'string') return false;
    const index = this.books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
};

console.log("Initial book count:", library.books.length);
library.addBook({ author: "George Orwell", year: 1949 });
console.log("Book count after invalid addition:", library.books.length);
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log("Book count after valid addition:", library.books.length);
const foundBook = library.findBookByTitle("the hobbit");
console.log("Found book:", foundBook?.title);
library.removeBook("1984");
console.log("Book count after removal:", library.books.length);
