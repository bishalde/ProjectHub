const express = require("express")
const cors = require('cors')
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5741


app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://bishalde:bishalde@projecttreedb.gckjyxg.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(
    console.log("Connected to MongoDB database")
  )
	.catch((err) => console.log(err))

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
app.post("/", (req, res) => {
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
  
module.exports = app