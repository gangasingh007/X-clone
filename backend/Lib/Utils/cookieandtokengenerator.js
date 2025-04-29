import jwt from "jsonwebtoken"

export const generateTokenandCookie = async (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn : "15d"
    });

    res.cookie("jwt", token ,{
        maxage : "15*24*60*60*1000", //15 days,
        httpOnly : true,
        sameSite : "strict",
        secure : process.env.NODE_ENV !== "development",
    });
}