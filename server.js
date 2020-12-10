const express = require("express");
const app = express();
const db = require("./models");
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
// MIDDLEWARE
// HANDLE POST BODY
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// CONFIGURE EXPRESS HADNLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// VIEW ROUTES
app.get("/", (req, res)=>{
    res.render("index");
})

// API routes
app.get("/api/config", (req, res)=> {
    res.json({
        success: true,
    });
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    }); 
})
