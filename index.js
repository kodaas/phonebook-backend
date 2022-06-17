import express from "express";
import Contact from "./contact/contact.js";
import contacts from "./contact/data.js";
import fs from 'fs'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getEmail)
app.use(getContacts)

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

function getContacts(req, res, next) {
    let data = contacts[`${req.email}`]

    if (!data) res.status(404).send("Invalid Email")

    req.contacts = data;
    next()
}



app.listen(PORT, () => console.log(`listening on localhost:${PORT}`))