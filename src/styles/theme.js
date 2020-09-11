/* eslint-disable import/first */

const themes = {
  lightBlue: "./lightblue.css",
  darkOrange: "./darkorange.css",
};

const activeTheme = "darkOrange"; // TODO Get value from global state...
const themeFile = themes[activeTheme] || themes["default"];

require(`${themeFile}`);
