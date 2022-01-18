const express = require('express');
const {body} = require('express-validator');
const User = require('../models/user');
const authController = require('../controllers/auth');
const router = express.Router();



const signUpValidator = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject("Email address already exists!");
        }
      });
    })
    .normalizeEmail(),
  body("password").trim().isLength({ min: 6 }),
  body("name").trim().not().isEmpty(),
];

router.post('/signup', signUpValidator ,authController.signUp)

router.post('/login', authController.login)

module.exports = router;