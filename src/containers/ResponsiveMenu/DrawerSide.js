import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { Button, Drawer, Layout } from "antd";
import { postGetAll } from "../../store/actions/general";

import { Lang as T } from "../../languages";
import "./Side.css";
import StaticMenu from "./Menu";

const { Sider } = Layout;

class DrawerSide extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.props.getAllPosts(nextProps.language);
    }
  }

  render() {
    let toggleAlign = {};
    let placement = "";
    if (this.props.language == "fa") {
      toggleAlign = { right: "10px" };
      placement = "right";
    } else {
      toggleAlign = { left: "10px" };
      placement = "left";
    }
    const general_texts = T[this.props.language];

    return (
      <div>
        <div className="hamburgerPart">
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
          <span>{general_texts.menuName}</span>
        </div>

        <Drawer
          placement={placement}
          closable={false}
          onClose={this.props.onClose}
          visible={this.props.visible}
          width="200"
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
    getAllPosts: lang => dispatch(postGetAll(lang))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrawerSide)
);
