import React from 'react/addons';
import Router from 'page';
import Styles from 'react-style';

let Navigation = React.createClass({

  displayName : 'Navigation',

  navigate(e) {
    e.preventDefault();
    Router(e.target.dataset.url);
  },

  renderButtons() {
    let nav = this,
      ps = nav.props;
    return ps.pages.map( function(btn) {
      let btnActive = (ps.ctx) && (ps.ctx.params.view == btn.name) ?
        styl.buttonActive : null;
      return (
        <li key={'nav-' + btn.name}>
          <button
            data-url={btn.url} 
            onClick={nav.navigate}
            styles={[styl.button, btnActive]}>
            {btn.title}
          </button>
        </li>
      );
    });
  },

  render() {
    return (
      <nav {...this.props} style={styl.nav}>
        <ul>
          {this.renderButtons()}
        </ul>
      </nav>
    );
  }

});

let styl = Styles.create({
  nav : {
    flex : 1,
    backgroundColor : '#333c4e',
    height : '100%'
  },
  button : {
    border : '0 none',
    backgroundColor : 'transparent',
    color : '#fff',
    fontSize : '12px'
  },
  buttonActive : {
    color : 'red'
  }
});

export default Navigation;