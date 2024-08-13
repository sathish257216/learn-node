const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/api/users"));

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

app.get("/hello", (req, res) => {
    res.write("Welcome to Node.js");
    res.end();    
});