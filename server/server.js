const express = require('express');
const app  = express();
const port = 3001;

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

app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});