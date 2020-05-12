const getAllPandas = require("../models/pandas.model");
exports.findAll = (req, res) => {
  getAllPandas((err, data) => {
    if (err) throw err;
    else res.send(data);
  });
};