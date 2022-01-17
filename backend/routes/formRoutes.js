const express = require('express');
const formController = require('../controllers/form');
const router = express.Router();

//GET FORMS
router.get('/posts', formController.getPosts);

//GET FORM
router.get('/post/:formid', formController.getForm);

//ADD FORMS
router.post('/post', formController.addPost);

//UPDATE FORM
router.put('/post/:formid', formController.updateForm);

//DELETE FORM
router.delete('/post/:formid', formController.deleteForm)

module.exports = router;