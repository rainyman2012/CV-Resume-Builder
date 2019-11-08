import React, { Component } from "react";
import "./bubble.css";
import { Row, Col } from "antd";
import TweenOne from "rc-tween-one";
import { Button } from "antd";
import PropTypes from "prop-types";

const scrollingSpeed = 0.3;
const noise_speed = 0.003;
const noise_amnt = 20;
const canvas_width = 2800;
var marqueeEl = null;
const bubbleSettings = [
  { cssClass: "logo-imgAffirm", s: 0.6, x: 0, y: 150 },
  { cssClass: "logo-imgAllianz", s: 0.6, x: -100, y: 100 },
  { cssClass: "logo-imgAmazon ", s: 0.6, x: -200, y: 70 },
  { cssClass: "logo-imgBookingCom", s: 0.6, x: -300, y: 80 }
  // { cssClass: "logo-imgCatawiki", s: 0.6, x: -334, y: 90 },
  // { cssClass: "logo-imgCityofBoston", s: 0.6, x: -356, y: 95 },
  // { cssClass: "logo-imgDeliveroo", s: 0.6, x: -226, y: 100 },
  // { cssClass: "logo-imgDoordash", s: 0.6, x: -256, y: 50 },
  // { cssClass: "logo-imgExpedia", s: 0.6, x: -365, y: 60 },
  // { cssClass: "logo-imgFitbit", s: 0.6, x: -193, y: 150 },
  // { cssClass: "logo-imgGoogle", s: 0.6, x: -387, y: 200 },
  // { cssClass: "logo-imgIndiegogo", s: 0.7, x: -193, y: 180 },
  // { cssClass: "logo-imgInstacart", s: 0.7, x: -88, y: 170 },
  // { cssClass: "logo-imgKickstarter", s: 0.7, x: -320, y: 160 }
  // { cssClass: "logo-imgLyft", s: 0.7, x: 76, y: 323 },
  // { cssClass: "logo-imgNasdaq", s: 0.7, x: 357, y: 129 },
  // { cssClass: "logo-imgNat-Geo ", s: 0.7, x: 342, y: 1440 },
  // { cssClass: "logo-imgRackspace", s: 0.7, x: 293, y: 1929 },
  // { cssClass: "logo-imgReddit", s: 0.7, x: 198, y: 2135 },
  // { cssClass: "logo-imgSalesforce", s: 0.7, x: 82, y: 2276 },
  // { cssClass: "logo-imgShopify", s: 0.7, x: 182, y: 2654 },
  // { cssClass: "logo-imgSlack", s: 0.7, x: 75, y: 2783 },
  // { cssClass: "logo-imgSpotify", s: 0.7, x: 118, y: 1519 },
  // { cssClass: "logo-imgSquarespace", s: 0.7, x: 233, y: 1071 },
  // { cssClass: "logo-imgTarget", s: 0.7, x: 148, y: 1773 },
  // { cssClass: "logo-imgTed", s: 0.7, x: 385, y: 2098 },
  // { cssClass: "logo-imgTheGuardian", s: 0.7, x: 244, y: 2423 },
  // { cssClass: "logo-imgTwitch", s: 0.7, x: 385, y: 901 },
  // { cssClass: "logo-imgUber", s: 0.7, x: 111, y: 624 },
  // { cssClass: "logo-imgWeTransfer", s: 0.7, x: 103, y: 145 },
  // { cssClass: "logo-imgWish", s: 0.7, x: 367, y: 413 },
  // { cssClass: "logo-imgXero", s: 0.7, x: 251, y: 2805 },
  // { cssClass: "logo-imgYelp", s: 0.7, x: 75, y: 1990 }
];

class Bubble {
  constructor(parrent, index, { cssClass, x, y, s = 0.9 }) {
    this.index = index;
    this.initState = x;
    this.x = x;
    this.y = y;
    this.scale = s;
    this.cssClass = cssClass;
    this.parrent = parrent;
    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);

    this.el = document.createElement("div");
    this.el.className = `stripe-bubble ${this.cssClass}`;

    this.parrent.appendChild(this.el);
  }

  update() {
    this.noiseSeedX += noise_speed;
    this.noiseSeedY += noise_speed;

    var randomXPos = window.noise.simplex2(this.noiseSeedX, 0);
    var randomYPos = window.noise.simplex2(this.noiseSeedY, 0);

    this.x -= scrollingSpeed;

    this.xNoisePos = this.x + randomXPos * noise_amnt;
    this.yNoisePos = this.y + randomYPos * noise_amnt;

    if (this.x < -this.parrent.offsetWidth) {
      this.x = 0;
    }

    this.el.style.transform = `translate(${this.xNoisePos}px, ${this.yNoisePos}px) scale(${this.scale})`;
  }
}

class BubbleMarquee {}

class BubbleHeader extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0
  };
  constructor(props) {
    super(props);
    this.bubbles = [];

    requestAnimationFrame(this.update.bind(this));
  }

  componentDidMount() {
    this.marqueeEl = document.querySelector(".stripe-bubbles");
    bubbleSettings.forEach((Settings, index) => {
      this.bubbles.push(new Bubble(this.marqueeEl, index, Settings));
    });
    window.noise.seed(Math.floor(Math.random() * 64000));
  }

  update() {
    this.bubbles.forEach(bubble => {
      this.setState({
        x: bubble.x,
        width: this.marqueeEl.offsetWidth
      });
      bubble.update();
    });
    this.raf = requestAnimationFrame(this.update.bind(this));
  }

  render() {
    return (
      <Row type="flex" justify="start">
        <Col span={23}>
          <div className="stripe-bubbles"></div>
          <p>{this.state.x}</p>
          <p>{this.state.width}</p>
        </Col>
      </Row>
    );
  }
}

export default BubbleHeader;
