import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//@desc Resgister a user
//@route POST /api/users/register
//@access public
export const registerUser = expressAsyncHandler(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if ( !username || !email || !password ){
            res.status(400);
            throw new Error("All fields are mandatory!")
        }

        const userAvailable = await User.findOne({email});
        if (userAvailable) {
            res.status(400);
            throw new Error("Already exists!")
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password: ", hashedPassword);
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        console.log(`User created successfully ${user}`)
        if (user) {
            res.status(201).json({
                _id: user.id,
                email: user.email
            })
        } else {
            res.status(400);
            throw new Error("User data is not valid")
        }

        // res.json({message: "Register the user"})
    } catch (err) {
        console.log(err);
    }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
export const loginUser = expressAsyncHandler(async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password){
            res.status(400);
            throw new Error("All fields required");
        }

        const user = await User.findOne({email});
        //compare password

        if (user && (await bcrypt.compare(password, user.password))){
            const accessToken = jwt.sign({
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            }, process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '30m'}
            );
            res.status(200).json({accessToken});
        } else {
            res.status(401);
            throw new Error("Email or password not valid")
        };

    } catch (err) {
        console.log(err);
    }
});

//@desc get current user
//@route GET /api/users/current
//@access private
export const currentUser = expressAsyncHandler(async (req, res) => {
    res.json(req.user)
});



