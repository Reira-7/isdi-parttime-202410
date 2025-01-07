import registerUser from "./registerUser.js";

try {
  registerUser("Zana Horia", "zana@horia.com", "zanahoria", "123123123");

  console.log("user registered");
} catch (error) {
  console.error(error);
}
