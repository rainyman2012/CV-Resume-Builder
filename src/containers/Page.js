import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { setActivePage } from "../store/actions/general";
import {
  Row,
  Col,
  Menu,
  Select,
  Icon,
  Steps,
  Button,
  message,
  Spin
} from "antd";
import { Lang as T } from "../languages";
import "./general.css";

const PAGE = "2";
class Matin extends Component {
  componentWillMount() {
    this.props.setActivePage(this.props.match.params.page);
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
      <div>
        {this.props.posts[this.props.match.params.page - 1] ? (
          ReactHtmlParser(
            this.props.posts[this.props.match.params.page - 1].content
          )
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>No Content</p>
          </div>
        )}
      </div>
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
  )(Matin)
);
