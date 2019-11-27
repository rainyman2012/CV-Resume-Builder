import React, { Component } from "react";

export default WrappedComponent => {
  class ResetWindowScroll extends Component {
    componentDidMount = () => this.handleScroll();

    componentDidUpdate = () => this.handleScroll();

    handleScroll = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, 500);
    };
    render = () => <WrappedComponent {...this.props} />;
  }
  return ResetWindowScroll;
};
