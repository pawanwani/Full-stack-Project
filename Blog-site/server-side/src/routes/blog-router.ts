import express, { response } from "express";
import Blogs from "../models/blogs";
import Users from "../models/users";

const router =express.Router();

export default function getRouter(){
    router
        .route('/blogs')
        .post(async(req, res) => {
            try{
                let blog = new Blogs(req.body);
                blog.save();
                res.json({
                    message : 'succsful',
                    data : blog 
                })
            }
            catch(err){
                res.json({
                    message : 'failed',
                    err
                })
            }
        })
        .get(async(req, res) => {
            try{
                let blogs = await Blogs.find();
                res.json({
                    message : 'succsful',
                    data : blogs
                })
            }
            catch(err){
                res.json({
                    message : 'failed',
                    err
                })
            }
        })


    router
        .route('/blogs/:id')
        .get(async(req, res) => {
            try{
                let blog = await Blogs.findById(req.params.id)
                res.json({
                    message : 'succsful',
                    data : blog
                })
            }
            catch(err){
                res.json({
                    message : 'failed',
                    err
                })
            }
        })
        .delete(async(req, res) => {
            try{
                let blog = await Blogs.findOneAndDelete({title : req.params.name});
                res.json({
                    message : 'succsful',
                    data : blog
                })
            }
            catch(err){
                res.json({
                    message : 'failed',
                    err
                })
            }
        })
        .patch(async(req, res)=>{
            try{
                // let bloger = new Blogs(req.body);
                let blog = await Blogs.findOneAndUpdate({title : req.params.name}, {subtitle : req.body.subtitle, body : req.body.body})
                res.json({
                    message : 'succsful',
                    data : blog
                })
            }
            catch(err){
                res.json({
                    message : 'failed',
                    err
                })
            }
        })


        router
        .route('/blogs/:name/user')
        .get(async(req, res) => {
            try{
                let blog = await Blogs.findOne({title : req.params.name});
                let writer = blog?.writer;
                console.log(writer);
                console.log(typeof(writer));
                let user = await Users.find({_id : writer})
                res.json({
                    message : 'succsful',
                    data : user
                })
            }
            catch(err){
                res.json({
                    message : 'failed',
                    err
                })
            }
        })

    
      return router;  
}


