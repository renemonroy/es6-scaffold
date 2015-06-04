import React from 'react/addons';
import App from './app.jsx';

const loadApp = () => {
  React.renderComponent(<App />, document.body);
};

document.addEventListener('DOMContentLoaded', loadApp);