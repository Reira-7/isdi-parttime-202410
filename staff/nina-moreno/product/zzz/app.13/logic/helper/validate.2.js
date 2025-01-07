const validate = {};

{
  const validateUsername = (username) => {
    if (typeof username !== "string") throw new Error("invalid username type");
    if (username.length < 4) throw new Error("invalid username length");
  };

  const validatePassword = (password) => {
    if (typeof password !== "string") throw new Error("invalid password type");
    if (password.length < 8) throw new Error("invalid password length");
  };

  const validateName = (name) => {
    if (typeof name !== "string") throw new Error("invalid name type");
    if (name.length < 1) throw new Error("invalid name length");
  };

  const validateEmail = (email) => {
    if (typeof email !== "string") throw new Error("invalid email type");
    if (email.length < 6) throw new Error("invalid email length");
  };

  const validateId = (id, explain = "id") => {
    if (typeof id !== "string") throw new Error(`invalid ${explain} type`);
    if (id.length < 10) throw new Error(`invalid ${explain} length`);
  };

  validate.username = validateUsername;
  validate.password = validatePassword;
  validate.name = validateName;
  validate.email = validateEmail;
  validate.id = validateId;
}
