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
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';

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

    const { loading, currentWeather, toggleBigFont, bigFontToggled, error } = this.props;

    return (
      <>
        <div className="content-left">

          <div className="content-nav">
            <AutocompleteField 
              suggestions={storageHelper.getStorageArray(suggestionStorageKey)}
              onPerformSearch={this.onSearch}/>
          </div>

          <div className="content-left-info">
            <ErrorBoundry>
            { 
              loading ? <LoadingSpinner /> 
                      : currentWeather ? <MainInfo weather={currentWeather}/> : <SearchSuggestion />
            }
            </ErrorBoundry>
          </div>

        </div>

        <div className="content-right">

          <div className="content-nav">
            <button className={`toggle-font ${bigFontToggled ? 'toggle--active' : ''}`} onClick={toggleBigFont}>Aa</button>
          </div>

          <ErrorBoundry>
          {
            error 
              ? <ErrorIndicator error={error}/>
              : currentWeather  ? <DetailInfo title="Today" details={ currentWeather }/>
                                : <NoResults /> 
          }
          </ErrorBoundry>
        </div>  
      </>
    );
  };
}

const mapStateToProps = ({loading, currentWeather, bigFontToggled, error}) => {
  return {
    loading,
    currentWeather,
    bigFontToggled,
    error
  }
}

const mapDispatchToProps = (dispatch, { weatherService }) => {
  return {
    fetchWeather: fetchCityWeather(weatherService, dispatch),
    toggleBigFont: () => dispatch(bigFontToggled())
  }
}

export default withWeatherService()(connect(mapStateToProps, mapDispatchToProps)(AppContent));