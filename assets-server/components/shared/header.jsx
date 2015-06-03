import React from 'react/addons';
import Styles from 'react-style';

const styles = Styles.create({
  contStyle : {
    padding : '8px 0 0 0',
    maxWidth : '1218px',
    margin : '0 auto'
  }
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  },
  render() {
    const { heading } = this.props,
      { contStyle } = this.styles;
    return (
      <header {...this.props}>
        <div className="container" styles={[contStyle]}>
          <h2>{heading}</h2>
        </div>
      </header>
    );
  }
};