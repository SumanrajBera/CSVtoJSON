require('dotenv').config()
const express = require('express');
const axios = require("axios")
const { logger } = require('./middleware/logger');
const { csvtojson } = require('./helper/csvtojson');
const { dataFormat } = require('./helper/dataFormat');
const { insertUsers } = require('./helper/mysqlInsert');
const distribution = require('./helper/mysqlDistribution');
const app = express()

// Configuring port
const port = process.env.PORT || 8080;

// Middleware for logging
app.use(logger)

// Routes

// Route for root directory does nothing
app.get("/",(req,res)=>{
    res.status(200).send("Root directory working")
})

app.get("/upload", async(req,res,next)=>{
    try{
        const url = process.env.FILEPATH;
        const response = await axios.get(url)
        let result = csvtojson(response.data);

        let data =  dataFormat(result)

        await insertUsers(data);

        res.json({ message: "Data inserted successfully", count: data.length });
    }catch(err){
        next(err)
    }
})

app.get("/user-distribution", async (req, res, next) => {
  try {
    const result = await distribution();
    res.status(200).json({ distribution: result });
  } catch (err) {
    next(err);
  }
});

// Middleware for Handling Error
app.use((err,req,res,next)=>{
    const code = err.status || 500;
    const msg = err.message || "Internal Server Error";
    res.status(code).json({message: msg})
})

app.listen(port,()=>{
    console.log("App is listening on port:",port)
})