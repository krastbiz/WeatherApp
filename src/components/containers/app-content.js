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

// TODO move presentation into separate component
class AppContent extends Component {

  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch (keyword) {
    this.props.fetchWeather(keyword);
    storageHelper.updateStorageArray(suggestionStorageKey, keyword);
  };

  renderMainInfo() {
    const { error, loading, currentWeather } = this.props;

    if (error) {
      return null
    }

    if (loading) {
      return <LoadingSpinner />;
    }

    if (currentWeather) {
      return <MainInfo weather={currentWeather}/>
    } else {
      return <SearchSuggestion />;
    }
  }

  renderDetailInfo() {
    const { error, currentWeather, loading } = this.props;

    if (error) {
      return <ErrorIndicator error={error}/>
    }

    if (loading) {
      return null;
    }

    if (currentWeather) {
      return <DetailInfo title="Today" details={ currentWeather }/>;
    } else {
      return <NoResults />;
    }
  }

  render () {

    const { toggleBigFont, bigFontToggled } = this.props;

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
            { this.renderMainInfo() }
            </ErrorBoundry>
          </div>

        </div>

        <div className="content-right">

          <div className="content-nav">
            <button className={`toggle-font ${bigFontToggled ? 'toggle--active' : ''}`} onClick={toggleBigFont}>Aa</button>
          </div>

          <ErrorBoundry>
          {
            this.renderDetailInfo()
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