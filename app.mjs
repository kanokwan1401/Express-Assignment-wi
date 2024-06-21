import express from "express";

const app = express();
const post = 4000;

app.get("/profiles", (req, res) => {
  return res.json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

app.listen(post, () => {
  console.log(`Server is running at ${post}`);
});
