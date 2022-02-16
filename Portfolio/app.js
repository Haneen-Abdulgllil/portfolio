const express = require("express");
const app = express();
app.set('view engine' , 'ejs');
app.set('views','application_views');
app.listen(process.env.PORT || 3000);
app.use('/app_style',express.static('application_views/css'));
app.use('/app_js',express.static('application_views/js'));
app.use(express.static('application_views/assets'));
console.log("server started");
app.get("/",(req , res) =>{
    res.render("index");
});