import React from 'react';
import ReactDom from 'react-dom';

// App
import App from './components/App';

// default styles
import GlobalStyle from '../public/GlobalStyle/GlobalStyle';

ReactDom.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
