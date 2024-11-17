(function () {
  function isUserLoggedIn() {
    return !!sessionStorage.userId;
  }
  logic.isUserLoggedIn = isUserLoggedIn;
})();
