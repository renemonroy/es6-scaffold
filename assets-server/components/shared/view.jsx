import React from 'react/addons';
import InlineStyles from 'react-style';
import Header from './header.jsx';

const headerHeight = 43;
const inlineStyles = InlineStyles.create({
  ISView : {
    height : '100%'
  },
  ISHeader : {
    height : headerHeight + 'px'
  },
  ISArea : {
    overflowY : 'auto',
    padding : '24px 0'
  },
  ISAreaWithHeader : {
    height : window.innerHeight - headerHeight + 'px'
  },
  ISAreaWithoutHeader : {
    height : 'inherit'
  }
});

export default class View extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { heading, children } = this.props,
      { ISHeader, ISAreaWithHeader, ISAreaWithoutHeader, ISView } = inlineStyles;
    let areaHeight = heading ? ISAreaWithHeader : ISAreaWithoutHeader;
    return (
      <div {...this.props} styles={[ISView]}>
        { heading ? <Header heading={heading} styles={[ISHeader]}/> : null }
        <div className="scroll-area" styles={[ISArea, areaHeight]}>
          { children }
        </div>
      </div>
    );
  }

}