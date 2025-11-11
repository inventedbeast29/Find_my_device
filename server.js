const express=require("express")
const Socket=require("socket.io");
const http=require("http");
const geolib=require("geolib");



const app=express();
app.set("view engine","ejs");
const Server=http.createServer(app);



const fence={latitude:28.44654213710573,longitude:77.07210118837843} 
const io = Socket(Server);

app.get("/",(req,res)=>{
    res.render("map")
})


io.on("connection",(socket)=>{
    console.log("Device connected",socket.id);
    socket.on("position",(data)=>{
       const {latitude,longitude}=data;
       const userLocation={latitude,longitude};      
        const inside= geolib.isPointWithinRadius(userLocation, fence, 1000);
       // console.log("isInside",inside);
            // console.log(latitude,longitude); 28.4464711 77.0720595
        io.emit("pos", { latitude, longitude,inside });
    })
})

Server.listen("1111",()=>{
    console.log("server started")
});