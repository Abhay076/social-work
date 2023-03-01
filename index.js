const express = require('express');
const app = express();
const port = 8000;
app.listen(port, function(err){
    if (err) {
        console.log(`${err}`)
        return
    }
    console.log(`Server has been Start at ${port}`);
})