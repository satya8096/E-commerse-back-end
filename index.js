const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
app.use(express.urlencoded({ extended: true }));
const bcrypt = require("bcryptjs");
const UserRouteAPI = require("./Routes/UsersAPIRoute");
const LoginModel = require("./Models/UserModel");
const ProductModelApI = require('./Routes/ProductRoute');
require("./DB");
app.use(cors())

// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PATCH,DELETE');
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next()

// })
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await LoginModel.findOne({ email });
  if (!user) return res.send({ result: "No data found" });
  const isTrue = await bcrypt.compare(password, user.password);
  if (isTrue) {
    res.send({
      result: "success",
    });
  }
  else{
    res.send({
      result:"Failed"
    })
  }
});

app.use("/", ProductModelApI);
app.use("/", UserRouteAPI);



app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log("server running at " + process.env.PORT || 4000);
  } else {
    console.log(err.message);
  }
});
