import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { setActivePage } from "../../store/actions/general";
import ReactHtmlParser from "react-html-parser";
import "./album.css";
import { Row, Col, Spin, Icon, Button, message } from "antd";
import { Lang as T } from "../../languages";

const PAGE = "album";
class Album extends Component {
  componentWillMount() {
    this.props.setActivePage(PAGE);
  }

  render() {
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
      <Row>
        <Col>
          <div className="album">
            <h3 className="center_header">
              <p>asdsad</p>
            </h3>
          </div>
        </Col>
      </Row>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));
