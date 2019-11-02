import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeColor, resumesGetAll } from "../store/actions/general";
import { Layout, message } from "antd";
import "../stylesheets/layout.css";
import { Lang as T } from "../languages";
import DrawerSide from "./ResponsiveMenu/DrawerSide";
import StaticSide from "./ResponsiveMenu/StaticSide";
import "./layout.css";
const { Content, Footer } = Layout;

class CustomLayout extends React.Component {
  state = {
    background_color: "#c64b76",
    heartType: "pic",
    serverError: false,
    likedNum: 0,
    visible: false
  };
  changeColorHandler = (e, color) => {
    this.props.changeColor(color);
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleLogout = () => {
    this.props.logout();
    message.success("loged out");
    this.props.history.push("/");
  };

  componentDidMount() {
    this.props.getAllResumes(this.props.language);
    document.body.style.fontFamily = "Amiri";
    document.body.style.color = "#030405";
    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.dir = "rtl";
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  //   hamburger.click(function(e) {
  //   e.preventDefault();
  //   $(this).toggleClass('is-active');
  //   // This will add `sidebar-opened`
  //   $('#wrapper').toggleClass("sidebar-opened");
  //   // Remove magin left
  //   sidebar.toggleClass('ml-0');
  // });

  render() {
    let layoutPositionClass = "";
    if (this.props.language == "fa") {
      layoutPositionClass = "side-rtl";
    } else {
      layoutPositionClass = "side-ltr";
    }
    // if (this.props.language == "fa") {
    //   sideDir = {
    //     right: 0
    //   };
    //   sideMargin = { marginRight: "200px" };
    // } else {
    //   sideDir = {
    //     left: 0
    //   };
    //   sideMargin = { marginLeft: "200px" };
    // }
    const general_texts = T[this.props.language];

    // const { authenticated } = this.props;
    // here is menu bar of layout
    // This is all content page
    // here is footer for layout

    if (this.state.serverError)
      return (
        <div style={{ textAlign: "center" }}>
          <p> {general_texts.serverError}... </p>{" "}
        </div>
      );

    return (
      <Layout>
        <DrawerSide
          visible={this.state.visible}
          onClose={this.onClose}
          onShow={this.showDrawer}
          sideMargin={this.state.sideMargin}
        />
        <StaticSide />
        <Layout className={layoutPositionClass}>
          <Content
            className="content_basic"
            style={{
              overflow: "initial"
            }}
          >
            {this.props.children}
          </Content>
          <Footer
            className="custom_footer"
            style={{
              margin: "0px 16px 0",
              textAlign: "center",
              backgroundColor: this.props.color,
              fontFamily: "sans-serif"
            }}
          >
            CopyRight© 2019 Created by Revenger
          </Footer>
        </Layout>
      </Layout>
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
    changeColor: color => dispatch(changeColor(color)),
    getAllResumes: lang => dispatch(resumesGetAll(lang))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
