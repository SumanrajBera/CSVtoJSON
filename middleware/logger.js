require("dotenv").config()

// For Printing the Log Details while development
module.exports.logger = (req,res,next) => {
    const date = new Date()
    console.log("Method:",req.method)
    console.log("URL: http://localhost:"+process.env.PORT+req.originalUrl)
    console.log("Date:",date.toLocaleDateString(),"Time:",date.toLocaleTimeString())
    next()
}
