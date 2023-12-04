const customEmitter = require("./customEmitter");
const { random } = require("lodash");

let userID = 1;

customEmitter.on("userLoggedIn", (userID, timestamp) => {
  console.log(`${timestamp}: USER_${userID} logged in`);
});

customEmitter.on("userLoggedOut", (userID, timestamp) => {
  console.log(`${timestamp}: USER_${userID} logged out`);
});

setInterval(() => {
  const timestamp = new Date().toISOString();
  customEmitter.emit("userLoggedIn", userID, timestamp);

  setTimeout(() => {
    const timestamp = new Date().toISOString();
    customEmitter.emit("userLoggedOut", userID, timestamp);
    userID++;
  }, random(100, 2000));
}, 3000);
