import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Rate } from "antd";
// import ReactHtmlParser from "react-html-parser";
import { setActivePage } from "../store/actions/general";
import { Row, Col, Spin } from "antd";
import { Lang as T } from "../languages";
import "./general.css";
import "./Skill.css";
const PAGE = "skills";

class Skill extends Component {
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
    const general_texts = T[this.props.language];

    const rate = this.props.resumes[0].skills.map((skill, index) => {
      return (
        <Row type="flex" justify="center">
          <Col span={6}>
            <span style={{ margin: "1rem" }}>{skill.name}</span>
          </Col>
          <Col span={6}>
            <span>{general_texts.rate[skill.point - 1]}</span>
          </Col>
          <Col span={6}>
            <Rate disabled={true} value={skill.point} />
          </Col>
        </Row>
      );
    });

    return (
      <>
        {this.props.resumes[0] ? (
          <div id="Skills" style={{ direction: "ltr" }}>
            {rate}
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>No Content</p>
          </div>
        )}
      </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Skill));
