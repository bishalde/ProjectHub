const express = require("express")
const cors = require('cors')
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5741


app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HOMEPAGE URL
app.get("/", (req, res) => {
    res.status(200).json(
      {
        "message": "Welcome to ProjectTree API's..!"
      }
    );
  });

app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Page Not Found"
    })
})

app.listen(port, () => {
    console.log(`MyBackendAPIS's is listening at http://localhost:${port}`);
  });
  
module.exports = app