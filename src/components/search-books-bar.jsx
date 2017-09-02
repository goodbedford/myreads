import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const defaultProps = {
    searchInputText: '',
    // searchTerms: []
};

const propTypes = {
    // onChangeSearchInputText: PropTypes.func,
    onSubmitSearchBooksBar: PropTypes.func,
    searchInputText: PropTypes.string.isRequired,
    searchTerms: PropTypes.array.isRequired
};

const SearchBooksBar = ({
        isLoading,
        onChangeSearchInputText,
        onSubmitSearchBooksBar,
        searchInputText,
        searchTerms
    }) => {
        // if (isLoading['allBooks']) {
        //     return <div>Loading…</div>;
        // }
        debugger;
    return (
        <div>
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                    >
                        Close
                </Link>
                <div className="search-books-input-wrapper">
                    <form onSubmit={onSubmitSearchBooksBar} >
                        <input
                            name='search-input'
                            onChange={(e) => onChangeSearchInputText(e)}
                            placeholder="Search by title or author"
                            value={searchInputText}
                            type="text"
                        />
                    <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div className="search-terms-wrapper">
                <p className='search-terms'>{searchTerms && searchTerms.join(", ")}</p>
            </div>
        </div>
    )
};

SearchBooksBar.propTypes = propTypes;
SearchBooksBar.defaultProps = defaultProps;

export default SearchBooksBar;
