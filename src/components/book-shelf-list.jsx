import React from 'react';
import PropTypes from 'prop-types';

import { bookDisplayStatus } from '../constants/constants';
import * as utils from '../utils/book-shelf-util';
import BookShelf from './book-shelf';

const defaultProps = {
    lastTermSearched: ''
};

const propTypes = {
    books: PropTypes.array.isRequired,
    isLoading: PropTypes.object.isRequired,
    lastTermSearched: PropTypes.string,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
};

const BookShelfList = ({ books, isLoading, lastTermSearched, onChangeBookShelfStatus }) => {
    const currentlyReadingBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.CURRENTLY_READING.status);
    const wantToReadBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.WANT_TO_READ.status);
    const readBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.READ.status);

    return (
        <div className="list-books-content">
            <BookShelf
                books={currentlyReadingBooks}
                bookShelfTitle={bookDisplayStatus.CURRENTLY_READING.label}
                isLoading={isLoading}
                lastTermSearched={lastTermSearched}
                onChangeBookShelfStatus={onChangeBookShelfStatus}
            />
            <BookShelf
                books={wantToReadBooks}
                bookShelfTitle={bookDisplayStatus.WANT_TO_READ.label}
                isLoading={isLoading}
                lastTermSearched={lastTermSearched}
                onChangeBookShelfStatus={onChangeBookShelfStatus}
            />
            <BookShelf
                books={readBooks}
                bookShelfTitle={bookDisplayStatus.READ.label}
                isLoading={isLoading}
                lastTermSearched={lastTermSearched}
                onChangeBookShelfStatus={onChangeBookShelfStatus}
            />     
        </div>
    );
};
BookShelfList.defaultProps = defaultProps;
BookShelfList.propTypes = propTypes;

export default BookShelfList;
