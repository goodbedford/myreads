import React from 'react';
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
}

const propTypes = {
    // book: PropTypes.shape({
    //     authors: PropTypes.array.isRequired,
    //     title: PropTypes.string.isRequired,
    //     displayStatus: PropTypes.string.isRequred,
    //     id: PropTypes.number.isRequired,
    //     url: PropTypes.string.isRequired
    // })
    book: PropTypes.object.isRequired,
    onChangeBookShelfStatus: PropTypes.func.isRequired
}
const isSelected = (book, status) => {
    if (book.shelf === status) return true;
}
const Book = ({ book, onChangeBookShelfStatus }) => {
    const { authors, title, imageLinks } = book;
    const formattedAuthors = authors ? authors.join(', '): [];
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => onChangeBookShelfStatus(e, book)}>
                <option
                    value={bookDisplayStatus.NONE.status}
                    disabled
                    >
                        {bookDisplayStatus.NONE.label}
                </option>
                <option
                    value={bookDisplayStatus.CURRENTLY_READING.status}
                    selected={isSelected(book, bookDisplayStatus.CURRENTLY_READING.status)}
                    >
                        {bookDisplayStatus.CURRENTLY_READING.label}
                    </option>
                <option
                    value={bookDisplayStatus.WANT_TO_READ.status}
                    selected={isSelected(book, bookDisplayStatus.WANT_TO_READ.status)}
                    >
                        {bookDisplayStatus.WANT_TO_READ.label}
                </option>
                <option
                    value={bookDisplayStatus.READ.status}
                    selected={isSelected(book, bookDisplayStatus.READ.status)}
                    >
                        {bookDisplayStatus.READ.label}
                    </option>
                <option
                    value={bookDisplayStatus.NONE.status}
                    selected={isSelected(book, bookDisplayStatus.NONE.status)}
                    >
                        None
                    </option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{formattedAuthors}</div>
        </div>
    )
};
Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
