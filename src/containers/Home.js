import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { setActivePage } from "../store/actions/general";
import ReactHtmlParser from "react-html-parser";
import "./home.css";
import { Row, Col, Spin, Icon, Button, message } from "antd";
import BubbleHeader from "./bubble";
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
    let rightToLeftSupport = {
      flexDirection: "row-reverse",
      direction: "rtl",
      mode: "right",
      margin: {
        marginRight: "1rem"
      }
    };
    if (this.props.language !== "fa") {
      rightToLeftSupport = {
        flexDirection: "row",
        direction: "ltr",
        mode: "left",
        margin: {
          marginLeft: "1rem"
        }
      };
    }
    return (
      <React.Fragment>
        <Row type="flex" justify="space-around">
          <Col span={24}>
            <BubbleHeader
              container={this.props.resumes[0].skills}
              direction={rightToLeftSupport.direction}
              point={true}
            />
          </Col>
        </Row>
        <Row style={{ height: "100vh" }}>
          <Col>
            <div className="summary">
              <h3 className="center_header">
                {this.props.resumes[0].user.profile.first_name}{" "}
                {this.props.resumes[0].user.profile.last_name}
              </h3>
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
