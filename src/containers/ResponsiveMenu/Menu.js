import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import { Icon, Avatar, Menu, Select } from "antd";
import { setLanguage, changeColor } from "../../store/actions/general";
import { Lang as T } from "../../languages";
import { HOSTNAME } from "../../static";
import "./menu.css";
const { Option } = Select;

const StaticMenu = ({ language, changeLanguage, activePage, resumes }) => {
  const [selected, setSelected] = useState("");

  function onChange(value) {
    console.log(`selected ${value}`);
    changeLanguage(value);
  }

  function handleSelected(e) {
    console.log(e.key);
    setSelected(e.key);
  }
  function getFullName() {
    return (
      <h3 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {`${resumes[0].user.profile.first_name} ${resumes[0].user.profile.last_name}`}
      </h3>
    );
  }
  let rightToLeftSupport = {
    flexDirection: "row-reverse",
    direction: "rtl",
    mode: "right",
    DynamicMenuItemWidth: "100px",

    DynamicMenuItemAlignment: {
      textAlign: "Right"
    }
  };
  let flag = "";
  if (language == "fa") {
    flag = (
      <div style={{ textAlign: "left" }}>
        <ReactCountryFlag style={{ textAlign: "center" }} code="ir" svg />
      </div>
    );
    document.body.style.fontFamily = "Amiri";
    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.dir = "rtl";
  } else {
    rightToLeftSupport = {
      flexDirection: "row",
      direction: "ltr",
      mode: "left",
      DynamicMenuItemWidth: "100px",

      DynamicMenuItemAlignment: {
        textAlign: "left"
      }
    };
    flag = (
      <div style={{ textAlign: "left" }}>
        <ReactCountryFlag style={{ textAlign: "center" }} code="us" svg />
      </div>
    );
    document.body.style.fontFamily = "Amiri";
    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.dir = "ltr";
  }
  const general_texts = T[language];
  if (!resumes) {
    return null;
  }
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[activePage]}
      className="menu"
    >
      <h3> {general_texts.logoText} </h3>

      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        <img
          src={`${HOSTNAME}/static/Ehsan.jpg`}
          className="img-profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundPosition: "center top",
            backgroundSize: "20%"
          }}
        />
      </div>
      <h3> {getFullName()} </h3>

      <Menu.Item
        key="home"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/">
          <div
            style={{
              width: rightToLeftSupport.DynamicMenuItemWidth,
              margin: "auto auto",
              ...rightToLeftSupport.DynamicMenuItemAlignment
            }}
          >
            <i class="fas fa-star" style={{ margin: "5px" }}></i>
            <span className="nav-text"> {general_texts.menu.page1} </span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="skills"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/skill">
          <div
            style={{
              width: rightToLeftSupport.DynamicMenuItemWidth,
              margin: "auto auto",
              ...rightToLeftSupport.DynamicMenuItemAlignment
            }}
          >
            <i class="fas fa-female" style={{ margin: "5px" }}></i>
            <span className="nav-text"> {general_texts.menu.page2} </span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="exprience"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/expriences">
          <div
            style={{
              width: rightToLeftSupport.DynamicMenuItemWidth,
              margin: "auto auto",
              ...rightToLeftSupport.DynamicMenuItemAlignment
            }}
          >
            <i class="fas fa-female" style={{ margin: "5px" }}></i>
            <span className="nav-text"> {general_texts.menu.page3} </span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="education"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/educations">
          <div
            style={{
              width: rightToLeftSupport.DynamicMenuItemWidth,
              margin: "auto auto",
              ...rightToLeftSupport.DynamicMenuItemAlignment
            }}
          >
            <i class="fas fa-female" style={{ margin: "5px" }}></i>
            <span className="nav-text"> {general_texts.menu.page4} </span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="alboum"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/album">
          <div
            style={{
              width: rightToLeftSupport.DynamicMenuItemWidth,
              margin: "auto auto",
              ...rightToLeftSupport.DynamicMenuItemAlignment
            }}
          >
            <i class="fas fa-female" style={{ margin: "5px" }}></i>
            <span className="nav-text"> {general_texts.menu.page5} </span>
          </div>
        </Link>
      </Menu.Item>

      <div
        style={{
          marginBottom: "15px",
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        <Select
          style={{ width: "100px" }}
          placeholder={flag}
          onChange={onChange}
        >
          <Option value="en">
            <ReactCountryFlag code="us" svg />
          </Option>
          <Option value="fa">
            <ReactCountryFlag code="ir" svg />
          </Option>
        </Select>
      </div>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    color: state.general.color,
    language: state.general.language,
    activePage: state.general.activePage,
    resumes: state.general.resumes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeColor: color => dispatch(changeColor(color)),
    changeLanguage: lang => dispatch(setLanguage(lang))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StaticMenu)
);
