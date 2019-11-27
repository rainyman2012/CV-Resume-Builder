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
    var githubBannerPosition = "";

    if (this.props.language == "fa") {
      toggleAlign = { right: "10px" };
      logoAlign = { float: "left", marginLeft: "10px" };
      placement = "right";
      githubBannerPosition = "github-rtl";
    } else {
      toggleAlign = { left: "10px" };
      logoAlign = { float: "right", marginRight: "10px" };
      placement = "left";
      githubBannerPosition = "github-ltr";
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
          drawerStyle={{ backgroundColor: "#0A483A" }}
          bodyStyle={{ padding: "0" }}
        >
          <a href="https://github.com/rainyman2012/CV-Resume-Builder">
            <div className={`github ${githubBannerPosition}`}>
              <i class="fab fa-github"></i>
            </div>
          </a>
          <div style={{ position: "relative", top: "80px" }}>
            <StaticMenu />
          </div>
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
  connect(mapStateToProps, mapDispatchToProps)(DrawerSide)
);
