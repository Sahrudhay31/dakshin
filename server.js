const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`🚀 Website running at: http://localhost:${PORT}`);
    console.log(`Open this link in your browser: http://localhost:${PORT}`);
});