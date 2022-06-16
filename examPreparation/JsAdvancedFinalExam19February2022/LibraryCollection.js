class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }
    addBook (bookName, bookAuthor){
        if(this.capacity==0){
            throw new Error("Not enough space in the collection.")
        }
        this.books.push({bookName,bookAuthor,payed:false});
        this.capacity-=1;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let book = this.foundBook(bookName,`${bookName} is not in the collection.`);
        if(book.payed){
            throw new Error(`${bookName} has already been paid.`)
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let book = this.foundBook(bookName,`The book, you're looking for, is not found.`)
        if(!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection."`)
        }
        this.capacity-=1;
        this.books = this.books.filter(book => book.name != bookName)
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        if(bookAuthor){
            let book = this.books.filter(book=>book.bookAuthor == bookAuthor)[0]
            if(!book){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let paid = book.payed ?'Has Paid' :'Not Paid'
            return `${book.bookName} == ${bookAuthor} - ${paid}.`
        }
        else{
            let result = `The book collection has ${ this.capacity } empty spots left.\n`
            let books = []
            this.books = this.books.sort((a, b)=>(a.bookName).localeCompare(b.bookName));
            for(let book of this.books){
            let paid = book.payed ?'Has Paid' :'Not Paid'
                books.push(`${book.bookName} == ${book.bookAuthor} - ${paid}.`)
            }
            result += books.join('\n')
            return result;
        }
    }
    foundBook(name,mesage) {
        for(let book of this.books){
            if(book.bookName==name){
                return book;
            }
        }
        throw new Error(mesage)
    }
}


let library = new LibraryCollection(2);

console.log(library.addBook("In Search of Lost Time", "Marcel Proust"))
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.payBook('Don Quixote'));
console.log(library.removeBook('Don Quixote'))
