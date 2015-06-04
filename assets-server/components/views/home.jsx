import React from 'react/addons';

export default class HomeView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section {...this.props} className="home view">
        <h3>About view!</h3>
      </section>
    );
  }

}