import express from "express"
import control from "./contactController.js"

const contact = express.Router()

contact.get('/', control.get)

contact.post('/', control.post)

contact.put('/:id', control.update)

contact.delete('/:id', control.delete)

export default contact