import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './search-books-bar';

import { bookDisplayStatus } from '../constants/constants';

const defaultProps = {
    bookShelfTitle: bookDisplayStatus.SEARCH_RESULTS.label
}

const propTypes = {
    books: PropTypes.array.isRequired,
    isLoadingBookShelf: PropTypes.bool.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
    bookShelfTitle: PropTypes.string.isRequired
};

const SearchBooksResults = ({ books, bookShelfTitle, isLoadingBookShelf, onChangeBookShelfStatus }) => {

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                <BookShelf
                   books={books}
                   isLoadingBookShelf={false}
                   onChangeBookShelfStatus={onChangeBookShelfStatus}
                   bookShelfTitle={bookShelfTitle}
                   />
            </ol>
        </div>
    )
};
SearchBooksResults.propTypes = propTypes;
SearchBooksResults.defaultProps = defaultProps;

export default SearchBooksResults;
