import { bookDisplayStatus } from '../constants/constants.js';

export const getBookByShelfStatus = (books, statusType) => {
    return books.filter((book) => book.shelf === statusType)
};
