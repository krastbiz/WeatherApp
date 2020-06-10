import React, { Component } from 'react';

import AutocompleteField from '../autocomplete';

import NoResults from '../no-results';
import SearchSuggestion from '../search-suggestion';

import withWeatherService from '../hoc';

import { connect } from 'react-redux';
import { fetchCityWeather, bigFontToggled } from '../../actions';
import MainInfo from '../main-info';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import DetailInfo from '../detail-info';
import { storageHelper } from '../../helpers';

const suggestionStorageKey = "suggestions";

class AppContent extends Component {

  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch (keyword) {
    this.props.fetchWeather(keyword);
    storageHelper.updateStorageArray(suggestionStorageKey, keyword);
  };

  render () {

    const { loading, currentWeather, toggleBigFont, bigFontToggled } = this.props;

    return (
      <>
        <div className="content-left">

          <div className="content-nav">
            <AutocompleteField 
              suggestions={storageHelper.getStorageArray(suggestionStorageKey)}
              onPerformSearch={this.onSearch}/>
          </div>

          <div className="content-left-info">
            { 
              loading ? <LoadingSpinner /> 
                      : currentWeather ? <MainInfo weather={currentWeather}/> : <SearchSuggestion />
              // <MainInfo weather={currentWeather}/>
            }
          </div>

        </div>

        <div className="content-right">

          <div className="content-nav">
            
            <button className={`toggle-font ${bigFontToggled ? 'toggle--active' : ''}`} onClick={toggleBigFont}>Aa</button>
          </div>

          {
            currentWeather  ? <DetailInfo title="Today" details={ currentWeather }/>
                            : <NoResults /> 
          }

        </div>  
      </>
    );
  };
}

const mapStateToProps = ({loading, currentWeather, bigFontToggled}) => {
  return {
    loading,
    currentWeather,
    bigFontToggled
  }
}

const mapDispatchToProps = (dispatch, { weatherService }) => {
  return {
    fetchWeather: fetchCityWeather(weatherService, dispatch),
    toggleBigFont: () => dispatch(bigFontToggled())
  }
}

export default withWeatherService()(connect(mapStateToProps, mapDispatchToProps)(AppContent));