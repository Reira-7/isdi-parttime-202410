var users = [];

users.push({
  id: "2w92r8h09",
  name: "Peter Pan",
  email: "peter@pan.com",
  username: "peterpan",
  password: "12345678",
});

users.push({
  id: "m2w92r8h10",
  name: "Wendy Darling",
  email: "wendy@darling.com",
  username: "wendydarling",
  password: "12345678",
});
localStorage.users = JSON.stringify(users);
