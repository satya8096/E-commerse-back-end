const mongoose = require("mongoose");
 
mongoose
  .connect(process.env.DB_CONN_STR)
  .then(() => {
    console.log("DB connection Successfull !");
  })
  .catch((err) => {
    console.log(err.message);
  });