import book from './Book.module.css';
import BookItem from './BookItem/BookItem';
import React from 'react';
const Book = (props) => {


    let booksElements = props.state.books.map(el => <BookItem name={el.name} author={el.author} />)
    let newBookElement = React.createRef()
    let addBook = () => {
        debugger
        let book = newBookElement.current.value
        props.addBook(book)
    }
    return (
        <div className={book.book}>
            <div>
                <textarea ref={newBookElement}></textarea>
                <button onClick={addBook}>search</button>
                {booksElements}
            </div>
        </div>
    );

}

export default Book

