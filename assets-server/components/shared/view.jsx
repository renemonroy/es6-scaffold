import React from 'react/addons';
import Styles from 'react-style';
import Header from './header.jsx';

let View = React.createClass({

  displayName : 'View',

  render () {
    let ps = this.props,
      header = ps.heading ?
        <Header heading={ps.heading} styles={[styl.header]}/> : null,
      areaHeight = ps.heading ? styl.areaWithHeader : styl.areaWithoutHeader;
    return (
      <div {...ps} styles={[styl.view]}>
        {header}
        <div className="scroll-area" styles={[styl.area, areaHeight]}>
          {ps.children}
        </div>
      </div>
    );
  }

});

let headerHeight = 43;

let styl = Styles.create({
  view : {
    height : '100%'
  },
  header : {
    height : headerHeight + 'px'
  },
  area : {
    overflowY : 'auto',
    padding : '24px 0'
  },
  areaWithHeader : {
    height : window.innerHeight - headerHeight + 'px'
  },
  areaWithoutHeader : {
    height : 'inherit'
  }
});

export default View;