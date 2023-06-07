require("dotenv").config();
const express = require('express');
const path = require("path");
const allRouter = require("./controllers");
const app  = express();
const port = process.env.port || 3001;
const UserController = require("./controllers/api/user");

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
app.get('/users', UserController.getAllUsers);

app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});
