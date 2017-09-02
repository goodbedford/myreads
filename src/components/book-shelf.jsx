import React from 'react';
import PropTypes from 'prop-types';

import Book from './book';

const getBookShelfItems = (books, onChangeCB) => {
    return books.map((book) => {
        return (
            <li key={book.id}>
                <Book
                    book={book}
                    onChangeBookShelfStatus={onChangeCB}
                    />
            </li>
        );
    });
};
const propTypes = {
    books: PropTypes.array.isRequired,
    isLoadingBookShelf: PropTypes.bool.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
    bookShelfTitle: PropTypes.string.isRequired
}
const BookShelf = ({ books, isLoadingBookShelf, onChangeBookShelfStatus, bookShelfTitle }) => {
    if (isLoadingBookShelf) {
        return <div>Loading…</div>;
    }

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookShelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {getBookShelfItems(books, onChangeBookShelfStatus)}
            </ol>
          </div>
        </div>
    )
}
BookShelf.propTypes = propTypes;

export default BookShelf;
