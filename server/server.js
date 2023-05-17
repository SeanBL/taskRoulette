const express = require('express');
const app  = express();
const port = 3001;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../task-roulette/build/index.html'));
});

app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});