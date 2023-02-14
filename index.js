import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log("App is running on port ", port);
  console.log("APP_NAME:", process.env.APP_NAME);
});
