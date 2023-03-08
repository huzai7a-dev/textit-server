import Joi from "joi";

const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(8).required(),
})

const validateAuth = (user) => {
    return authSchema.validate(user);
}

export {validateAuth}