import User from '../model/userModel.js';
import { compare, generateHash } from '../services/bcryptPassword.js';
import { generateToken } from '../services/generateToken.js';

export const postSignUp = async (req, res) => {
  try {
    const { uName, email, mobile, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: false,
        message: 'User already exists!'
      });

    } else {
      const hashedPassword = await generateHash(password);
      await User({ uName, email, mobile, password: hashedPassword }).save();
      return res.status(200).json({
        status: true, message: 'User Registration successful!'
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    let token = '';
    if (user) {
      if (user.isBlocked) {
        return res.status(400).json({
          message: 'You have been blocked by admin!',
          token: ''
        });
      }

      const passwordMatch = await compare(password, user.password);

      if (passwordMatch) {
        const userId = user._id;
        if (userId) token = await generateToken(userId, 'user');
        if (token) {
          res.cookie('userJWT', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 30 * 24 * 60 * 60 * 1000
          });
          const safedUserData = { _id: user._id, email: user.email, mobile: user.mobile, uName: user.uName, profileImage: user.profileImage }
          return res.status(200).json({
            message:'Logged in successfully!',
            userData: safedUserData,
            token
          });
        }
      } else {
        return res.status(400).json({
          message: 'Invalid email or password!',
          token
        });
      }
    } else {
      return res.status(400).json({
        message: 'Invalid email or password!',
        token
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export const postLogout = (req, res) => {
  try {
    res.cookie('userJWT', '', {
      httpOnly: true,
      expires: new Date(0)
    });
    res.status(200).json({ message: 'User logged out' });
  } catch (error) {
    res.status(400).json(error.message);
  }
}
