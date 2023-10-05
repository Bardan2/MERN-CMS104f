const app = require("express")();
const { connectDatabase } = require("./database/database");

connectDatabase();

// GET API -->
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
  });
});

app.listen(2000, () => {
  console.log("Node.js has started at port 2000");
});
