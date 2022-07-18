import express from "express"
import control from "./contactController.js"
import contactQueries from "../../middleware/contactQueries.js"

const contact = express.Router()

contact.get('/', contactQueries, control.get)

contact.get('/:id', control.getOne)

contact.post('/', control.post)

contact.put('/:id', control.update)

contact.delete('/:id', control.delete)

export default contact