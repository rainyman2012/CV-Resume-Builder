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
const PAGE = "Experience";

class Education extends Component {
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
    const general_texts = T[this.props.language];

    const timeLineItems = this.props.resumes[0].educations.map(
      (exper, index) => {
        return (
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            style={{ width: "30rem" }}
          >
            <Row
              type="flex"
              style={{ flexDirection: rightToLeftSupport.flexDirection }}
            >
              <Col span={6} style={rightToLeftSupport.margin}>
                {exper.grade}
              </Col>
              <Col span={6} style={{ textAlign: "center" }}>
                {exper.major}
              </Col>
              <Col span={10} style={{ textAlign: "center" }}>
                <p>
                  <span>{general_texts.from}:</span>{" "}
                  <a href={exper.website}> {exper.university}</a>
                </p>
              </Col>
            </Row>

            {exper.Article_names ? (
              <Row>
                <Col
                  style={{
                    marginLeft: "1rem",
                    textAlign: "justify",
                    direction: rightToLeftSupport.direction
                  }}
                >
                  {ReactHtmlParser(exper.Article_names)}
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
  )(Education)
);
