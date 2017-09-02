import React from 'react';
import PropTypes from 'prop-types';

import SearchBooksBar from './search-books-bar';
import SearchBooksResults from './search-books-results';

import { bookDisplayStatus } from '../constants/constants';

const defaultProps = {
    bookShelfTitle: bookDisplayStatus.SEARCH_RESULTS.label
}

const propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfTitle: PropTypes.string,
    isLoading: PropTypes.object.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired,
    onChangeSearchInputText: PropTypes.func.isRequired,
    onSubmitSearchBooksBar: PropTypes.func.isRequired,
    searchInputText: PropTypes.string.isRequired,
    searchTerms: PropTypes.array.isRequired
};

const SearchBooks = ({
    books,
    bookShelfTitle,
    isLoading,
    onChangeBookShelfStatus,
    onChangeSearchInputText,
    onSubmitSearchBooksBar,
    searchInputText,
    searchTerms
}) => {

    if (isLoading['allBooks']) {
        return <div>Loading…</div>;
    }

    return (
        <div>
            <SearchBooksBar
                isLoading={isLoading}
                onChangeSearchInputText={onChangeSearchInputText}
                onSubmitSearchBooksBar={onSubmitSearchBooksBar}
                searchInputText={searchInputText}
                searchTerms={searchTerms}
            />
            <SearchBooksResults
                books={books}
                bookShelfTitle={bookShelfTitle}
                isLoadingBookShelf={false}
                onChangeBookShelfStatus={onChangeBookShelfStatus}
            />
        </div>
    )
};
SearchBooks.propTypes = propTypes;
SearchBooks.defaultProps = defaultProps;

export default SearchBooks;
