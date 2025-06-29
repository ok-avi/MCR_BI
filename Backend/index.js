const dbInitialization  = require("./db/db.connect.js")
const Job = require("./models/Jobs.model.js")
const app = require("./app.js")


dbInitialization()

app.listen(3000,()=>console.log(`Server running at port ${3000}`))