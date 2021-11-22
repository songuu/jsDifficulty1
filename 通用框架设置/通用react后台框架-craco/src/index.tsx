import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 兼容支持到 IE9，如果不需要可删除。
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.less';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
