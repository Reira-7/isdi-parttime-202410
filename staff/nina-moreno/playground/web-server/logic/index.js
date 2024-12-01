const loginUser = require("./loginUser");
const isUserLoggedIn = require("./isUserLoggedIn");
const getUserName = require("./getUserName");
const logoutUser = require("./logoutUser");

const logic = {
  loginUser,
  isUserLoggedIn,
  getUserName,
  logoutUser,
};

module.exports = logic;
