const express = require("express")
const cors = require('cors')
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 3000

const login = require("./Routes/login")
const signup = require("./Routes/signup")
require("./db/connection")

app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.post("/login", login);


app.post("/signup", signup);

app.listen(PORT, () => {
  console.log(`ProjectTree-BACKEND is running on port ${PORT}`);
});
