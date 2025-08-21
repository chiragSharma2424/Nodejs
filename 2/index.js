const express = require('express');
const app = express();
app.use(express.json());

const BookStore = [
    {id: 1, fName: "harry potter", author: "david"},
    {id: 2, fName: "chirag", author: "mahadev"},
    {id: 3, fName: "DSA", author: "c++"},
    {id: 4, fName: "durgesh", author: "santosh kurre"}
];

app.get('/book', (req, res) => {
    res.send(BookStore);
});

app.get('/book/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = BookStore.find(info=> info.id === id);
    res.send(book);
});

app.post('/book', (req, res) => {
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data saved successfully")
});

app.patch('/book', (req, res) => {
    console.log(req.body);
    res.send("patch");
})

app.listen(3000, () => {
    console.log("server started on 3000");
})