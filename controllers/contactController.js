import expressAsyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//@desc Get all contacts
//@route GET /api/contacts
//@access public
export const getContacts = expressAsyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contacts
//@access public
export const createContact = expressAsyncHandler(async (req, res) => {
    console.log("This is the data that has been sent with the API: ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    res.status(201).json({ message: "create a contacts" });
});

//@desc Get a contact
//@route PUT /api/contacts/:id
//@access public
export const getContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
export const updateContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `update contacts ${req.params.id}` });
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
export const deleteContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete contacts ${req.params.id}` });
});
