import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { Layout } from "antd";
import { resumesGetAll } from "../../store/actions/general";

import { Lang as T } from "../../languages";
import StaticMenu from "./Menu";
import "./Side.css";
const { Sider } = Layout;

class StaticSide extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.props.getAllResumes(nextProps.language);
    }
  }

  render() {
    let sideDir = {};
    if (this.props.language == "fa") {
      sideDir = {
        right: 0,
        top: 0
      };
    } else {
      sideDir = {
        left: 0,
        top: 0
      };
    }
    return (
      <div id="staticSide" style={sideDir}>
        <StaticMenu />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.general.color,
    language: state.general.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllResumes: lang => dispatch(resumesGetAll(lang))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StaticSide)
);
