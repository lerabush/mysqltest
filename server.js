const express = require('express')
const app = express()
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()

app.use("/posts",require("./routes/postRoutes"))

app.use((err,req,res,next)=>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message:"Something went wrong"
    });
});

app.listen(process.env.PORT,()=>
    console.log(`Server is running on port 8800`)
)