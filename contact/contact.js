import express from "express"
import { v4 } from 'uuid'

const contact = express.Router()
let msg = {}

contact.get('/', (req, res) => {
    console.log(req.email)
    res.json(req.contacts)
})

contact.get('/:id', (req, res) => {
    res.status(200).json(req.contact)
})

    
contact.post('/', (req, res) => {
    let data = req.body
    data._id = v4()
    console.log(data)
    msg.message = `Added '${data.name}' to Email: '${req.email}' contacts`
    res.status(200).json(msg)
})



contact.patch('/:id', (req, res) => {
    console.log(req.body)
    
    msg.message = `Updated ${req.contact.name} to Email: ${req.email} contact`
    res.status(200).json(msg)
})



contact.delete('/:id', (req, res) => {
    console.log(req.body)
    msg.message = `Deleted ${req.contact.name} in Email: ${req.email} contact`
    res.status(200).json(msg)
})



contact.param('id', (req, res, next) => {
    let data = req.contacts.find(contact => contact.id === +req.params.id)
    
    if (!data) res.status(404).send(`Contact with id ${req.params.id} is not found`)
    
    req.contact = data
    next()
})






export default contact