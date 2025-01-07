const posts = [];

posts.push({
  id: "m2w92r8h13",
  author: "m2w92r8h09",
  image:
    "https://spirit.scene7.com/is/image/Spirit/01642859-a?wid=400&qlt=85,1&resMode=bicub&fmt=jpeg&op_sharpen=1&hei=400",
  text: "here me",
  date: new Date().toISOString(),
});

posts.push({
  id: "m2w92r8h44",
  author: "m2w92r8h10",
  image: "https://i.ytimg.com/vi/9oWEZSL_53U/maxresdefault.jpg",
  text: "dream team",
  date: new Date().toISOString(),
});

localStorage.posts = JSON.stringify(posts);
