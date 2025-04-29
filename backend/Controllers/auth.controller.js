import { generateTokenandCookie } from "../Lib/Utils/cookieandtokengenerator.js";
import User from "../Models/user.model.js";
import { CreateUser } from "../Types/user.check.js";
import bcrypt from "bcryptjs";

export async function signUp(req, res) {
    const { username, email, password, fullname } = req.body;
    const payload = req.body;
    const parsedPayload = CreateUser.safeParse(payload);

    if (!parsedPayload.success) {
        return res.status(401).json({
            msg: "Please send the right inputs"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(403).json({
            msg: "Invalid email"
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
            fullname,
            email,
        });
        generateTokenandCookie(newUser._id,res);
        res.status(200).json({
            username: newUser.username,
            email: newUser.email,
            fullname: newUser.fullname,
            followers: newUser.followers,
            following: newUser.following,
            Bio: newUser.Bio,
            Link: newUser.Link,
            profileimg: newUser.profileimg,
            coverimg: newUser.coverimg
        });

        console.log(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "There was an error creating the user",
            error: error.message
        });
    }
}
export async function logOut(req,res){
    res.json({
        msg :"hello there "
    })
}
export async function signIn(req,res){
    res.json({
        msg :"hello there "
    })
}
