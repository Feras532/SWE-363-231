const EventEmitter = require("events");

class CustomEmitter extends EventEmitter {}

module.exports = new CustomEmitter();
