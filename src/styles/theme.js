/* eslint-disable import/first */

const themes = {
  default: "./light.css",
  dark: "./dark.css",
};

const activeTheme = "default"; // TODO Get value from global state...
const themeFile = themes[activeTheme] || themes["default"];

require(`${themeFile}`);
