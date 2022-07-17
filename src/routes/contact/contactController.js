import contactModel from "../../model/contactModel.js";
import asyncWrapper from "../../helpers/asyncwrapper.js";
import { createCustomErr } from "../../helpers/error.js"


export default {
    get: asyncWrapper(async (_,res) => {
        const contact = await contactModel.find();
        return res.status(200).json({ message: "Success", data: contact})
    }),
    
    post: asyncWrapper(async (req, res, next) => {
        let reqBody = req.body;
        const contact = await contactModel.create(reqBody)
        contact.save()
        res.status(200).json({ message: "Contact Created", data: contact })
    }),
    
    update: asyncWrapper(async (req, res, next) => {
        let contactId = req.params.id
        let reqBody = req.body;
        
        let contact = await contactModel.findOneAndUpdate({ _id: contactId }, reqBody, {
        	new: true,
        	runValidators: true
        })

        if (!contact) return next(createCustomErr("Contact not Found", 404))
        
        return res.status(200).json({ message: "Contact Updated", data: contact})
    }),
    
    delete: asyncWrapper(async (req, res, next) => {
	    let { id: contactId } = req.params
	    
	    let contact = await contactModel.findById(contactId)
       
       if (!contact) return next(createCustomErr("Contact not Found", 404));
       
       let name = contact.name

        console.log(`${name} Deleted`)
        contact.delete()
        res.status(200).json({ message: `${name} Deleted` })
    })
    
}