import React from 'react';
import PropTypes from 'prop-types';

import Book from './book';

const getBookShelfItems = (books, isLoading, onChangeCB) => {
    return books.map((book) => {
        return (
            <li key={book.id}>
                <Book
                    book={book}
                    isLoading={isLoading}
                    onChangeBookShelfStatus={onChangeCB}
                />
            </li>
        );
    });
};

const defaultProps = {
    lastTermSearched: ''
};

const propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfTitle: PropTypes.string.isRequired,
    isLoading: PropTypes.object.isRequired,
    lastTermSearched: PropTypes.string,
    onChangeBookShelfStatus: PropTypes.func.isRequired
};

const BookShelf = ({ books, isLoading, lastTermSearched, onChangeBookShelfStatus, bookShelfTitle }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle} <span className='label-number'>{books.length} </span><span>{lastTermSearched}</span> Books</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {getBookShelfItems(books, isLoading, onChangeBookShelfStatus)}
                </ol>
            </div>
        </div>
    );
};

BookShelf.defaultProps = defaultProps;
BookShelf.propTypes = propTypes;

export default BookShelf;
