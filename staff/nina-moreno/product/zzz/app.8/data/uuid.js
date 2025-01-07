function uuid() {
  return (Date.now() + Math.random()).toString(36).replace(".", "");
}
