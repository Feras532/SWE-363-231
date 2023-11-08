const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const predefinedAnswers = {
  "How do I improve my skills?":
    "Practice makes perfect! Try playing different champions to widen your skill set.",
  "What is the current meta?":
    "As an AI, I don't have real-time data. Check the latest patch notes and community discussions for the current meta.",
  "Tell me a League of Legends joke":
    "Why do Yordles make bad secret agents? Because they always Teemo up.",
  "What is the best champion?":
    "There is no 'best' champion as it depends on your play style, the team composition, and the current meta.",
  "How can I report a player?":
    "You can report a player after a match ends in the post-game lobby. Click on the exclamation mark next to their summoner name to file a report.",
};

const promptUser = () => {
  rl.question("Summoner, ask your question: ", (input) => {
    if (input === "exit" || input === "quit") {
      rl.close();
    } else {
      const response =
        predefinedAnswers[input] ||
        "I'm sorry, Summoner, I don't have the answer to that.";
      console.log(response);
      promptUser();
    }
  });
};

promptUser();

rl.on("close", () => {
  console.log("May the fields of justice be ever in your favor, Summoner!");
  process.exit(0);
});
