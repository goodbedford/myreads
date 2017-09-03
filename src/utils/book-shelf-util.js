import { bookDisplayStatus } from '../constants/constants';

export const getBookByShelfStatus = (books, statusType) => {
    if (statusType === bookDisplayStatus.SEARCH_RESULTS.status) {
        return books;
    }
    return books.filter((book) => book.shelf === statusType);
};
