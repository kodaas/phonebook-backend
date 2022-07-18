import contactModel from "./contactModel.js";
import asyncWrapper from "../../middleware/asyncwrapper.js";
import { createCustomErr } from "../../middleware/error.js"


export default {
    get: asyncWrapper(async (req, res) => {
        let { sort } = req.query;

        let result = contactModel.find(req.queryObject);

         // Sort
        if (sort) {
        	let sortList = sort.split(",").join(" ")
        	result = result.sort(sortList)
        }else {
        	result = result.sort("name")
        }

        result = result.select("name email phone")
        
        const contact = await result
        return res.status(200).json({ message: "Success", data: contact})
    }),

    getOne: asyncWrapper(async (req, res, next) => {
        let { id: contactId } = req.params

        const contact = await contactModel.findById(contactId);

        if (!contact) return next(createCustomErr("Contact not Found", 404))
        
        return res.status(200).json({ message: "Success", data: contact})
    }),
    
    post: asyncWrapper(async (req, res, next) => {
        let reqBody = req.body;
        let user = req.user
        let contact = await contactModel.findOne({phone: reqBody.phone})

        if (!contact) contact = await contactModel.create(reqBody)

        
        user.contacts.push(contact.id)
        // userControl.update(user)
        
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