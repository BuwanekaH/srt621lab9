const port = 3000,
express = require("express"), 
app =express(),
hc = require("./controllers/header");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
express.urlencoded({
    extended: false
})
);
app.get('/home', (req,res)=>{
    res.render('home')
});
app.get("/images/:image", hc.reswithimg);

app.listen(port, ()=>{
    console.log(` http://localhost:${port}`);
});