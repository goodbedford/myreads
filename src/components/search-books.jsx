import React from 'react';
import PropTypes from 'prop-types';

import SearchBooksBar from './search-books-bar';
import SearchBooksResults from './search-books-results';

import { bookDisplayStatus } from '../constants/constants';
import * as utils from '../utils/book-shelf-util';

const defaultProps = {
    lastTermSearched: ''
};

const propTypes = {
    books: PropTypes.array.isRequired,
    isLoading: PropTypes.object.isRequired,
    lastTermSearched: PropTypes.string,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
    onChangeSearchInputText: PropTypes.func.isRequired,
    onSubmitSearchBooksBar: PropTypes.func.isRequired,
    searchInputText: PropTypes.string.isRequired,
    searchTerms: PropTypes.array.isRequired
};

const SearchBooks = (
    {
        books,
        isLoading,
        lastTermSearched,
        onChangeBookShelfStatus,
        onChangeSearchInputText,
        onSubmitSearchBooksBar,
        searchInputText,
        searchTerms
    }) => {

    const searchBooksResults = utils.getBookByShelfStatus(books, bookDisplayStatus.SEARCH_RESULTS.status);

    return (
        <div>
            <SearchBooksBar
                isLoading={isLoading}
                onChangeSearchInputText={onChangeSearchInputText}
                onSubmitSearchBooksBar={onSubmitSearchBooksBar}
                lastTermSearched={lastTermSearched}
                searchInputText={searchInputText}
                searchTerms={searchTerms}
            />
            <SearchBooksResults
                books={searchBooksResults}
                bookShelfTitle={bookDisplayStatus.SEARCH_RESULTS.label}
                isLoading={isLoading}
                lastTermSearched={lastTermSearched}
                onChangeBookShelfStatus={onChangeBookShelfStatus}
            />
        </div>
    );
};

SearchBooks.defaultProps = defaultProps;
SearchBooks.propTypes = propTypes;

export default SearchBooks;
