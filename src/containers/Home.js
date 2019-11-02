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
const PAGE = "1";
class HomepageLayout extends Component {
  componentWillMount() {
    this.props.setActivePage(PAGE);
  }
  render() {
    if (this.props.error) {
      return <div className="trans-to-middle"> server error </div>;
    }
    if (!this.props.posts || this.props.loading) {
      return (
        <div className="overlay">
          <Spin className="spiner" size="large" />
        </div>
      );
    }
    return (
      <React.Fragment>
        <Row type="flex" justify="space-around">
          <Col>
            <img
              className="devils"
              src={this.props.posts[0].pictures[1].image}
              style={{ margin: "5px" }}
            />
            <img
              className="devils"
              src={this.props.posts[0].pictures[2].image}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p>{ReactHtmlParser(this.props.posts[0].content)}</p>
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
    posts: state.general.posts,
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
