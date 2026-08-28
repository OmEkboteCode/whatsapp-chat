const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}




let allChats = [
  {
    from: "Elon",
    to: "Mark",
    message: "I want to buy your company",
    created_at: new Date(), //UTC
  },
  {
    from: "Jensen",
    to: "Elon",
    message: "We need more GPUs for this project.",
    created_at: new Date(),
  },
  {
    from: "Elon",
    to: "Jensen",
    message: "How many are we talking about?",
    created_at: new Date(),
  },
  {
    from: "Mark",
    to: "Sam",
    message: "The new interface is ready for testing.",
    created_at: new Date(),
  },
  {
    from: "Sam",
    to: "Mark",
    message: "Great, I'll take a look at it today.",
    created_at: new Date(),
  },
  {
    from: "Bill",
    to: "Warren",
    message: "Have you finished reading that book?",
    created_at: new Date(),
  },
  {
    from: "Warren",
    to: "Bill",
    message: "Not yet. I'm still on chapter eight.",
    created_at: new Date(),
  },
  {
    from: "Sundar",
    to: "Satya",
    message: "We should compare our AI infrastructure plans.",
    created_at: new Date(),
  },
  {
    from: "Satya",
    to: "Sundar",
    message: "Absolutely. Let's discuss it tomorrow.",
    created_at: new Date(),
  },
  {
    from: "Jeff",
    to: "Elon",
    message: "Rocket launch is looking interesting this week.",
    created_at: new Date(),
  },
  {
    from: "Elon",
    to: "Jeff",
    message: "The competition keeps things interesting.",
    created_at: new Date(),
  },
  {
    from: "Jensen",
    to: "Mark",
    message: "The new chips are performing really well.",
    created_at: new Date(),
  },
  {
    from: "Mark",
    to: "Jensen",
    message: "I'd like to test them with our latest models.",
    created_at: new Date(),
  },
];



Chat.insertMany(allChats);