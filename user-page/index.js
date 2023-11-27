const express = require("express");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const prisma = new PrismaClient();

app.use(cors());

//change input to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const salt = 10;

// ROOT PAGE
app.get("/", (req, res, next) => {
  return res.json({ message: "Hello World" });
}); // END OF ROOT PAGE

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await prisma.users.findUnique({
    where: { email },
  });

  if (userExist) {
    return res.status(404).json({ message: "User already exist" });
  }

  const user = await prisma.users.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, salt),
    },
  });
  delete user.password;
  res.json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  delete user.password;
  res.json(user);
});

app.listen(3000, () => console.log("http://localhost:3000"));
