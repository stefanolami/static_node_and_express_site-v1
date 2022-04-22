const express = require("express");
const router = express.Router();
const data = require("../data.json");
const projects = data.projects;

/* Projects Route */

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    const project = projects[id];
    if (project) {
        res.render("project", {project});
    } else {
        /* 404 Handler */
        const err = new Error();
        err.message = "Sorry, page not found";
        err.status = 404;
        next(err);
    }
});

module.exports = router;