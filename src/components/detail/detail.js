import React from 'react';

import './detail.scss';

const Detail = (props) => {

  const { title, renderValue } = props;

  if (props.children) {
    return (
      <div className="detail">
        {props.children}
        <label className="detail__value">{renderValue()}</label>
      </div>
    )
  }


  return (
    <div className="detail">
      { 
        title ? <label className="detail__title">{title}</label>
              : null
      }
      <label className="detail__value">{renderValue()}</label>
    </div>
  );
}

export default Detail;