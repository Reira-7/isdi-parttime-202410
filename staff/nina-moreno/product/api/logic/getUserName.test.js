import getUserName from "./getUserName.js";

try {
  const name = getUserName("m4aa84g68ia");

  console.log(name);
} catch (error) {
  console.error(error);
}
