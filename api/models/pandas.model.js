const sql = require("./db");

const getAll = result => {
  sql.query("SELECT * FROM pandas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(res);
    result(null, res);
  });
};
  
module.exports = getAll;
