
export const getBookByShelfStatus = (books, statusType) => {
    return books.filter((book) => book.shelf === statusType);
};
