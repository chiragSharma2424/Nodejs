const express = require('express');
const app = express();

// Global middleware
// app.use((req, res, next) => {
//   console.log("Middleware running for:", req.method, req.url);
//   next(); // next ke bina request aage nahi jaayegi
// });

app.use('/user', (req, res, next) => {
    res.send("hello ji");
    console.log("i am first function");
    next();
}, 
(req, res) => {
    console.log("i am second function");
});

app.listen(3000, () => {
    console.log("Listening on 3000");
});