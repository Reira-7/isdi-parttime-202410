fetch("http://localhost:8080/posts/m4mzcbwdaw", {
  method: "DELETE",
  headers: { Authorization: "Basic m2w92r8h09" },
})
  .then((res) => {
    const { status } = res;

    if (status === 204) {
      console.log("OK", status);

      return;
    }

    return res.json().then((body) => console.log("KO", status, body));
  })
  .catch((error) => console.error(error));
