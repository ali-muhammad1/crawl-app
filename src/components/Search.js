import React, {useState} from 'react';

const Search = (props) => {
    const[url, setUrl] = useState('');
    const handleSearch = () => {
        props.handleCrawlSite(url);
        setUrl('');
    }
    return (
        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control mr-sm-2 search-input" value={url} onChange={(e) => setUrl(e.target.value)} type="search" 
            placeholder="http://example.com" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={handleSearch}>Go</button>
        </form>
    )
}

export default Search;