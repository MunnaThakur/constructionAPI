const express = require("express");
const mongoose = require("mongoose");
const buldingRouter = require("./routes/buldingRoutes.js");
// const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 7000;


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.use("/ideal/details", buldingRouter);

const mongoDbURI = "mongodb+srv://munna:Thakur@housingapi.9jmbm.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDbURI)
.then(()=>{
    app.listen(PORT, ()=>{console.log(`server is listnig on port http://localhost:${PORT}`);});
}).catch((error)=>{
    console.log(`${error} did not connect`);
});

