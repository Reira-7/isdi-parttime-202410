var posts = [];

posts.push({
  id: "m2w92r8h11",
  author: "2w92r8h09",
  image:
    "https://i.pinimg.com/736x/31/cb/9a/31cb9af0894aeb283341e52b079f2452.jpg",
  text: "Once you’re grown up, you can’t come back.",
  date: new Date().toISOString(),
});

posts.push({
  id: "m2w92r8h12",
  author: "m2w92r8h10",
  image:
    "https://i.pinimg.com/736x/ce/bf/bd/cebfbd82c7c16013f2053b2e7d437a8f.jpg",
  text: "One girl is more use than twenty boys.",
  date: new Date().toISOString(),
});

localStorage.posts = JSON.stringify(posts);
