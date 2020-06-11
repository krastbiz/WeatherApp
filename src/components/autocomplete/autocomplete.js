import React, { Component } from 'react';

import './autocomplete.scss';

class AutocompleteField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      showSuggestions: false,
      activeSuggestionIndex: -1
    }

    this.suggestionsRef = React.createRef();
    this.inputRef = React.createRef();

    this.onSearch = this.onSearch.bind(this);
    this.onSuggestionClick = this.onSuggestionClick.bind(this);
    this.onSearchIconClick = this.onSearchIconClick.bind(this);
  }

  onSearch() {
    const { onPerformSearch } = this.props;
    const { keyword } = this.state;

    if (!this.isValid(keyword)) {
      return;
    }

    this.inputRef.current.blur();

    if (onPerformSearch && keyword.length > 0) {
      onPerformSearch(this.state.keyword);
      
    }
  }

  onFocus() {
    this.setState({showSuggestions: true});
  }

  onSearchIconClick(e) {
    const { keyword } = this.state;

    if (!this.isValid(keyword)) {
      return;
    }

    if (keyword) {
      e.preventDefault();
      this.onSearch();      
    }    
  }

  onBlur() {
    this.setState({
        showSuggestions: false,
        activeSuggestionIndex: -1
      });
  }

  isValid(value) {
    if (value.replace(/\s/g, '').length) {
      return true
    }

    return false;
  }

  onChange(e) {
    this.setState({keyword: e.target.value});
  }

  handleEnterKey() {
    //find selected suggestion
    var suggest = [].find.call(this.suggestionsRef.current.children, (el) => el.classList.contains("suggestion-active"));
    if (suggest) {
      this.setState({keyword: suggest.innerText}, this.onSearch)
    } else {
      this.onSearch();
    }

    return;
  }

  handleArrowKeys(keyCode) {
      const { activeSuggestionIndex } = this.state;
      const currentSuggestions = this.getSuggestions();

      let newIndex;
      // check initial state 
      if (activeSuggestionIndex === -1) {
        newIndex = keyCode === 40 
                    ? 0
                    : currentSuggestions.length - 1;
      } else {
        // update index
        newIndex =  keyCode === 40 
                      ? activeSuggestionIndex >= currentSuggestions.length - 1 
                        ? 0 : activeSuggestionIndex + 1 

                      : activeSuggestionIndex <= 0 || activeSuggestionIndex > currentSuggestions.length - 1 
                        ? currentSuggestions.length - 1 : activeSuggestionIndex - 1;
      }
      
      this.setState({
        activeSuggestionIndex: newIndex
      });


      // update scroll position
      this.suggestionsRef.current.scrollTop = this.suggestionsRef.current.children[newIndex].offsetTop;
  }

  onKeyDown(e) {

    // enter was pressed
    if (e.keyCode === 13) {
      this.handleEnterKey();
    }

    //38 UP
    //40 DOWN
    if (e.keyCode === 40 || e.keyCode === 38) {
      this.handleArrowKeys(e.keyCode);
    }
  }

  onSuggestionClick(e) {
    this.setState({ keyword: e.target.innerText },
       this.onSearch);
  }

  getSuggestions() {
    const { keyword } = this.state;
    const { suggestions } = this.props;

    return suggestions.filter(el => keyword ? el.toLowerCase().includes(keyword.toLowerCase()) : true);
  }

  render () {
  

  const { keyword, showSuggestions, activeSuggestionIndex} = this.state;

  const suggestions = this.getSuggestions();

  //TODO move suggestion presentation in separate component
  return (

      <div className="autocomplete">
        <div className="search">
          <label onClick={this.onSearchIconClick} htmlFor="search-input" className="search__icon"></label>
          <input  id="search-input" className="search__input" type="text" placeholder="Search for places..." autoComplete="off"
                  ref={this.inputRef} 
                  value={keyword}
                  onFocus={(e) => this.onFocus(e)}
                  onKeyDown={(e) => this.onKeyDown(e)}
                  onBlur={(e) => this.onBlur(e)}
                  onChange={(e) => this.onChange(e)} />
        </div>

        {( showSuggestions 
            ? <ul ref={this.suggestionsRef} className="suggestions">
                {suggestions.map((el, index) => {
                  return <li key={el} onMouseDown={this.onSuggestionClick} className={`suggestion ${(index === activeSuggestionIndex) ? 'suggestion-active' : ''}`}>{el}</li>
                })}
              </ul>
            : null
          )
        }
      </div>
    )
  }
}

export default AutocompleteField;