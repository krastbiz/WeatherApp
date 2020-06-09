import React from 'react';

const NoResults = ({ text }) => {

  if (!text) {
    text = "No Results"
  }

  return (
    <p className="no-results">{text}</p>
  )
}

export default NoResults;