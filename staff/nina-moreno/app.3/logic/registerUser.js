function registerUser(name, email, username, password) {
  if (typeof name !== "string") throw new Error("invalid name type");
  if (name.length < 1) throw new Error("invalid name length");

  if (typeof email !== "string") throw new Error("invalid email type");
  if (email.length < 6) throw new Error("invalid email length");

  if (typeof username !== "string") throw new Error("invalid username type");
  if (username.length < 4) throw new Error("invalid usernamename length");

  if (typeof password !== "string") throw new Error("invalid password type");
  if (password.length < 8) throw new Error("invalid password length");

  var found = users.some(function (user) {
    return user.email === email || user.username === username;
  });

  if (found) throw new Error("user already exists");

  var user = {};
  user.id = uuid();
  user.name = name;
  user.email = email;
  user.username = username;
  user.password = password;

  users.push(user);
}
