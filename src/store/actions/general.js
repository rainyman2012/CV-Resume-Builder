import axios from "axios";
import * as actionType from "./actionTypes";
import { HOSTNAME } from "../../static";
//==================================================== Statistics

export const changeColorSet = color => {
  return {
    type: actionType.GENERAL_COLOR_CHANGED,
    color: color
  };
};

export const generalSetActivePage = num => {
  return {
    type: actionType.GENERAL_ACTIVE_PAGE_CHANGED,
    activePage: num
  };
};
export const generalSetLanguage = language => {
  return {
    type: actionType.GENERAL_LANGUAGE_SET,
    language: language
  };
};

export const postStart = () => {
  return {
    type: actionType.POST_START
  };
};

export const postSuccess = posts => {
  return {
    type: actionType.POST_SUCCESS,
    posts: posts
  };
};

export const postFail = err => {
  return {
    type: actionType.POST_FAIL,
    error: err
  };
};
//====================================================

// This UserName is the name of user is being poing
export const changeColor = color => {
  return dispatch => {
    dispatch(changeColorSet(color));
  };
};

export const setLanguage = language => {
  return dispatch => {
    dispatch(generalSetLanguage(language));
  };
};

export const setActivePage = pageNum => {
  return dispatch => {
    dispatch(generalSetActivePage(pageNum));
  };
};

// This UserName is the name of user is being poing
export const postGetAll = lang => {
  //survey/getQuestions/fa/m/
  return dispatch => {
    dispatch(postStart());
    axios({
      method: "get",
      url: `${HOSTNAME}/memory/${lang}/`,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        const posts = res.data;
        dispatch(postSuccess(posts));
      })
      .catch(err => {
        dispatch(postFail(err));
      });
  };
};
