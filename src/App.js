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
            isLoading: { bookShelf: true, allBooks: true },
            searchBooksResults: [],
            searchInputText: '',
            showSearchPage: false
        };
        this.onChangeBookShelfStatus = this.onChangeBookShelfStatus.bind(this);
        this.onChangeSearchInputText = this.onChangeSearchInputText.bind(this);
        this.onSubmitSearchBooksBar = this.onSubmitSearchBooksBar.bind(this);
    }

    changeShelfStatus (status, book) {
        // need id
      //   const updateBook = this.state.books.find((book) => book.id === id);
        if (status === bookDisplayStatus.NONE.status) return;

        BooksAPI.update(book, status)
          .then((updatedBookIds) => {
              BooksAPI.getAll()
                .then((books) => {
                    console.log('BOOKS', books);
                    this.setState({ books });
                });
          });
    }
    componentDidMount () {
        BooksAPI.getAll()
            .then((books) => {
                console.log('BOOKS', books);
                const { isLoading } = this.state;
                isLoading['bookShelf'] = false;
                isLoading['allBooks'] = false;
                this.setState({
                    books,
                    isLoading
                });
            });
    }

    onChangeBookShelfStatus (event, book) {
        const { value:status } = event.target;
        //   this.isLoading[status] = true;
        this.changeShelfStatus(status, book);
    }

    onChangeSearchInputText (event) {
        debugger
        const { value } = event.target;
        this.setState({
            searchInputText: value
        });
    }

    onSubmitSearchBooksBar (event) {
        event.preventDefault();
        console.log('SUBMIT')
        const { searchTerm } = this.state.searchTerm;
        const { MAX_RESULTS } = sizes;

        BooksAPI.searchQuery(searchTerm, MAX_RESULTS)
            .then((bookResults) => {
                this.setState({
                    searchBooksResults: bookResults
                });
            });
    }

    render() {
        console.log('LOADING--', this.state.isLoading)
        return (
            <div className="app">
                <Route
                    exact
                    path='/search-books'
                    render={() => (
                        <SearchBooks
                            books={this.state.searchBooksResults}
                            isLoading={this.state.isLoading}
                            onChangeBookShelfStatus={this.onChangeBookShelfStatus}
                            onChangeSearchInputText={this.onChangeSearchInputText}
                            onSubmitSearchBooksBar={this.onSubmitSearchBooksBar}
                            searchInputText={this.state.searchInputText}
                            searchTerms={searchTerms}
                        />
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
