import React from 'react/addons';
import InlineStyles from 'react-style';

const is = InlineStyles.create({
  isContainer : {
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
      { isContainer } = this.styles;
    return (
      <header {...this.props}>
        <div className="container" styles={[isContainer]}>
          <h2>{heading}</h2>
        </div>
      </header>
    );
  }
};