import React from 'react/addons';
import Router from 'page';
import InlineStyles from 'react-style';

const inlineStyles = InlineStyles.create({
  ISNavigation : {
    flex : 1,
    backgroundColor : '#333c4e',
    height : '100%'
  },
  ISButton : {
    border : '0 none',
    backgroundColor : 'transparent',
    color : '#fff',
    fontSize : '12px'
  },
  ISButtonActive : {
    color : 'red'
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  /**
   * Routes to the url specified in the button dataset. Which is
   * stored from the prop `page.url`.
   */
  navigate(e) {
    e.preventDefault();
    Router(e.target.dataset.url);
  }

  /**
   * Returns an array of buttons that will be rendered inside an
   * unordered list of buttons.
   */
  renderButtons() {
    const nav = this, ps = this.props, { pages } = ps;
    return pages.map( function(page) {
      const { url } = page, { ISButton } = inlineStyles,
        activeBtn = ((ps.ctx) && (ps.ctx.params.view == page.name)) ?
          inlineStyles.ISButtonActive : null;
      return (
        <li key={'nav-' + page.name}>
          <button
            data-url={url}
            onClick={nav.navigate}
            styles={[ISButton, activeBtn]}>
            {page.title}
          </button>
        </li>
      );
    });
  }

  /**
   * Component created to wrap the main navigation of the app.
   * Routing relies on the url set up on a page.
   */
  render() {
    const { ISNavigation } = inlineStyles;
    return (
      <nav {...this.props} style={ISNavigation}>
        <ul>
          {this.renderButtons()}
        </ul>
      </nav>
    );
  }

}