import React, { Component } from "react";
import { Spin } from "antd";

import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./bubble.css";
import { HOSTNAME } from "../static";
const scrollingSpeed = 0.3;
const noise_speedx = 0.003;
const noise_speedy = 0.003;
const noise_amnt = 20;
const colors = [
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "YellowGreen"
];
class Bubble {
  constructor(parrent, index, { style, x, y, s = 0.9 }) {
    this.index = index;
    this.initState = x;
    this.x = x;
    this.y = y;
    this.scale = s;
    this.style = style;
    this.parrent = parrent;
    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);

    this.el = document.createElement("div");
    this.el.className = "stripe-bubble";
    if (style.backgroundImage)
      this.el.style.backgroundImage = this.style.backgroundImage;
    else this.el.style.backgroundColor = this.style.backgroundColor;
    this.parrent.appendChild(this.el);
  }

  update(direction, display) {
    this.noiseSeedX += noise_speedx;
    this.noiseSeedY += noise_speedy;

    var randomXPos = window.noise.simplex2(this.noiseSeedX, 0);
    var randomYPos = window.noise.simplex2(this.noiseSeedY, 0);

    if (direction == "ltr") {
      this.x += scrollingSpeed;
      if (this.x >= this.parrent.offsetWidth) {
        this.x = 0;
      }
      this.xNoisePos = this.x + randomXPos * noise_amnt;
    } else {
      if (this.x > 0) this.x *= -1;
      this.x -= scrollingSpeed;
      this.xNoisePos = this.x - randomXPos * noise_amnt;
      if (this.x < -this.parrent.offsetWidth) {
        this.x = 0;
      }
    }

    this.yNoisePos = this.y + randomYPos * noise_amnt;
    if (!display) {
      this.el.style.display = "none";
    } else {
      this.el.style.display = "block";
      this.el.style.transform = `translate(${this.xNoisePos}px, ${this.yNoisePos}px) scale(${this.scale})`;
    }
  }
}

class BubbleHeader extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    dx: 100,
    bubbleSettings: []
  };

  constructor(props) {
    super(props);
    this.bubbles = [];
    requestAnimationFrame(this.update.bind(this));
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  componentDidMount() {
    this.marqueeEl = document.querySelector(".stripe-bubbles");

    this.props.container.forEach((element, index) => {
      let dynamicbackground = "";

      if (element.image) {
        dynamicbackground = {
          backgroundImage: `url("http://localhost:8000${element.image}")`
        };
      } else {
        dynamicbackground = {
          backgroundColor: colors[this.getRandomInt(0, colors.length - 1)]
        };
      }

      const setting = {
        style: {
          ...dynamicbackground
        },

        s: this.getRandomFloat(0.3, 0.8),
        x: this.state.dx * index,
        y: this.getRandomInt(0, 100)
      };

      this.bubbles.push(new Bubble(this.marqueeEl, index, setting));
    });
    window.noise.seed(Math.floor(Math.random() * 64000));
  }

  componentWillUnmount() {
    this.bubbles = [];
  }
  update() {
    var display = true;
    this.setState({
      width: this.marqueeEl.offsetWidth
    });
    if (this.marqueeEl.offsetWidth < 760) display = false;
    this.bubbles.forEach(bubble => {
      bubble.update(this.props.direction, display);
    });
    this.raf = requestAnimationFrame(this.update.bind(this));
  }

  render() {
    return (
      <div className="stripe-bubbles"></div>
      // {/* <p>{this.state.x}</p>
      // <p>{this.state.width}</p> */}
    );
  }
}
export default BubbleHeader;
