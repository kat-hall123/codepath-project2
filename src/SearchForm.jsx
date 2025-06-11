import './SearchForm.css';

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
            <button type="button" onClick={onClear}>Clear</button>
            <input
                type="text"
                placeholder="Search..."
                name="search"
                value={query}  
                onChange={(event) => handleOnQueryChange(event.target.value)}  
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm