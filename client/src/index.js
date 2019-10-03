/*To use an image or any other assets in the components,
 it needs to be imported in that.js/.jsx file first
 So, Webpack can bundle it right and make it available in the bundled folder. */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './../src/components/App.jsx';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

module.hot.accept();
