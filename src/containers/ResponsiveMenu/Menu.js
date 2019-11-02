import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import { Icon, Avatar, Menu, Select } from "antd";
import { setLanguage, changeColor } from "../../store/actions/general";
import { Lang as T } from "../../languages";
const { Option } = Select;

const StaticMenu = ({ language, changeLanguage, activePage }) => {
  const [selected, setSelected] = useState("");

  function onChange(value) {
    console.log(`selected ${value}`);
    changeLanguage(value);
  }

  function handleSelected(e) {
    console.log(e.key);
    setSelected(e.key);
  }

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
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[activePage]}
      style={{ backgroundColor: "#BD5D38" }}
    >
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        <p> {general_texts.logoText} </p>{" "}
        <img
          src={source}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundPosition: "center top",
            backgroundSize: "20%"
          }}
        />{" "}
      </div>{" "}
      <Menu.Item
        key="1"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/1">
          <i class="fas fa-star" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page1} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="2"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/2">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page2} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="3"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/3">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page3} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="4"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/4">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page3} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="5"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/5">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page3} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="6"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/6">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page3} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="7"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/7">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page3} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <Menu.Item
        key="8"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/8">
          <i class="fas fa-female" style={{ margin: "5px" }}>
            {" "}
          </i>{" "}
          <span className="nav-text"> {general_texts.menu.page3} </span>{" "}
        </Link>{" "}
      </Menu.Item>{" "}
      <div
        style={{
          marginBottom: "15px",
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        <Select style={{ width: 100 }} placeholder={flag} onChange={onChange}>
          <Option value="en">
            <ReactCountryFlag code="us" svg />
          </Option>{" "}
          <Option value="fa">
            <ReactCountryFlag code="ir" svg />
          </Option>{" "}
        </Select>{" "}
      </div>{" "}
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    color: state.general.color,
    language: state.general.language,
    activePage: state.general.activePage
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
