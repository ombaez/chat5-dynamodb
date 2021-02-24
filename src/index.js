const app = require("./app");
const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.status(404);
  res.send({ error: "not Found - error 404" });
});

app.listen(PORT, () => console.log("Listening on port " + PORT));
