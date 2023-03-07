import asyncHandler from 'express-async-handler';

import { validateUser } from '../validations/user.js';
import User from '../models/user.js';

const registerUser = asyncHandler(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    
    let user = await User.find({ email: req.body.email });
    if (user.length > 0) return res.status(400).send('User already exists');

    user = await User.create({ ...req.body });
    const result = await user.save();
    res.status(200).send(result);
})

export {registerUser}