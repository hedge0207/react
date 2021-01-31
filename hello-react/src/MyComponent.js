import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "default name",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteFruit: PropTypes.string.isRequired,
  };
  render() {
    const { name, favoriteFruit, children } = this.props;
    return (
      <div>
        Hello! {name}. <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 과일은 {favoriteFruit}입니다.
      </div>
    );
  }
}

export default MyComponent;
