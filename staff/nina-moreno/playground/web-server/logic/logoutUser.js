const sessionStorage = require("../data/sessionStorage");

const logoutUser = () => {
  delete sessionStorage.userId;
};

module.exports = logoutUser;
