import express from "express";

const app = express();
const post = 4000;

const userProfiles = {
  data: {
    name: "john",
    age: 20,
  },
};

app.get("/profiles", (req, res) => {
  return res.status(200).json({ data: userProfiles });
});

app.listen(post, () => {
  console.log(`Server is running at ${post}`);
});
