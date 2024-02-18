let state = {
    authorsPage: {
        authors: [
            { name: "name 1", surname: "surname1" },
            { name: "name 2", surname: "surname2" },
            { name: "name 3", surname: "surname3" }
        ]
    },
    booksPage: {
        books: [
            { name: "bookhyfh", author: "author1" },
            { name: "fyufyu", author: "author2" },
            { name: "yfyf", author: "author3" }
        ]
    },
    historyPage: {
        history: [
            { name: "yfyf", author: "author3", date: "2.02" },
            { name: "bookhyfh", author: "author1", date: "today" }
        ]
    }

}
export let addBook = (book) => {
    debugger
    let newBook = {
        name: book,
        author: "author"
    }
    state.booksPage.books.push(newBook)
}
export default state