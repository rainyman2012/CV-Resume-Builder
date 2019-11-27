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
import MusicPlayer from "./player";

const { Content, Footer } = Layout;
let persianPlayList = [
  {
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://rozmusic.com/wp-content/uploads/2019/05/Sirvan-Khosravi-Dorost-Nemisham.jpg",
    musicSrc: () => {
      return Promise.resolve(
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"
      );
    }
  }
];

let englishPlayList = [
  {
    name: "bruno mars",
    singer: "Just The Way You Are ",
    cover:
      "https://www.washingtonian.com/wp-content/uploads/2017/12/WW.bruno_.jpg",
    musicSrc: () => {
      return Promise.resolve(
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573902509/Bruno_Mars_-_Just_The_Way_You_Are_amjqv8.mp3"
      );
    }
  }
];
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
      <Layout
        style={{
          background: "-webkit-radial-gradient(#205983, #0A2742)",
          background: "radial-gradient(#205983, #0A2742)",
          minHeight: "100vh"
        }}
      >
        <DrawerSide
          visible={this.state.visible}
          onClose={this.onClose}
          onShow={this.showDrawer}
          sideMargin={this.state.sideMargin}
        />
        <StaticSide />
        <Layout className={`custom-main ${layoutPositionClass}`}>
          <Content className="content_basic">{this.props.children}</Content>
          <div
            className="custom-footer"
            style={{
              backgroundColor: "transparent",
              height: "20px",
              textAlign: "center",
              fontFamily: "sans-serif"
            }}
          >
            <p className="footer-text">
              CopyRight© 2019 Created by Ehsan Ahmadi
            </p>
          </div>
        </Layout>

        <MusicPlayer
          audioList={
            this.props.language == "fa" ? persianPlayList : englishPlayList
          }
          language={this.props.language}
        />
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
  connect(mapStateToProps, mapDispatchToProps)(CustomLayout)
);
