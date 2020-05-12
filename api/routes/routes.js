const getDoggos = app => {
    const doggos = require("../controllers/doggos.controller");
    app.get("/animals/doggos", doggos.findAll);
};

const getPandas = app => {
    const pandas = require("../controllers/pandas.controller");
    app.get("/animals/pandas", pandas.findAll);
};

module.exports.doggos = getDoggos;
module.exports.pandas = getPandas;