import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bookDisplayStatus } from '../constants/constants';

const defaultProps = {
    book: {
        authors: ['Harper Lee'],
        title: 'To Kill a Mockingbird',
        shelf: bookDisplayStatus.WANT_TO_READ.status,
        id: 10,
        imageLinks: {
            thumbnail: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
        }
    }
};

const propTypes = {
    book: PropTypes.object.isRequired,
    isLoading: PropTypes.object.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired
};

class Book extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getImageLinks = this.getImageLinks.bind(this);
        this.getShelfStatus = this.getShelfStatus.bind(this);
    }

    onChange (event, book) {
        this.props.onChangeBookShelfStatus(event, book);
    }
    getImageLinks (book) {
        if (book.imageLinks && book.imageLinks.thumbnail) {
            return book.imageLinks.thumbnail;
        }
        if (book.imageLinks && book.imageLinks.smallThumbnail) {
            return book.imageLinks.smallThumbnail;
        }
        return '';
    }
    getShelfStatus (book) {
        return book.shelf || bookDisplayStatus.SEARCH_RESULTS.status;
    }

    render () {
        const { book, isLoading, onChangeBookShelfStatus } = this.props;
        const { authors, title } = book;
        const formattedAuthors = authors ? authors.join(', '): [];

        if (isLoading[book.id]) {
            return (<div className='loadingBook'>Loading…</div>);
        }
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, alt:"book-cover", backgroundImage: `url(${this.getImageLinks(book)})` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.getShelfStatus(book)} onChange={(e) => onChangeBookShelfStatus(e, book)}>
                    <option
                        value={bookDisplayStatus.NONE.status}
                        disabled
                        >
                            {bookDisplayStatus.NONE.label}
                    </option>
                    <option
                        value={bookDisplayStatus.CURRENTLY_READING.status}
                        >
                            {bookDisplayStatus.CURRENTLY_READING.label}
                        </option>
                    <option
                        value={bookDisplayStatus.WANT_TO_READ.status}
                        >
                            {bookDisplayStatus.WANT_TO_READ.label}
                    </option>
                    <option
                        value={bookDisplayStatus.READ.status}
                        >
                            {bookDisplayStatus.READ.label}
                        </option>
                    <option
                        value={bookDisplayStatus.NONE.status}
                        >
                            None
                    </option>
                    {!book.shelf && (
                        <option
                            disabled
                            value={bookDisplayStatus.SEARCH_RESULTS.status}
                            >
                            {bookDisplayStatus.SEARCH_RESULTS.label}
                        </option>
                    )}
                  </select>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{formattedAuthors}</div>
            </div>
        )
    }
}

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
