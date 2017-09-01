import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bookDisplayStatus } from '../constants/constants.js';
import * as utils from '../utils/book-shelf-util.js';

import Book from './book.jsx';

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
    isLoadingShelf: PropTypes.bool.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
    bookShelfTitle: PropTypes.string.isRequired
}
const BookShelf = ({ books, isLoadingShelf, onChangeBookShelfStatus, bookShelfTitle }) => {
    if (isLoadingShelf) {
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
