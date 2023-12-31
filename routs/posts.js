const express = require('express');
const Posts = require('../model/posts');
// const posts = require('../model/posts');

const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post save successfully"
        });

    });

});


//get post

router.get('/posts',(req,res)=>{
    Posts.find().exec((err,Posts)=>{
        if(err){
            return res.status(400).json({
                error:err

            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Posts

        });

    });
});
//Update post

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated successfully"

            });

        }
    )

});


//delete post

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndDelete(req.params.id).exec((err,deletedPost)=>{

        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.json({
            success:"Deletion success",deletedPost
        });
        

    });

});

module.exports = router;