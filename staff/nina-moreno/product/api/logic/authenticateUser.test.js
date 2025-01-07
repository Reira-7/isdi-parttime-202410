import authenticateUser from "./authenticateUser.js";

try {
  const userId = authenticateUser("zanahoria", "123123123");

  console.log(userId);
} catch (error) {
  console.error(error);
}
