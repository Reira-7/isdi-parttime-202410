function authenticateUser(username, password) {
  if (typeof username !== "string") throw new Error("invalid username type");
  if (username.length < 4) throw new Error("invalid usernamename length");

  if (typeof password !== "string") throw new Error("invalid password type");
  if (password.length < 8) throw new Error("invalid password length");

  var user = users.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (!user) throw new Error("wrong credentials");
  return user;
}
