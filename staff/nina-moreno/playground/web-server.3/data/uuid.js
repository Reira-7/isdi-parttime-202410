const uuid = () => (Date.now() + Math.random()).toString(36).replace(".", "");

module.exports = uuid;
