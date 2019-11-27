import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { setActivePage } from "../store/actions/general";
import { Row, Col, Spin, Timeline, Icon } from "antd";
import { HOSTNAME } from "../static";
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
                src={`${HOSTNAME}${exper.image}`}
              />
            }
          >
            <Row
              type="flex"
              style={{ flexDirection: rightToLeftSupport.flexDirection }}
            >
              <Col span={12}>
                <h3>
                  {general_texts.companyName} :{" "}
                  <span>{exper.company_name}</span>
                </h3>
              </Col>
            </Row>
            <Row
              type="flex"
              style={{ flexDirection: rightToLeftSupport.flexDirection }}
            >
              <Col span={3} style={{ direction: rightToLeftSupport.direction }}>
                <h3>{general_texts.website} :</h3>
              </Col>
              <Col>
                <span>
                  <a href={exper.website}>{exper.website}</a>
                </span>
              </Col>
            </Row>
            <Row
              type="flex"
              style={{ flexDirection: rightToLeftSupport.flexDirection }}
            >
              <Col span={12}>
                <h3>
                  {general_texts.from} :<span>{exper.work_from}</span>
                </h3>
              </Col>
              <Col span={12}>
                <h3>
                  {general_texts.to} : <span>{exper.work_to}</span>
                </h3>
              </Col>
            </Row>
            {exper.about_company ? (
              <Row>
                <Col
                  style={{
                    textAlign: "justify",
                    direction: rightToLeftSupport.direction,
                    marginTop: "20px",
                    ...rightToLeftSupport.headMargin
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
                    textAlign: "justify",
                    direction: rightToLeftSupport.direction,
                    marginTop: "20px",
                    ...rightToLeftSupport.headMargin
                  }}
                >
                  <h4 style={{ fontWeight: "bold" }}>
                    {general_texts.duties} :
                  </h4>
                  {ReactHtmlParser(exper.duties_and_achivements)}
                </Col>
              </Row>
            ) : null}
          </Timeline.Item>
        );
      }
    );

    return (
      <React.Fragment>
        {this.props.resumes[0] ? (
          <div id="Experiences" style={{ direction: "ltr" }}>
            <Timeline
              mode={rightToLeftSupport.mode}
              style={{ width: "60rem", margin: "auto 40px" }}
            >
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
  connect(mapStateToProps, mapDispatchToProps)(Experience)
);
