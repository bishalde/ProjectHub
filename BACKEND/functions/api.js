const express = require("express")
const serverless = require("serverless-http")


const app = express()
const router = express.Router()




const cors = require('cors')
require("dotenv").config()

const port = process.env.PORT || 5741


router.use(cors()) 
router.use(express.json());



const login = require("../routes/login")
const signup = require("../routes/signup")

//HOMEPAGE URL
router.get("/", (req, res) => {
    res.status(200).json(
      {
        "message": "Welcome to ProjectTree API's..!"
      }
    );
});



app.post("/login", login)
app.post("/signup", signup)



// app.get('*', (req, res) => {
//     res.status(404).json({
//         "error": "Page Not Found"
//     })
// })

app.listen(port, () => {
    console.log(`MyBackendAPIS's is listening at http://localhost:${port}`);
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`Error : ${err}`); 
  })
  
  const db= require('../db/conn')


app.use(`/.netlify/functions/api`, router);
module.exports.handler = serverless(app);