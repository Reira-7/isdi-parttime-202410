logic.getPosts = () => {
  return fetch("http://localhost:8080/posts", {
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

      if (status === 200) return res.json().then((posts) => posts);

      return res.json().then((body) => {
        const { error, message } = body;

        throw new Error(message);
      });
    });
};
