require("dotenv").config();
const express = require('express');
const path = require("path");
const allRouter = require("./controllers");
const app  = express();
const port = process.env.port || 3001;

const database = require('./config/connection');


// Cross domain. Anyone can connect to me
// const cors = require("cors");
// app.use(cors());

app.get("/api/users", (req,res)=>{
    res.json({users:[
        {username: "Sean"},
        {username: "Jessica"},
        {username: "Abby"}
    ]})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../task-roulette/build/index.html'));
});

app.use(express.static(path.resolve(__dirname, "..", "task_roulette")))
app.use(allRouter);

database.sync().then( () => {
    app.listen(port, () => {
        console.log(`API server running on http://localhost:${port}`);
    });
});