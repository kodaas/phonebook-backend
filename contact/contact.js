import express from "express"
import contacts from "./data.js";

const contact = express.Router()

contact.get('/', (req, res) => {
    console.log(req.email)
    res.json(contacts)
})

contact.post('/', (req, res) => {
    let data = req.body
    data.id = Math.random()
    console.log(data)
    res.status(200).send('ok')
})

contact.get('/:id', (req, res) => {
    console.log()
    res.json(req.contact)
})

contact.param('id', (req, _, next) => {
    req.contact = contacts.find(contact => contact.id === +req.params.id)
    next()
})






export default contact