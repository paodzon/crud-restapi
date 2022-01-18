const express = require('express');
const formController = require('../controllers/form');
const router = express.Router();
const isAuth = require('../middleware/auth');

//GET FORMS
router.get('/posts', formController.getPosts);

//GET FORM
router.get('/post/:formid',isAuth, formController.getForm);

//ADD FORMS
router.post('/post',isAuth, formController.addPost);

//UPDATE FORM
router.put('/post/:formid' ,isAuth, formController.updateForm);

//DELETE FORM
router.delete('/post/:formid',isAuth, formController.deleteForm)

module.exports = router;