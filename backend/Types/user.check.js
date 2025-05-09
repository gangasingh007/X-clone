import zod from "zod";

export const CreateUser = zod.object({
    username : zod.string(),
    password : zod.string(),
    fullname : zod.string(),
    email : zod.string()
})

export const validateUser = zod.object({
    username : zod.string(),
    password : zod.string(),
})