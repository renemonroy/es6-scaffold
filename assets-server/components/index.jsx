(function(win, doc) {

  import React from 'react/addons';
  import App from './app/app.jsx';

  const loadApp = () => {
    React.renderComponent(<App />, document.body);
  };

  document.addEventListener('DOMContentLoaded', loadApp);

})(window, document);