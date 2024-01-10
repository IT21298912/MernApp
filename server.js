const express = require("express");
const mongoose = require("mongoose")
const bodPaser = require('body-parser');
const cors = require('cors');

const app = express();
//import routes
const postRoutes = require("./routs/posts")

//app midddleware
app.use(bodPaser.json());
app.use(cors);
//rout middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://nisaltharindu3:Fti0DvsYOiMgg0ut@mernprac.5nvckiy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('Db Connected');
})
.catch((err)=>console.log('db con error',err))

app.listen(PORT,()=>{
    console.log(`app is runing on ${PORT}`);
});