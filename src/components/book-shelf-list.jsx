import React from 'react';
import PropTypes from 'prop-types';

import { bookDisplayStatus } from '../constants/constants';
import * as utils from '../utils/book-shelf-util';
import BookShelf from './book-shelf';

const propTypes = {
    books: PropTypes.array.isRequired,
    isLoading: PropTypes.object.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
};

const BookShelfList = ({ books, isLoading, onChangeBookShelfStatus }) => {
    const currentlyReadingBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.CURRENTLY_READING.status);
    const wantToReadBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.WANT_TO_READ.status);
    const readBooks = utils.getBookByShelfStatus(books, bookDisplayStatus.READ.status);

    if (isLoading['allBooks']) {
        return <div>Loading…</div>;
    }

    return (
        <div className="list-books-content">
              <BookShelf
                 books={currentlyReadingBooks}
                 isLoadingBookShelf={false}
                 onChangeBookShelfStatus={onChangeBookShelfStatus}
                 bookShelfTitle={bookDisplayStatus.CURRENTLY_READING.label}
                 />
             <BookShelf
                 books={wantToReadBooks}
                 isLoadingBookShelf={false}
                 onChangeBookShelfStatus={onChangeBookShelfStatus}
                 bookShelfTitle={bookDisplayStatus.WANT_TO_READ.label}
                 />
             <BookShelf
                 books={readBooks}
                 isLoadingBookShelf={false}
                 onChangeBookShelfStatus={onChangeBookShelfStatus}
                 bookShelfTitle={bookDisplayStatus.READ.label}
                 />
        </div>
    )
};
BookShelfList.propTypes = propTypes;

export default BookShelfList;
