const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;

const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
