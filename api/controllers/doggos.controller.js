const getAllDoggos = require("../models/doggos.model");
exports.findAll = (req, res) => {
  getAllDoggos((err, data) => {
    if (err) throw err;
    else res.send(data);
  });
};