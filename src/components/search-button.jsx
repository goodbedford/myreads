import React from 'react';
import { Link } from 'react-router-dom';


const SearchButton = () => {
    return (
        <div className="open-search">
            <Link to="/search-books">Add a book</Link>
        </div>
    );
};

export default SearchButton;
