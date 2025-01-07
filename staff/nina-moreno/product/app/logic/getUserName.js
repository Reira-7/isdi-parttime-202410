logic.getUserName = () => {
  return fetch("http://localhost:8080/users", {
    method: "GET",
    headers: {
      Authorization: `Basic ${sessionStorage.userId}`,
    },
  })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      const { status } = res;

      if (status === 200) return res.json().then((name) => name);

      return res.json().then((body) => {
        const { error, message } = body;

        throw new Error(message);
      });
    });
};
