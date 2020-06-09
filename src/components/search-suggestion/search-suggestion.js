import React from 'react'
import img from '../../assets/search-2.png';
import './search-suggestion.scss';

const SearchSuggestion = () => {

  return (
    <div className="search-suggestion">
      <img className="search-suggestion__img" src={img} alt="Search Icon"/>
      <label className="search-suggestion__label">Try search for cities</label>
    </div>
  )
}

export default SearchSuggestion;