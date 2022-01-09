import React, {useState} from 'react';

export const Search = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState("")

    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <input className="search-brewery" type="text" 
            placeholder="search brewery by city"  
            onChange={(e) => handleChange(e)}/>
            <button onClick= {() => handleSearch(searchText)}>Search</button>

        </div>
    )
}
