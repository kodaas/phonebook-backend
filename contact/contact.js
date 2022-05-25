import express from "express"
import contacts from "./data.js";

const contact = express.Router()


contact.get('/', (_, res) => {
    res.json(contacts)
})


contact.get('/:id', (req, res) => {
    res.json(req.contact)
})

contact.param('id', (req, _, next) => {
    req.contact = contacts.find(contact => contact.id === req.params.id)
    next()
})





export default contact