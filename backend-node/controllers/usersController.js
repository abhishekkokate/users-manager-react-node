const db = require("../config/db");

const getUsers = async (req, res) => {
    try {
        console.log("Getting users");
        const queryFind = "SELECT * FROM users";

        const users = await db.query(queryFind);

        return res.json({
            users: users,
            total: users.length,
            skip: 0, // kept in case we need pagination later
            limit: users.length, // kept in case we need pagination later
        });
    } catch (err) {
        console.error("Error while fetching users: ", err);
        return res.status(500).json({
            message: "Unexpected error while fetching users!",
        });
    }
};

module.exports = {
    getUsers,
};
