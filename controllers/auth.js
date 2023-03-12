import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt';
import _ from 'underscore'
import User from "../models/user.js";


const login = asyncHandler(async(req,res)=> {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('email or password is incorrect');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(404).send('email or password is incorrect');

    const token = user.getAuthToken();


    res.status(200).send({ ..._.pick(user, ['_id', 'firstName,', 'lastName', 'email', 'profile', 'idAdmin']),token });
})

export default login