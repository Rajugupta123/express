const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const router = require("./UserRoutes")

const app = express();
const hostname = "localhost";
const port = 4000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json())
app.use(router)

// to get connected to the index.html file
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
})

// app.get("/api/v1",(req,res)=>{
//     res.json(
//         {
//             name:"raju kumar gupta",
//             email:"rasu.sh.98@gmail.com",
//             passwword:"hello123",

//         }
//     )
// })

// app.post("/",(req,res)=>{
//     res.send(`<h1>your name is ${req.body.name}</h1> <h2>your email is ${req.body.email}</h2> <h1>your password is ${req.body.password}</h1>`)
    
//     console.log(req.body)

// })

// app.post("/api/v1/register",)

    // res.send(`<h1>your name is ${name}</h1> <h2>your email is ${email}</h2> <h1>your password is ${password}</h1>`)

app.listen(port,()=>{
    console.log(`server is working on ${hostname}:${port}`);
    
})