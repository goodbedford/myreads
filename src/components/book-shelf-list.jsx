import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bookDisplayStatus } from '../constants/constants.js';
import * as utils from '../utils/book-shelf-util.js';
import BookShelf from './book-shelf.jsx';

const propTypes = {
    books: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
};

const BookShelfList = ({ books, isLoading, onChangeBookShelfStatus }) => {
        const currentlyReadingBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.CURRENTLY_READING.status);
        const wantToReadBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.WANT_TO_READ.status);
        const readBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.READ.status);
        
    return (
          <div className="list-books-content">
            <div>
             <BookShelf
                 books={currentlyReadingBooks}
                 isLoadingShelf={false}
                 onChangeBookShelfStatus={onChangeBookShelfStatus}
                 bookShelfTitle={bookDisplayStatus.CURRENTLY_READING.label}
                 />
             <BookShelf
                 books={wantToReadBooks}
                 isLoadingShelf={false}
                 onChangeBookShelfStatus={onChangeBookShelfStatus}
                 bookShelfTitle={bookDisplayStatus.WANT_TO_READ.label}
                 />
             <BookShelf
                 books={readBooks}
                 isLoadingShelf={false}
                 onChangeBookShelfStatus={onChangeBookShelfStatus}
                 bookShelfTitle={bookDisplayStatus.READ.label}
                 />
            </div>
          </div>
    )
};
BookShelfList.propTypes = propTypes;

export default BookShelfList;
