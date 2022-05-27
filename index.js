import express from "express";
import Contact from "./contact/contact.js";
import fs from 'fs'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getEmail)

app.get('/', (_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, (_, data) => {
        res.write(data);
        res.end();
    })  
})

app.use('/contact', Contact)

function getEmail(req, res, next) {
    if (req.query.email) {
        req.email = req.query.email
        next()
    } else {
        res.status(404).send('Email is Needed')
    }
    
}



app.listen(PORT, () => console.log(`listening on localhost:${PORT}`))