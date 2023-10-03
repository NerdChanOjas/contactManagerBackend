import expressAsyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//@desc Get all contacts
//@route GET /api/contacts
//@access Private
export const getContacts = expressAsyncHandler(async (req, res) => {
    console.log("getContacts Fired")
    const contacts = await Contact.find({ user_id: req.user.id });
    return res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contacts
//@access Private
export const createContact = expressAsyncHandler(async (req, res) => {
    console.log("This is the data that has been sent with the API: ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are mandatory");
    }

    try {
        console.log("Fired the create contact")
        const contact = await Contact.create({
            name,
            email,
            phone,
            user_id: req.user.id,
        });
        res.status(201).json(contact);
    } catch (err) {
        console.log(err);
    }
});

//@desc Get a contact
//@route PUT /api/contacts/:id
//@access Private
export const getContact = expressAsyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact){
            res.status(404);
            throw new Error("Contact not found");
        }
        res.status(200).json(contact);
    } catch (error) {
        console.error(error)
    }
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Private
export const updateContact = expressAsyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact){
            res.status(404);
            throw new Error("Contact not found");
        }

        if (contact.user_id.toString() !== req.user.id) {
            res.status(403);
            throw new Error("User doesn't have the permission to update the contact")
        }

        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedContact);
    } catch (err) {
        console.error(err)
    }
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Private
export const deleteContact = expressAsyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact){
            res.status(404);
            throw new Error("Contact not found");
        }

        if (contact.user_id.toString() !== req.user.id) {
            res.status(403);
            throw new Error("User doesn't have the permission to Delete the contact")
        }

        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).json(contact);
    } catch (err) {
        console.log(err)
    }
});
