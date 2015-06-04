require('./app.scss');

import React from 'react/addons';
import Router from 'page';
import InlineStyles from 'react-style';
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

const inlineStyles = InlineStyles.create({
  ISApp : {
    backgroundColor : '#f9f9fb',
    height : '100%',
    width : '100%'
  },
  ISRow : {
    height : '100%'
  },
  ISViews : {
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
    Router('/', '/home');
    Router('/:view', UIActions.loadView);
    Router.start();
    return this;
  }
  _onUIStoreChange() {
    this.setState(getAppState());
  }
  render() {
    let st = this.state,
      { viewData, ctx, pages } = st,
      { ISRow, ISViews, ISApp } = inlineStyles;
    let view = st.view ? <st.view viewData={viewData} /> : null;
    return(
      <div {...this.props} className="app" styles={[ISApp]}>
        <Row styles={[ISRow]}>
          <Navigation ctx={ctx} pages={pages} colWidth={60} />
          <main styles={[ISViews]}>
            { view }
          </main>
        </Row>
      </div>
    );
  }
}