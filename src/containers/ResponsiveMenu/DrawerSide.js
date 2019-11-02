import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { Button, Drawer, Layout } from "antd";
import { resumesGetAll } from "../../store/actions/general";

import { Lang as T } from "../../languages";
import "./Side.css";
import StaticMenu from "./Menu";

const { Sider } = Layout;

class DrawerSide extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.props.getAllResumes(nextProps.language);
    }
  }

  render() {
    let toggleAlign = {};
    let logoAlign = {};
    let placement = "";
    if (this.props.language == "fa") {
      toggleAlign = { right: "10px" };
      logoAlign = { float: "left", marginLeft: "10px" };
      placement = "right";
    } else {
      toggleAlign = { left: "10px" };
      logoAlign = { float: "right", marginRight: "10px" };
      placement = "left";
    }
    const general_texts = T[this.props.language];

    return (
      <div id="dynamicSide">
        <div className="navbar">
          <div className="brand" style={logoAlign}>
            <p>{general_texts.logoText}</p>
          </div>
          <div className="hamburgerPart">
            <span>{general_texts.menuName}</span>
            <Button
              className="toggle-button"
              style={toggleAlign}
              type="primary"
              onClick={this.props.onShow}
            >
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
            </Button>
          </div>
        </div>
        <Drawer
          id="drawer"
          placement={placement}
          closable={false}
          onClose={this.props.onClose}
          visible={this.props.visible}
          width="17rem"
          drawerStyle={{ backgroundColor: "#BD5D38" }}
          bodyStyle={{ padding: "2px" }}
        >
          <StaticMenu />
        </Drawer>
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
  )(DrawerSide)
);
