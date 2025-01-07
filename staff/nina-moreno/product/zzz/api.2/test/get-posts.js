fetch("http://localhost:8080/posts", {
  method: "GET",
  headers: {
    Authorization: "Basic m2w92r8h09",
  },
})
  .then((res) => {
    const { status } = res;

    if (status === 200)
      return res.json().then((body) => console.log("OK", status, body));

    return res.json().then((body) => console.log("KO", status, body));
  })
  .catch((error) => console.error(error));
