const getAllDoggos = require("../models/model");
exports.findAll = (req, res) => {
  getAllDoggos((err, data) => {
    if (err) throw err;
    else res.send(data);
  });
};