(function () {
  function loginUser(username, password) {
    validate.username(username);
    validate.password(password);

    var users = JSON.parse(localStorage.users);

    var user = users.find(function (user) {
      return user.username === username && user.password === password;
    });

    if (!user) throw new Error("wrong credentials");

    sessionStorage.userId = user.id;
  }

  logic.loginUser = loginUser;
})();
