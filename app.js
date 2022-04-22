const express = require("express");


const app = express();

app.set("view engine", "pug");

app.use("/static", express.static("public"));

/* ROUTES */

const mainRoutes = require("./routes/index.js");
const projectRoutes = require("./routes/projects.js");

app.use(mainRoutes);
app.use("/projects", projectRoutes);

/* ERROR HANDLERS */

/* 404 error handler */

app.use((req, res, next) => {
    const err = new Error();
    err.message = "Sorry, page not found";
    err.status = 404;
    next(err);
})

/* global error handler */

app.use((err, req, res, next) => {
    if (err.status === 404) {
        console.log(err.message);
        res.render("page-not-found", err);
    } else {
        if (!err.status) {
            err.status = 500;
        } 
        if (!err.message) {
            err.message = "Oops! An error has occured";
        }
        console.log(err.message);
        res.render("error", err)
    }
})



app.listen(3000, () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(`the application is running on localhost:3000 at ${time}`)
});