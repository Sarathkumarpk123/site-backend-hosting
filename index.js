const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const port = 3000
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes=require('./routes/authorRoutes')
const authorRoutes=require('./routes/authorRoutes')
app.use(cors())

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
app.use('/auth',authRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB-URL);

 }