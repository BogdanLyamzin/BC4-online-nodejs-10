const express = require("express");

const router = express.Router();

const users = [
    {
        _id: "3fsd",
        name: "Alex"
    }
];

router.get("/", async (req, res, next)=> {
    res.json({
        status: "success",
        code: 200,
        data: {
            result: users
        }
    })
})

module.exports = router;