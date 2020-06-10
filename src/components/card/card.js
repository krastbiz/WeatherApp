import React from 'react';

const Card = (props) => {

  const { title } = props;

  return (
    <div className="card card-main">
      <div className="card-inner">
        <h2 className="card__title text-secondary">{title}</h2>

        <div className="card__details">
            {props.children}
        </div>

      </div>
    </div>
  )

}

export default Card;