function isUserLoggedIn() {
  return typeof sessionStorage.userId === "string";
}
