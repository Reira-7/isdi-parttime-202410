const sessionStorage = require("../data/sessionStorage");

const isUserLoggedIn = () => !!sessionStorage.userId;

module.exports = isUserLoggedIn;
