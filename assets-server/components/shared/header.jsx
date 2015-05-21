import React from 'react/addons';
import Styles from 'react-style';

let Header = React.createClass({
  
  displayName : 'Header',

  render() {
    let ps = this.props;
    return (
      <header {...ps}>
        <div className="wrapper" styles={[styl.wrapper]}>
          <h2>{ps.heading}</h2>
        </div>
      </header>
    );
  }

});

let styl = Styles.create({
  wrapper : {
    padding : '8px 0 0 0',
    maxWidth : '1218px',
    margin : '0 auto'
  }
});

export default Header;