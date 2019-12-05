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

const StaticMenu = ({
  language,
  changeLanguage,
  activePage,
  resumes,
  menuStyle
}) => {
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
    return `${resumes[0].user.profile.first_name} ${resumes[0].user.profile.last_name}`;
  }
  let rightToLeftSupport = {
    resumeDonwloadLink:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1575542074/EhsanAhmadiPersian_nvde0y.pdf",
    flexDirection: "row-reverse",
    direction: "rtl",
    mode: "right",
    DynamicMenuItemWidth: "100px",

    DynamicMenuItemAlignment: {
      textAlign: "Right"
    },
    dropdDownMenu: {
      position: "absolute",
      left: "10px"
    },
    dropdDownMenuSelected: {
      float: "right"
    },
    githubBanner: "github-rtl"
  };

  if (language == "fa") {
    document.body.style.fontFamily = "Amiri";
    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.dir = "rtl";
  } else {
    rightToLeftSupport = {
      resumeDonwloadLink:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1575542066/EhsanAhmadiEnglish_xq9i3w.pdf",
      flexDirection: "row",
      direction: "ltr",
      mode: "left",
      DynamicMenuItemWidth: "150px",

      DynamicMenuItemAlignment: {
        textAlign: "left"
      },
      dropdDownMenu: {
        position: "absolute",
        right: "10px"
      },
      dropdDownMenuSelected: {
        float: "left"
      },
      githubBanner: "github-ltr"
    };

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
      style={menuStyle}
    >
      <div
        style={{
          textAlign: "center",

          marginBottom: "15px"
        }}
      >
        <h2> {general_texts.logoText} </h2>
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
        <h3 style={{ marginTop: "20px" }}> {getFullName()} </h3>
      </div>

      <Menu.Item
        key="home"
        className="item"
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
        className="item"
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
        key="experiences"
        className="item"
        onClick={handleSelected}
        style={{ textAlign: "center" }}
      >
        <Link to="/experiences">
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
        key="educations"
        onClick={handleSelected}
        className="item"
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
        key="album"
        onClick={handleSelected}
        className="item"
        style={{ textAlign: "center" }}
      >
        <a
          href={rightToLeftSupport.resumeDonwloadLink}
          target="_blank"
          download
        >
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
        </a>
      </Menu.Item>

      <div
        style={{
          marginBottom: "15px",
          marginTop: "15px",
          marginBottom: "15px",
          direction: "ltr"
        }}
      >
        {/* For supporting RTL Languages i forced to disable some css floating of Antd CSS like 
      ant-select-selection-selected-value, ant-select-dropdown-menu-item, ant-select-dropdown-menu. You can find this changes in menu.css */}
        <Select
          style={{ width: "100%" }}
          defaultValue={general_texts.selectLanguage}
          onChange={onChange}
        >
          <Option value="en">
            <div style={rightToLeftSupport.dropdDownMenuSelected}>
              <span>English</span>
              <span style={rightToLeftSupport.dropdDownMenu}>
                <ReactCountryFlag code="us" svg />
              </span>
            </div>
          </Option>
          <Option value="fa">
            <div style={rightToLeftSupport.dropdDownMenuSelected}>
              <span>فارسی</span>
              <span style={rightToLeftSupport.dropdDownMenu}>
                <ReactCountryFlag code="ir" svg />
              </span>
            </div>
          </Option>
        </Select>
      </div>

      <div class="social-icons">
        <a href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
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
  connect(mapStateToProps, mapDispatchToProps)(StaticMenu)
);
