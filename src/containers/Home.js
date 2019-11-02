import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { setActivePage } from "../store/actions/general";
import ReactHtmlParser from "react-html-parser";
import "./home.css";
import { Row, Col, Spin, Icon, Button, message } from "antd";
import { Lang as T } from "../languages";

// const getWidth = () => {
//   const isSSR = typeof window === "undefined";
//   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
// };
const PAGE = "home";
class HomepageLayout extends Component {
  componentWillMount() {
    this.props.setActivePage(PAGE);
  }
  render() {
    if (this.props.error) {
      return <div className="trans-to-middle"> server error </div>;
    }
    if (!this.props.resumes || this.props.loading) {
      return (
        <div className="overlay">
          <Spin className="spiner" size="large" />
        </div>
      );
    }
    return (
      <React.Fragment>
        <Row type="flex" justify="space-around">
          <Col span={24}>
            <div className="header">the is my be locate a header</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="summary">
              {ReactHtmlParser(this.props.resumes[0].introduce)}
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.general.color,
    language: state.general.language,
    resumes: state.general.resumes,
    loading: state.general.loading,
    error: state.general.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setActivePage: page => dispatch(setActivePage(page))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomepageLayout)
);
