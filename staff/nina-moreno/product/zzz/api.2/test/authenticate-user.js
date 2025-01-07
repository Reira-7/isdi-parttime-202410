fetch("http://localhost:8080/users/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: '{"username":"peterpan","password":"123123123"}',
})
  .then((res) => {
    const { status } = res;

    if (status === 200)
      return res.json().then((body) => console.log("OK", status, body));

    return res.json().then((body) => console.log("KO", status, body));
  })
  .catch((error) => console.error(error));
