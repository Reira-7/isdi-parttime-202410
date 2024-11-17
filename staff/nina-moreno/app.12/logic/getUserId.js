(function () {
  function getUserId() {
    return sessionStorage.userId || null;
  }

  logic.getUserId = getUserId;
})();
