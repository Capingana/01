const express=require("express");
const app=express();
const routerIndex=require("./src/routers/router");


// =================================================
app.use(express.static("src"));
app.set("view engine","ejs");
app.use("/",routerIndex);
// =================================================

app.listen(3000,()=>{console.log(`Servidor rodando sem problema`)});
