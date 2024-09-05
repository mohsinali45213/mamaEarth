import React from 'react'

const Search = ({searchTerm,handleSearch}) => {
  return (
    <div className='search-container'>
      <input type="search" value={searchTerm} placeholder='Search' onChange={handleSearch}/>
    </div>
  )
}

export default Search