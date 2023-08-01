const mongoose = require("mongoose")



async function main() {
  await mongoose.connect('mongodb+srv://bishalde:bishalde@projecttreedb.gckjyxg.mongodb.net/?retryWrites=true&w=majority'  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });;
}

main()
.then(() => console.log("Connected to MongoDB PROJECTTREE"))
.catch((err) => console.log(err));