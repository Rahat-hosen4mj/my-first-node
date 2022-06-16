const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("fuck node js");
});

const users = [
  { id: 1, name: "rahat", email: "rahat@gmail.com", phone: "01790418248" },
  { id: 2, name: "ahat", email: "rahat@gmail.com", phone: "01790418248" },
  { id: 3, name: "fahat", email: "rahat@gmail.com", phone: "01790418248" },
  { id: 4, name: "reyad", email: "rahat@gmail.com", phone: "01790418248" },
  { id: 5, name: "nahid", email: "rahat@gmail.com", phone: "01790418248" },
  { id: 6, name: "asid", email: "rahat@gmail.com", phone: "01790418248" },
  { id: 7, name: "saif", email: "rahat@gmail.com", phone: "01790418248" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search))
      res.send(matched)
    
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  const id = users.length + 1;
  users.push(user);

  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
