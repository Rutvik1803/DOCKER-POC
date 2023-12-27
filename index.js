const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Rutvik ",
      age: 23,
    },
    {
      id: 2,
      name: "Nishith Upadhyay",
      age: 19,
    },
    {
      id: 3,
      name: "Faisal Shaikh",
      age: 39,
    },
    {
      id: 4,
      name: "Vaibhav",
      age: 49,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server Started on post ${PORT} `);
});
