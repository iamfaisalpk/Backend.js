const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./User');

const register = async (req,res)=>{
    const {name , email, password} = req.body;

    if (!name || !email || !password)
        return res.status(400).json({message: 'All fields are required'})

    try {
        const userExists = await User.findOne({email});
        if (userExists) return res.status(409).json({message: 'User already exists'})

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new User({name, email, password : hashPassword})
        await newUser.save();

        res.status(201).json({message: 'User register succefully'});
    } catch (error){
        res.status(500).json({message: 'Server error', error})
    }
};

const login = async (req,res)=>{
    const {email, password} = req.body;

    if (!email || !password)
        return res.status(404).json({message: "All fields are required"})

    try {
        const user = await User.findOne({email})
        if (!user) return res.status(404).json({message : 'User not found'})

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({message: 'invalid credential'})

            const token = jwt.sign(
                {id: user._id, email: user.email},
                process.env.JWT_SECRET,
                {expiresIn: '13m'}
            );
        
            res.json({
                message: 'Login succesful',
                token,
                user: {id: user._id, email:user.email, name:user.name}
            });
    } catch (error){
        res.status(500).json({message: "Server error", error})
    }
};

module.exports = {register,login};