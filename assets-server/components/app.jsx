require('./app.scss');

import React from 'react/addons';
import Router from 'page';
import Styles from 'react-style';
import Row from './components/ui/row';
import Navigation from './components/shared/navigation';
import UIStore from './stores/ui';
import UIActions from './actions/ui';

let getAppState = () => ({
  view : UIStore.getView(),
  viewData : UIStore.getViewData(),
  ctx : UIStore.getCtx(),
  pages : UIStore.getPages()
});

let App = React.createClass({
  displayName : 'App',
  getInitialState() {
    return getAppState();
  },
  componentWillMount() {
    this._setupRouting();
  },
  componentDidMount() {
    UIStore.addChangeListener(this._onUIStoreChange);
  },
  componentWillUnmount() {
    UIStore.removeChangeListener(this._onUIStoreChange);
  },
  _setupRouting() {
    Router('/', '/profile');
    Router('/:view', UIActions.loadView);
    Router.start();
    return this;
  },
  _onUIStoreChange() {
    this.setState(getAppState());
  },
  render() {
    let st = this.state,
      view = st.view ? <st.view viewData={st.viewData} /> : null;
    return(
      <div {...this.props} className="app" styles={[styl.app]}>
        <Row styles={[styl.row]}>
          <Navigation ctx={st.ctx} pages={st.pages} colWidth={60} />
          <main styles={[styl.views]}>
            { view }
          </main>
        </Row>
      </div>
    );
  }
});

let styl = Styles.create({
  app : {
    backgroundColor : '#f9f9fb',
    height : '100%',
    width : '100%'
  },
  row : {
    height : '100%'
  },
  views : {
    height : '100%'
  }
});

export default App;