import React from 'react';
import CompareProducts from '../CompareProducts';

import './style/base.scss';

/**
 * Get products SKU
 * @returns (String)
 */
const getProductsSku = () => {
  return '115E19,11545A,115E1A,115576';
};

const App = () => {
  return (
    <div>
      <header>
        <h1>
          <svg viewBox="0 0 170 34" width="100%" height="30">
            <g className="logo" fill="#FFF">
              <path d="M134.6 17.2c0-9.8 8.06-16.65 17.4-16.65 9.33 0 17.38 6.84 17.38 16.66 0 9.83-8.05 16.72-17.38 16.72-9.34 0-17.4-6.9-17.4-16.7zm10.24 7.23h14.3v-14.4h-14.3v14.4zM92.38.93L83.5 18.86 74.6.93h-7.4L64.4 33.5h8.35l1.1-16 7.92 16h3.46l7.93-16 1.1 16h8.34L99.8.92H92.4" />
              <path d="M114.94 8.4h3.8c2.9 0 4.2 1.1 4.2 3.6 0 2.56-1.5 3.86-4.42 3.86h-3.58V8.4zm11.94 12.18c3.17-1.96 4.72-4.9 4.72-8.94 0-6.7-4.66-10.7-12.46-10.7h-12.72v32.55h8.52V22.8h1.78c.86 0 1.54-.05 2.25-.14l5.3 10.83h9.28l-6.67-12.92zm-84.52 1.56l3.07-8.64 3.07 8.64h-6.14zM41.7.94L29.73 33.48h8.46l1.4-3.88h11.65l1.43 3.87h8.46L49.17.92H41.7zM2.42.93v7.33h12.2L0 33.5h26.86v-7.33H13.7L28.34.93H2.43" />
            </g>
          </svg>
        </h1>
      </header>

      <main>
        <CompareProducts productsSku={getProductsSku()} />
      </main>
    </div>
  );
};

export default App;
