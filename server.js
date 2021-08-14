require("dotenv").config();
const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.APP_PORT || 3001
db.sync({ alter: true })

app.use("/api/v1/users", require("./routes/user.routes"));
app.listen(PORT, () => {
    console.log(`app start on port:${PORT}`);
})   