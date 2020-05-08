module.exports = app => {
    const doggos = require("../controllers/controller");
    app.get("/doggos", doggos.findAll);
};
