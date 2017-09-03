import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import BookShelfList from './components/book-shelf-list';
import SearchBooks from './components/search-books';
import SearchButton from './components/search-button';

import { bookDisplayStatus, sizes } from './constants/constants';
import searchTerms from './data/search-terms.json';

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: { [bookDisplayStatus.ALL_BOOKS.status]: true },
            searchBooksResults: [],
            searchInputText: '',
            lastTermSearched: ''
        };
        this.onChangeBookShelfStatus = this.onChangeBookShelfStatus.bind(this);
        this.onChangeSearchInputText = this.onChangeSearchInputText.bind(this);
        this.onSubmitSearchBooksBar = this.onSubmitSearchBooksBar.bind(this);
    }

    changeShelfStatus (status, book) {
        const searchBooks = this.state.searchBooksResults.filter((searchBook) => searchBook.id !== book.id);

        this.setState((prevState) => {
            prevState.isLoading[book.id] = true;
            return prevState;
        });

        BooksAPI.update(book, status)
          .then((updatedBookIds) => {
              BooksAPI.getAll()
                .then((books) => {
                    this.setState((prevState) => {
                        prevState.isLoading[book.id] = false;
                        return {
                            books,
                            isLoading: prevState.isLoading,
                            searchBooksResults: searchBooks
                        };
                    });
                });
          });
    }

    componentDidMount () {
        BooksAPI.getAll()
            .then((books) => {
                const { isLoading } = this.state;
                const { status } = bookDisplayStatus.ALL_BOOKS;
                isLoading[status] = false;
                this.setState({
                    books,
                    isLoading
                });
            });
    }

    onChangeBookShelfStatus (event, book) {
        const { value:status } = event.target;
        this.changeShelfStatus(status, book);
    }

    onChangeSearchInputText (event) {
        const { value } = event.target;
        this.setState({
            searchInputText: value,
        });
    }

    onSubmitSearchBooksBar () {
        const { searchInputText } = this.state;
        const { MAX_RESULTS } = sizes;

        BooksAPI.search(searchInputText, MAX_RESULTS)
            .then((bookResults) => {
                const lastTermSearched = searchInputText;
                this.setState({
                    lastTermSearched,
                    searchBooksResults: bookResults,
                    searchInputText: ''
                });
            });
    }

    render() {
        const { status } = bookDisplayStatus.ALL_BOOKS;

        if (this.state.isLoading[status]) {
            return (<div className='loadingAllBooks'>Loading…</div>);
        }

        return (
            <div className="app">
                <Route
                    exact
                    path='/search-books'
                    render={() => (
                        <div>
                        <SearchBooks
                            books={this.state.searchBooksResults}
                            isLoading={this.state.isLoading}
                            lastTermSearched={this.state.lastTermSearched}
                            onChangeBookShelfStatus={this.onChangeBookShelfStatus}
                            onChangeSearchInputText={this.onChangeSearchInputText}
                            onSubmitSearchBooksBar={this.onSubmitSearchBooksBar}
                            searchInputText={this.state.searchInputText}
                            searchTerms={searchTerms}
                        />
                     </div>
                )}/>
                <Route
                    exact
                    path='/'
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <BookShelfList
                                books={this.state.books}
                                isLoading={this.state.isLoading}
                                onChangeBookShelfStatus={this.onChangeBookShelfStatus}
                            />
                            <SearchButton />
                        </div>
                )}/>
            </div>
        );
    }
}

export default BooksApp;
