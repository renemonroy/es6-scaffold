import React from 'react/addons';
import InlineStyles from 'react-style';

const inlineStyles = InlineStyles.create({
  ISContainer : {
    padding : '8px 0 0 0',
    maxWidth : '1218px',
    margin : '0 auto'
  }
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { heading } = this.props,
      { ISContainer } = this.styles;
    return (
      <header {...this.props}>
        <div className="container" styles={[ISContainer]}>
          <h2>{heading}</h2>
        </div>
      </header>
    );
  }
}