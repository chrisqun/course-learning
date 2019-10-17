const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
let directory = path.join(__dirname, "../public");
let viewPath = path.join(__dirname, "../templates/views");
let patialPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(patialPath)

app.use(express.static(directory));

app.get("",(req, res)=>{
    res.render("index",{
        title:"test",
        name: "CY"
    })
})

app.get("/help",(req, res)=>{
    console.log(req);
    res.send({
        title:"test",
        name: "CY",
        address: req.query.address
    })
})

app.get("/about",(req, res)=>{
    res.render("about",{
        title:"test",
        name: "CY"
    })
})

app.get("/about/*",(req, res)=>{
    res.render("404",{
        errorMsg: "OOps!!"
    })
})

app.get("*",(req, res)=>{
    res.render("404",{
        errorMsg: "Ouch!!"
    })
})


app.listen("3000", ()=>{
    console.log("server is up and running");
})