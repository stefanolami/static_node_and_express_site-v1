const express = require("express");
const {data} = require("./data.json");

const app = express();

app.set("view engine", "pug");

app.use("/static", express.static("public"));

const routes = require("./routes/index.js");

app.use(routes);


app.listen(3000, () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(`the application is running on localhost:3000 at ${time}`)
});