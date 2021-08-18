require("dotenv").config();
const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.APP_PORT || 3001

db.sync({ alter: true })

app.use(express.json());

app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});


app.use("/api/v1/auth", require("./routes/user.routes"));
app.use("/api/v1/content", require("./routes/phone.routes"));
app.use("/api/v1/phones", require("./routes/product.routes"))
app.listen(PORT, () => {
    console.log(`app start on port:${PORT}`);
})   