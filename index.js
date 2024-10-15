const express = require("express");
const {users} = require( "./data/users.json");
const {books} = require( "./data/books.json");

const app = express();
const port = 8081;
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "server is up & running"
    })
})

app.get("/users",(req,res)=>{
    res.status(200).json({
        success: true,
        data: users
    })
})

app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((each)=> each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "user not found"
        })
    }
    return res.status(404).json({
        success: true,
        data: user 
    })
})



app.post("/users")
app.all("*",(req,res)=>{
    res.status(500).json({
        message: "this route does not exist"
    })
})

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})