logic.loginUser = (username, password) => {
  validate.username(username);
  validate.password(password);

  return fetch("http://localhost:8080/users/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      const { status } = res;

      if (status === 200)
        return res.json().then((userId) => {
          sessionStorage.userId = userId;
        });

      return res.json().then((body) => {
        const { error, message } = body;

        throw new Error(message);
      });
    });
};
