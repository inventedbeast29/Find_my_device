const express=require("express")
const Socket=require("socket.io");
const http=require("http");



const app=express();
app.set("view engine","ejs");
const Server=http.createServer(app);


const io = Socket(Server);


app.get("/",(req,res)=>{
    res.render("map")
})

io.on("connection",(socket)=>{
    console.log("Device connected",socket.id);
    socket.on("position",(data)=>{
       const {latitude,longitude}=data;
        io.emit("pos",{latitude,longitude});
    })
})

Server.listen("1111",()=>{
    console.log("server started")
});