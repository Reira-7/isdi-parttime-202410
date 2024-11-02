function isUserLoggedIn() {
  if (sessionStorage.userId) return true;
  return false;
}
