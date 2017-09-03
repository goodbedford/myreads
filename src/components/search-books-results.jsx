import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './book-shelf';

import { bookDisplayStatus } from '../constants/constants';

const defaultProps = {
    bookShelfTitle: bookDisplayStatus.SEARCH_RESULTS.label,
    lastTermSearched: ''
};

const propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfTitle: PropTypes.string.isRequired,
    isLoading: PropTypes.object.isRequired,
    lastTermSearched: PropTypes.string.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired
};

const SearchBooksResults = ({ books, bookShelfTitle, isLoading, lastTermSearched, onChangeBookShelfStatus }) =>  {

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                <BookShelf
                    books={books}
                    bookShelfTitle={bookShelfTitle}
                    isLoading={isLoading}
                    lastTermSearched={lastTermSearched}
                    onChangeBookShelfStatus={onChangeBookShelfStatus}
                />
            </ol>
        </div>
    );
};

SearchBooksResults.defaultProps = defaultProps;
SearchBooksResults.propTypes = propTypes;

export default SearchBooksResults;
