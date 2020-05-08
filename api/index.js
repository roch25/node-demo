const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({message: "henlos :D"});
});

require("./routes/routes")(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000 --- http://localhost:3000/");
});
