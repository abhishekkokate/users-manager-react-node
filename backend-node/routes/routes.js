const express = require("express");
const router = express.Router();

const userController = require("../controllers/usersController");

router.get("/", (req, res) => {
    console.log("Home API hit");
    return res.json({
        message: "Welcome! Currently only GET /users endpoint is working",
    });
});

router.get("/users", userController.getUsers);

module.exports = router;
