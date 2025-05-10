import { generateTokenandCookie } from "../Lib/Utils/cookieandtokengenerator.js";
import User from "../Models/user.model.js";
import { CreateUser, validateUser } from "../Types/user.check.js";
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

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "There was an error creating the user",
            error: error.message
        });
    }
}

export async function signIn(req, res) {
    try {
        const { username, password } = req.body;
        const payload = req.body;

        const parsedPayload = validateUser.safeParse(payload);

        if (!parsedPayload.success) {
            return res.status(411).json({
                msg: "Please send the right inputs"
            });
        }

        const user = await User.findOne({ username }); 

        if (!user) {
            return res.status(403).json({
                msg: "Invalid username or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if (!isPasswordCorrect) {
            return res.status(403).json({
                msg: "Invalid username or password"
            });
        }

        generateTokenandCookie(user._id, res);

        res.status(200).json({
            username: user.username,
            email: user.email,
            fullname: user.fullname,
            followers: user.followers,
            following: user.following,
            Bio: user.Bio,
            Link: user.Link,
            profileimg: user.profileimg,
            coverimg: user.coverimg
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "There was an error during sign in",
            error: error.message
        });
    }
}

export async function logOut(req, res) {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.status(200).json({
            msg: "Logout was successful",
        });
    } catch (error) {
        console.error("There was an error logging out:", error);
        res.status(500).json({
            msg: "Error in logging out",
            error: error.message,
        });
    }
}

export async function AllUsers(req,res) {
    try {
        const users = await User.find({})
        res.status(200).json({
            users
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg : "Error in getting all the users"
        })
    }
}

