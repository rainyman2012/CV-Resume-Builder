import React from "react";
import { Link } from "react-router-dom";
// import PageNotFound from "../assets/images/PageNotFound";
{
  /* <img src={PageNotFound} /> */
}
class NotFoundPage extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          height: "100vh",
          marginTop: "20%",
          textAlign: "center"
        }}
      >
        <p style={{ fontSize: "25px" }}>There is nothing to show</p>
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
