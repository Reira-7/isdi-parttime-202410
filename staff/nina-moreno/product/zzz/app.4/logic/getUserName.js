function getUserName() {
  users.find(function (user) {
    return user.id === sessionStorage.userId;
  });
  if (!user) throw new Error("user not found");

  return user.name;
}
