logic.createPost = (image, text) => {
  validate.image(image);
  validate.text(text);

  return fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      Authorization: `Basic ${sessionStorage.userId}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, text }),
  })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      const { status } = res;

      if (status === 201) return; // early return

      return res.json().then((body) => {
        const { error, message } = body;

        throw new Error(message);
      });
    });
};
