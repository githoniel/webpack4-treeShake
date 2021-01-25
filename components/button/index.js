import React from 'react';
import { scrollTo } from '../util/scrollTo.js';
import './style/index.css';

function MyButton() {
  scrollTo();
  return /*#__PURE__*/React.createElement("button", null, "my-button");
}

export default MyButton;
