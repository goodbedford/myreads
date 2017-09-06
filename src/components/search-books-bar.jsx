import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const defaultProps = {
    searchInputText: '',
    lastTermSearched: ''
};

const propTypes = {
    lastTermSearched: PropTypes.string,
    onChangeSearchInputText: PropTypes.func,
    onSubmitSearchBooksBar: PropTypes.func,
    searchInputText: PropTypes.string.isRequired,
    searchTerms: PropTypes.array.isRequired
};

class SearchBooksBar extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (event) {
        this.props.onChangeSearchInputText(event);
    }

    onSubmit(event) {
        this.props.onSubmitSearchBooksBar(event);
    }

    render () {
        const {
            lastTermSearched,
            searchInputText,
            searchTerms
        } = this.props;

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
                        <form
                            id='search-form'
                            onSubmit={this.onSubmit}
                        >
                            <input
                                id='search-input'
                                name='search-input'
                                onChange={(e) => this.onChange(e)}
                                placeholder="Search by title or author"
                                type="text"
                                value={searchInputText}
                            />
                        </form>
                    </div>
                </div>
                <div className="search-terms-wrapper">
                    <p className='search-terms'>{searchTerms &&
                        searchTerms.map((term) => {
                            const lowerCaseTerm = term.toLowerCase();
                            if (lowerCaseTerm === lastTermSearched.toLowerCase()) {
                                return (
                                    <span
                                        className='search-term-text search-term-text-target'
                                        key={term}
                                    >
                                        {lowerCaseTerm}
                                    </span>
                                );
                            }
                            return (
                                <span
                                    className='search-term-text'
                                    key={term}
                                >
                                    {lowerCaseTerm}
                                </span>);
                        })}
                    </p>
                </div>
            </div>
        );
    }
}

SearchBooksBar.defaultProps = defaultProps;
SearchBooksBar.propTypes = propTypes;

export default SearchBooksBar;
