const express = require("express")
const cors = require('cors')
const serverless= require('serverless-http')
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5741


app.use(cors()) 
app.use(express.json());



const login = require("./routes/login")
const signup = require("./routes/signup")

//HOMEPAGE URL
app.get("/", (req, res) => {
    res.status(200).json(
      {
        "message": "Welcome to ProjectTree API's..!"
      }
    );
});



app.post("/login", login)
app.post("/signup", signup)



app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Page Not Found"
    })
})

app.listen(port, () => {
    console.log(`MyBackendAPIS's is listening at http://localhost:${port}`);
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`Error : ${err}`);
  })
  const db= require('./db/conn')



module.exports.handler = serverless(app);