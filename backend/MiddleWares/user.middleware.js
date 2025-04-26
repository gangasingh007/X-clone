import User from "../Models/user.model.js";

export const userMiddleWare = async (req, res, next) => {
    try {
        const { username, email } = req.body;

        const userExists = await User.findOne({ 
            $or: [{ username }, { email }]
        });

        if (userExists) {
            if (userExists.username === username) {
                return res.status(403).json({ msg: "The Username is already taken" });
            }
            if (userExists.email === email) {
                return res.status(403).json({ msg: "The Email is already taken" });
            }
        }

        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Something went wrong in user check", error: error.message });
    }
}
