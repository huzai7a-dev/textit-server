import asyncHandler from 'express-async-handler';
import _ from 'underscore';
import bcrypt from 'bcrypt';

import { validateUser } from '../validations/user.js';
import User from '../models/user.js';

const userFields = ['_id', 'firstName', 'lastName', 'email', 'profile', 'isAdmin']

const registerUser = asyncHandler(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    
    let user = await User.find({ email: req.body.email });
    if (user.length > 0) return res.status(400).send('User already exists');
    
    user = await new User(_.pick(req.body,[...userFields,'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
        
    await user.save();
    const token = user.getAuthToken()
    res.status(200).header('x-auth-token', token).send({ ..._.pick(user, userFields),message:'Signup Successfull' });
})

export { registerUser }