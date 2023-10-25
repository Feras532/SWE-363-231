class Request {
  constructor(name, email, character, isColored, isSketch, details) {
    this.name = name;
    this.email = email;
    this.character = character;
    this.isColored = isColored;
    this.isSketch = isSketch;
    this.details = details;
  }

  getName() {
    return this.name;
  }

  getCharacter() {
    return this.character;
  }
}
