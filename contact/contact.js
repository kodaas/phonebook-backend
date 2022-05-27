import express from "express"
import contacts from "./data.js";

const contact = express.Router()
let msg = {}

contact.get('/', (req, res) => {
    console.log(req.email)
    res.json(contacts)
})

contact.get('/:id', (req, res) => {
    res.json(req.contact)
})

    
contact.post('/', (req, res) => {
    let data = req.body
    data.id = Math.random()
    console.log(data)
    msg.message = `Added '${data.name}' to Email: '${req.email}' contacts`
    res.status(200).json(msg)
})



contact.put('/:id', (req, res) => {
    console.log(req.body)
    msg.message = `Updated ${req.contact.name} to Email: ${req.email} contact`
    res.status(200).json(msg)
})



contact.delete('/:id', (req, res) => {
    console.log(req.body)
    msg.message = `Deleted ${req.contact.name} in Email: ${req.email} contact`
    res.status(200).json(msg)
})



contact.param('id', (req, _, next) => {
    req.contact = contacts.find(contact => contact.id === +req.params.id)
    next()
})






export default contact