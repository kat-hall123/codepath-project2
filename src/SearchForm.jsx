import './SearchForm.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

function SearchForm({onSearch, onClear, query, onSearchInputChange}) {
    function handleSubmit(event) {
        event.preventDefault(); 
        const query = event.target.elements.search.value.trim();
        if(query) {
            onSearch(query);
        }
    }

    function handleOnQueryChange(query) {
        onSearchInputChange(query);
    }

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <button className="button" type="button" onClick={onClear}>
                <FaTimes />
            </button>
            <input
                className="search-bar"
                type="text"
                placeholder="Search..."
                name="search"
                value={query}  
                onChange={(event) => handleOnQueryChange(event.target.value)}  
            />
            <button className="button" type="submit">
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchForm