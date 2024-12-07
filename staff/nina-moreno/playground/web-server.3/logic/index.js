const loginUser = require("./loginUser");
const isUserLoggedIn = require("./isUserLoggedIn");
const getUserName = require("./getUserName");
const logoutUser = require("./logoutUser");
const registerUser = require("./registerUser");

const logic = {
  loginUser,
  isUserLoggedIn,
  getUserName,
  logoutUser,
  registerUser,
};

module.exports = logic;
