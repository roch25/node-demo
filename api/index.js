const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("henlos :D");
});

app.get("/animals", (req, res) => {
    res.send(":3");
});

const animals = require("./routes/routes");
animals.doggos(app);
animals.pandas(app);

app.listen(3001, () => {
    console.log("Server is running on port 3001 --- http://localhost:3001/");
});
