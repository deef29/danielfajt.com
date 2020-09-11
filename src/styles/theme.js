/* eslint-disable import/first */

const themes = {
  lightBlue: "./light.css",
  darkOrange: "./dark.css",
};

const activeTheme = "lightBlue"; // TODO Get value from global state...
const themeFile = themes[activeTheme] || themes["default"];

require(`${themeFile}`);
