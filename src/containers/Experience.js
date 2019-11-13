import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { setActivePage } from "../store/actions/general";
import { Row, Col, Spin, Timeline, Icon } from "antd";
import { Lang as T } from "../languages";
import "./general.css";
import "./Experience.css";
const PAGE = "experiences";

class Experience extends Component {
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
      headMargin: {
        marginRight: "1rem"
      }
    };
    if (this.props.language !== "fa") {
      rightToLeftSupport = {
        flexDirection: "row",
        direction: "ltr",
        mode: "left",
        headMargin: {
          marginLeft: "1rem"
        }
      };
    }
    const general_texts = T[this.props.language];

    const timeLineItems = this.props.resumes[0].experiences.map(
      (exper, index) => {
        return (
          <Timeline.Item
            dot={
              <img
                style={{ width: "50px", height: "50px" }}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            }
            style={{ width: "40rem" }}
          >
            <Row
              type="flex"
              style={{ flexDirection: rightToLeftSupport.flexDirection }}
            >
              <Col span={6} style={rightToLeftSupport.headMargin}>
                {exper.company_name}
              </Col>
              <Col span={5}>
                <p>
                  <span>{general_texts.from}:</span> {exper.work_from}
                </p>
              </Col>
              <Col span={5}>
                <p>
                  <span>{general_texts.to}:</span> {exper.work_to}
                </p>
              </Col>

              <Col span={6} style={{ textAlign: "center" }}>
                <a href={exper.website}>{exper.website}</a>
              </Col>
            </Row>
            {exper.about_company ? (
              <Row>
                <Col
                  style={{
                    marginLeft: "1rem",
                    textAlign: "justify",
                    direction: rightToLeftSupport.direction
                  }}
                >
                  {ReactHtmlParser(exper.about_company)}
                </Col>
              </Row>
            ) : null}

            {exper.duties_and_achivements ? (
              <Row>
                <Col
                  style={{
                    marginLeft: "1rem",
                    textAlign: "justify",
                    direction: rightToLeftSupport.direction
                  }}
                >
                  <h3 style={{ fontWeight: "bold" }}>
                    {general_texts.duties} :
                  </h3>
                  {ReactHtmlParser(exper.duties_and_achivements)}
                </Col>
              </Row>
            ) : null}
          </Timeline.Item>
        );
      }
    );

    return (
      <div>
        {this.props.resumes[0] ? (
          <div id="Experiences" style={{ direction: "ltr" }}>
            <Timeline mode={rightToLeftSupport.mode}>
              {timeLineItems}
              {timeLineItems}
              {timeLineItems}
              {timeLineItems}
              {timeLineItems}
              {timeLineItems}
              {timeLineItems}
            </Timeline>
          </div>
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
  )(Experience)
);
