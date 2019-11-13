import React, { Component } from "react";
import { Spin } from "antd";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./bubble.css";
import { HOSTNAME } from "../../static";
const DEBUG = false;
const START_ENGINE = true;
const scrollingSpeed = 0.3;
const noise_speedx = 0.003;
const noise_speedy = 0.003;
const noise_amnt = 20;
const initWidth = 1000;
const dx = 80; // if you want to bubbles get closer in x axis you must change dx.
const dy = 70; // if you want to bubbles get closer in y axis you must change dy.
const bubbleDiameter = 150 - 10;
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

const SCALES = [0.2, 0.3, 0.4, 0.6, 0.8]; // Depend on your point
class Bubble {
  constructor(parrent, index, { style, x, y, s = 0.9, bubbleDiameter }) {
    this.index = index;
    this.initState = x;
    this.x = x;
    this.y = y;
    this.scale = s;
    this.style = style;
    this.parrent = parrent;
    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);
    this.bubbleDiameter = bubbleDiameter;
    this.el = document.createElement("div");
    this.el.className = "stripe-bubble";
    if (style.backgroundImage)
      this.el.style.backgroundImage = this.style.backgroundImage;
    else this.el.style.backgroundColor = this.style.backgroundColor;
    this.parrent.appendChild(this.el);
  }

  remove() {
    this.parrent.removeChild(this.el);
  }
  recalculate(width, direction, display, setting) {
    var relativeParentWidth =
      this.parrent.offsetWidth > width ? width : this.parrent.offsetWidth;
    this.x = Math.floor(setting.x * (relativeParentWidth / width));
    this.scale = setting.s * (relativeParentWidth / width);

    if (DEBUG) {
      var node = document.createElement("p");
      node.innerText = this.x;
      node.style.fontSize = "30px";
      node.style.fontWeight = "bold";
      node.style.color = "red";
      this.el.appendChild(node);
    }

    this.update(direction, display, relativeParentWidth);
  }

  update(direction, display, relativeParentWidth) {
    this.noiseSeedX += noise_speedx;
    this.noiseSeedY += noise_speedy;

    var randomXPos = window.noise.simplex2(this.noiseSeedX, 0);
    var randomYPos = window.noise.simplex2(this.noiseSeedY, 0);

    if (direction == "ltr") {
      if (this.x < 0) this.x *= -1;
      this.x += scrollingSpeed;
      if (this.x >= this.parrent.offsetWidth - this.bubbleDiameter) {
        this.x = 0;
      }
      this.xNoisePos = this.x + randomXPos * noise_amnt;
    } else {
      if (this.x > 0) this.x *= -1;
      this.x -= scrollingSpeed;
      this.xNoisePos = this.x - randomXPos * noise_amnt;
      if (this.x < -(this.parrent.offsetWidth - this.bubbleDiameter)) {
        this.x = 0;
      }
    }

    if (this.x >= this.parrent.offsetWidth - this.bubbleDiameter) {
      this.x = 0;
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
    visible: true,
    width: 0,
    bubbleSettings: []
  };

  constructor(props) {
    super(props);
    this.bubbles = [];
    // this.update = this.update.bind(this);
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
    if (DEBUG) console.log("call mount");
    this.marqueeEl = document.querySelector(".stripe-bubbles");
    // window.addEventListener("resize", this.update, true);
    this.props.container.forEach((element, index) => {
      // if (index == 1) {
      let dynamicbackground = "";

      if (element.image) {
        dynamicbackground = {
          backgroundImage: `url("http://192.168.25.128:8000${element.image}")`
        };
      } else {
        dynamicbackground = {
          backgroundColor: colors[this.getRandomInt(0, colors.length - 1)]
        };
      }
      var scale = null;
      if (this.props.point && element.point) scale = SCALES[element.point - 1];
      // Scales will selet based on skill point
      else scale = this.getRandomFloat(0.2, 0.7);
      var relativeParentWidth =
        this.marqueeEl.offsetWidth > initWidth
          ? initWidth
          : this.marqueeEl.offsetWidth;
      const setting = {
        style: {
          ...dynamicbackground
        },
        bubbleDiameter: bubbleDiameter * (relativeParentWidth / initWidth),
        s: scale, // Scales will selet based on skill point
        x: dx * index,
        y: this.getRandomInt(0, dy)
      };

      this.bubbles.push({
        obj: new Bubble(this.marqueeEl, index, setting),
        setting
      });
      // }
    });

    window.noise.seed(Math.floor(Math.random() * 64000));
  }

  componentWillUnmount() {
    if (DEBUG) console.log("call unmount");
    for (var i = 0; i < this.bubbles.length; i++) this.bubbles[i].obj.remove();

    if (DEBUG) console.log("bubble cleared");
  }

  update() {
    if (this.state.width != this.marqueeEl.offsetWidth) {
      if (DEBUG) console.log("width changed to " + this.marqueeEl.offsetWidth);

      this.setState({ width: this.marqueeEl.offsetWidth });
    } else {
      var relativeParentWidth =
        this.marqueeEl.offsetWidth > initWidth
          ? initWidth
          : this.marqueeEl.offsetWidth;
      this.bubbles.forEach(bubble => {
        bubble.obj.update(
          this.props.direction,
          this.state.visible,
          relativeParentWidth
        );
      });
    }
    // start engine

    if (START_ENGINE) this.raf = requestAnimationFrame(this.update.bind(this));
  }

  render() {
    if (DEBUG) console.log("call bubble render ");
    this.bubbles.forEach((bubble, index) => {
      if (DEBUG) console.log("in the middle of rendering each bubbles ");
      bubble.obj.recalculate(
        initWidth,
        this.props.direction,
        this.state.visible,
        bubble.setting
      );
    });
    return (
      <div>
        <div className="stripe-bubbles"></div>
      </div>

      // {/* <p>{this.state.x}</p>
      // <p>{this.state.width}</p> */}
    );
  }
}
export default BubbleHeader;
