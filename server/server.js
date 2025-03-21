require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

const userRoutes = require("./routes/user.routes");
const listingRoutes = require("./routes/listing.routes");
const { connectToDb } = require("./services/db.config");

// middlewares 
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes 
app.use("/user",userRoutes);
app.use("/listings",listingRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}...`);
    connectToDb()
    .then(()=>{console.log("Mongoose is connected...")})
    .catch((err)=>{
        console.log(err);
    })
} );
