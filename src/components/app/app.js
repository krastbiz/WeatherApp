import React from 'react';

import './app.scss';
import { AppContent } from '../containers';
import { connect } from 'react-redux';

const App = (props) => {

  const { bigFontToggled } = props;

  let cls = "app";
  cls += bigFontToggled ? " font--big" : "";

  return (
    <div className={cls}>
          <div className="content-outer">
            <AppContent />
          </div>
    </div>
  );
}

const mapStateToProps = ({bigFontToggled}) => {
  return {
    bigFontToggled
  }
}

export default connect(mapStateToProps, null)(App);
