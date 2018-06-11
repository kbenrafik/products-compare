import React from 'react';

import './style/compareLoader.scss';

const CompareLoader = () => {
  return (
    <div className="compare__loading">
      <div className="compare__loading-wrapper">
        <div className="compare__loading-item">
          <div className="compare__loading-animated-background">
            <div className="compare__loading-background-masker content-top" />
            <div className="compare__loading-background-masker content-second-line" />
            <div className="compare__loading-background-masker content-third-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareLoader;
