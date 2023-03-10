const express = require("express");
const app = express();
const port = 8000;

const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
app.use(expressLayouts);
app.use(express.static("./assets"));
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//use express router
app.use("/", require("./routes"));

//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`${err}`);
    return;
  }
  console.log(`Server has been Start at ${port}`);
});
