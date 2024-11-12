(function () {
  function logoutUser() {
    delete sessionStorage.userId;
  }
  logic.logoutUser = logoutUser;
})();
