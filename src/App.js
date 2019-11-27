import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import "antd/dist/antd.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CustomLayout from "./containers/Layout";
import ScrollToTopPage from "./hoc/ScrollToTop";
class App extends Component {
  render() {
    console.log(window.navigator.language);

    return (
      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
    );
  }
}

export default App;
// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
