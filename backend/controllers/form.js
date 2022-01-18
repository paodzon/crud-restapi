const Form = require('../models/forms');
const User = require('../models/user');

exports.getPosts = (req, res, next) =>{
    const currentPage = req.query.page || 1;
    const perPage = 10;
    let totalItems;

    Form.find().countDocuments().then(count =>{
        totalItems = count;
        return Form.find().skip((currentPage-1) * perPage).limit(perPage)
    }).then(forms =>{
        res.status(201).json({formItems:forms, totalItems: totalItems, perPage: perPage})
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw error
    })
    
}

exports.addPost = (req,res,next) =>{
    const title = req.body.title;
    const content = req.body.content;

    const form = new Form({
        title: title,
        content: content,
        creator:req.userId
    })

    
    form.save().then(result =>{
        return User.findById(req.userId);
    }).then(user =>{
        creator = user;
        user.posts.push(form);
        return user.save()
    }).then(result=>{
        res.status(201).json({
            message:'SUCCESSFULLY ADDED FORM',
            form:result,
            creator:{_id:creator._id, name: creator.name}
        });
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err
    })
    
}   

exports.getForm = (req,res,next) =>{
    const param = req.params.formid
    Form.findById(param).then(form =>{
        if(!form){
            console.log('NO FORM FOUND')
        }
        res.status(200).json({form});
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err
    })
}

exports.updateForm = (req, res,next) =>{
    const postid = req.params.formid;

    Form.findById(postid).then(form =>{
        if(!form){
            console.log('NO FORM FOUND');
        }

        const title = req.body.title;
        const content = req.body.content;
        form.title = title;
        form.content = content;
        return form.save();
 
    }).then(result =>{
        res.json({message: 'UPDATED FORM', result:result})
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err
    }) 
}

exports.deleteForm = (req, res, next) =>{
    const postid = req.params.formid;

    Form.findById(postid).then((form) =>{
        if(!form){
            console.log('NO FORM FOUND');
        }
        return Form.findByIdAndDelete(postid)
    }).then((result) =>{
        return User.findById(req.userId)
    }).then(user =>{
        user.posts.pull(postid);
        return user.save()
    }).then(result =>{
        res.json({message:'DELETED FORM'})
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err
    })
    
}