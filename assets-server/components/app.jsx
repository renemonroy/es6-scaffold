require('./app.scss');

import React from 'react/addons';
import Router from 'page';
import Styles from 'react-style';
import Row from './ui/row';
import Navigation from './shared/navigation';
import UIStore from '../stores/ui';
import UIActions from '../actions/ui';

const getAppState = () => ({
  view : UIStore.getView(),
  viewData : UIStore.getViewData(),
  ctx : UIStore.getCtx(),
  pages : UIStore.getPages()
});

const styles = Styles.create({
  appStyle : {
    backgroundColor : '#f9f9fb',
    height : '100%',
    width : '100%'
  },
  rowStyle : {
    height : '100%'
  },
  viewsStyle : {
    height : '100%'
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._onUIStoreChange = this._onUIStoreChange.bind(this);
    this.state = getAppState();
  }
  componentWillMount() {
    this._setupRouting();
  }
  componentDidMount() {
    UIStore.addChangeListener(this._onUIStoreChange);
  }
  componentWillUnmount() {
    UIStore.removeChangeListener(this._onUIStoreChange);
  }
  _setupRouting() {
    Router('/', '/profile');
    Router('/:view', UIActions.loadView);
    Router.start();
    return this;
  }
  _onUIStoreChange() {
    this.setState(getAppState());
  }
  render() {
    const { view, viewData, ctx, pages } = this.state,
      { rowStyle, viewsStyle, appStyle } = this.styles;
    return(
      <div {...this.props} className="app" styles={[appStyle]}>
        <Row styles={[rowStyle]}>
          <Navigation ctx={ctx} pages={pages} colWidth={60} />
          <main styles={[viewsStyle]}>
            { st.view ? <st.view viewData={viewData} /> : null }
          </main>
        </Row>
      </div>
    );
  }
}