import './SearchForm.css';

function SearchForm({onSearch}) {
    function handleSubmit(event) {
        event.preventDefault(); 
        const query = event.target.elements.search.value.trim();
        if(query) {
            onSearch(query);
        }

    }
    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                name="search"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm