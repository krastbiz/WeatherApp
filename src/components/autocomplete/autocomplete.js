import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './autocomplete.scss';

const storage = ["minsk", "lida", "brest", "new york", "brazilia", "london"];

class AutocompleteField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyword: null,
      showSuggestions: false,
      activeSuggestionIndex: -1
    }

    this.suggestionsRef = React.createRef();
  }


  onFocus() {
    this.setState({showSuggestions: true});
  }

  onBlur() {
    this.setState({showSuggestions: false});
  }

  onChange(e) {
    this.setState({keyword: e.target.value});
  }

  onKeyDown(e) {
    //38 UP
    //40 DOWN
    if (e.keyCode === 40 || e.keyCode === 38) {
      //do logic here
      const { activeSuggestionIndex } = this.state;

      const newIndex = e.keyCode === 40 ? activeSuggestionIndex + 1 : activeSuggestionIndex -1;
      if (activeSuggestionIndex < 0) {
        this.setState({
          activeSuggestionIndex: e.keyCode === 40 ? 0 : storage.length - 1
        });
      } else {
        this.setState({
          activeSuggestionIndex: newIndex
        })
      }

      console.log(this.suggestionsRef.current);
      console.log(this.suggestionsRef.current.children[2]);
      console.log(this.suggestionsRef.current.children[3].offsetTop);

      this.suggestionsRef.current.scrollTop = this.suggestionsRef.current.children[newIndex].offsetTop;
    }
  }

  render () {
  

  const { keyword, showSuggestions, activeSuggestionIndex} = this.state;

  const suggestions = storage.filter(el => keyword ? el.includes(keyword.toLowerCase()) : true);
  



  return (
      // <Autocomplete
      //   freeSolo
      //   id="free-solo-2-demo"
      //   disableClearable
      //   options={["Minsk", "Lida"]}
      //   renderInput={(params) => (
      //     <TextField
      //       {...params}
      //       label="Search input"
      //       margin="normal"
      //       variant="outlined"
      //       InputProps={{ ...params.InputProps, type: 'search' }}
      //     />
      //   )}
      // />
      <div className="autocomplete">
        <div className="search">
          <label htmlFor="search-input" className="search__icon"></label>
          <input onFocus={(e) => this.onFocus(e)} onKeyDown={(e) => this.onKeyDown(e)} onBlur={(e) => this.onBlur(e)} onChange={(e) => this.onChange(e)} id="search-input" className="search__input" type="text" placeholder="Search for places..." />
        </div>
        {( showSuggestions ?
            <ul ref={this.suggestionsRef} className="suggestions">
              {suggestions.map((el, index) => {
                  return <li key={el} className={`suggestion ${(index === activeSuggestionIndex) ? 'suggestion-active' : ''}`}>{el}</li>
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