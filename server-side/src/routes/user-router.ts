import express, { response } from "express";
import Blogs from "../models/blogs";
import Users from "../models/users"
const router =express.Router();

export default function getRouter(){
    router
        .route('/register')
        .post(async(req, res)=>{
            try{
                let user = new Users(req.body);
                await user.save();
                res.json({
                    message : 'succesful',
                    data : user
                })
            }
            catch(err:any){
                res.json({
                    messgae : "failed",
                    status : "failed " + err.message
                })
            }
        })
    
    router
        .route('/login')
        .post(async(req, res)=>{
            try{
                let user = await Users.find({email : req.body.email, password : req.body.password})
                res.status(200).json({
                    message : 'succesful',
                    status : user
                })
            }
            catch(err:any){
                res.json({
                    messgae : "failed",
                    status : "failed" + err.message
                })
            }
        })


    router
        .route('/user/:username')
        .get(async(req, res) => {
            try{
                let user = await Users.find({username : req.params.username})
                res.status(200).json({
                    message : 'succesful',
                    status : user
                })
            }
            catch(err:any){
                res.json({
                    messgae : "failed",
                    status : "failed" + err.message
                })
            }
        })
        .patch(async(req, res) =>{
            try{
                await Users.findOneAndUpdate({username : req.params.username}, {password : req.body.password})
                res.status(200).json({
                    message : 'succesful'
                })
            }
            catch(err:any){
                res.json({
                    messgae : "failed",
                    status : "failed" + err.message
                })
            }
        })


    // Getting user's blogs by username
    router
        .route('/user/:username/blog')
        .get(async(req, res)=>{
            try{
                // var present_blogs:any = [];
                let user = await Users.findOne({username : req.params.username});
                // console.log(typeof(user?._id));
                const userId = String(user?._id);
                let blogs = await Blogs.find({writer : userId})
                // console.log(blogs);
                res.status(200).json({
                    message : 'succesful',
                    data :blogs
                })
            }
            catch(err:any){
                res.json({
                    messgae : "failed",
                    status : "failed" + err.message
                })
            }
        })


        router
        .route('/user/:username/blog/:bid')
        .get(async(req, res)=>{
            try{
                // var present_blogs:any = [];
                let user = await Users.findOne({username : req.params.username});
                // console.log(typeof(user?._id));
                const userId = String(user?._id);
                let blogs = await Blogs.find({writer : userId, _id : req.params.bid})
                // console.log(blogs);
                res.status(200).json({
                    message : 'succesful',
                    data :blogs
                })
            }
            catch(err:any){
                res.json({
                    messgae : "failed",
                    status : "failed" + err.message
                })
            }
        })

      return router;  
}