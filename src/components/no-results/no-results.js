import React from 'react';

import './no-results.scss';

const NoResults = ({ text }) => {

  if (!text) {
    text = "No Results"
  }

  return (
    <p className="no-results">{text}</p>
  )
}

export default NoResults;