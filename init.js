const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/boxchat");
}

let allChats = [

  {
    from: "Om",
    to: "Alex",
    message: "Are you coming to college tomorrow?",
    created_at: new Date("2026-08-30T08:00:00"),
  },

  {
    from: "Alex",
    to: "Om",
    message: "Yeah, I'll be there around 10.",
    created_at: new Date("2026-08-30T08:08:00"),
  },

  {
    from: "Om",
    to: "Alex",
    message: "Perfect. See you near the main gate.",
    created_at: new Date("2026-08-30T08:15:00"),
  },

  {
    from: "Arianna",
    to: "Om",
    message: "Did you finish the assignment?",
    created_at: new Date("2026-08-29T17:00:00"),
  },

  {
    from: "Om",
    to: "Arianna",
    message: "Almost. I just have one question left.",
    created_at: new Date("2026-08-29T17:12:00"),
  },

  {
    from: "Arianna",
    to: "Om",
    message: "Send it to me when you're done.",
    created_at: new Date("2026-08-29T17:20:00"),
  },

  {
    from: "Ray",
    to: "Sofia",
    message: "Are we still meeting today?",
    created_at: new Date("2026-08-28T11:00:00"),
  },

  {
    from: "Sofia",
    to: "Ray",
    message: "Yes, same place as yesterday.",
    created_at: new Date("2026-08-28T11:10:00"),
  },

  {
    from: "Andrew",
    to: "Om",
    message: "Did you see the new project?",
    created_at: new Date("2026-08-27T14:00:00"),
  },

  {
    from: "Om",
    to: "Andrew",
    message: "Not yet. I'll check it tonight.",
    created_at: new Date("2026-08-27T14:15:00"),
  },

  {
    from: "Nathan",
    to: "Grace",
    message: "Can you send me the notes?",
    created_at: new Date("2026-08-26T16:00:00"),
  },

  {
    from: "Grace",
    to: "Nathan",
    message: "Sure, I'll send them after class.",
    created_at: new Date("2026-08-26T16:10:00"),
  },

  {
    from: "Om",
    to: "Daniel",
    message: "Are you joining the hackathon?",
    created_at: new Date("2026-08-25T09:00:00"),
  },

  {
    from: "Daniel",
    to: "Om",
    message: "I'm thinking about it.",
    created_at: new Date("2026-08-25T09:20:00"),
  },

  {
    from: "Daniel",
    to: "Om",
    message: "I'll probably join the team.",
    created_at: new Date("2026-08-25T09:30:00"),
  },

  {
    from: "Kasper",
    to: "Maria",
    message: "Did you push the changes?",
    created_at: new Date("2026-08-24T19:00:00"),
  },

  {
    from: "Maria",
    to: "Kasper",
    message: "Yes, check the latest commit.",
    created_at: new Date("2026-08-24T19:15:00"),
  },

  {
    from: "Om",
    to: "Sofia",
    message: "Can you review my code?",
    created_at: new Date("2026-08-23T13:00:00"),
  },

  {
    from: "Sofia",
    to: "Om",
    message: "Sure, send it over.",
    created_at: new Date("2026-08-23T13:10:00"),
  }

];

async function seedDatabase() {

  await Chat.deleteMany({});

  console.log("Old chats deleted");

  await Chat.insertMany(allChats);

  console.log("New chats inserted");

  await mongoose.connection.close();
}

seedDatabase().catch((err) => {
  console.log(err);
});