"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const router =express.Router();
// export default function getRouter(){
//     router
//         .route('/register')
//         .post(async(req, res)=>{
//             console.log(req.body.email, req.body.password);
//             try{
//                 let use = new user(req.body);
//                 await use.save();
//                 res.json({
//                     message : 'created',
//                     status : "USer Created Succesfully",
//                     data : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed " + err.message
//                 })
//             }
//         })
//     router
//         .route('/login')
//         .post(async(req, res)=>{
//             try{
//                 let use = await user.find({email : req.body.email, password : req.body.password})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/questions')
//         .get(async(req, res)=>{
//             try{
//                 let use = await posts.find().limit(10)
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//         .post(async(req, res)=>{
//             try{
//                 let post = new posts(req.body);
//                 await post.save()
//                 res.status(201).json({
//                     message : 'created',
//                     status : "post created Succesfully",
//                     post
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/questions/:text')
//         .get(async(req, res)=>{
//             try{
//                 let regex = new RegExp(req.params.text, 'i');
//                 let use = await posts.find({question : regex}).limit(10)
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//         router
//         .route('/present/:id')
//         .get(async(req, res)=>{
//             try{
//                 let use = await posts.findById(req.params.id)
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/tag/:tag')
//         .get(async(req, res)=>{
//             try{
//                 console.log(req.params.tag)
//                 let use = await posts.find({tag: req.params.tag})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/search/:text')
//         .get(async(req, res)=>{
//             try{
//                 let regex = new RegExp(req.params.text, 'i');
//                 let use1 = await posts.find({ $and : [{ $or : [{question : regex}, {tag : regex}]}]})
//                 let use2 = await answer.find({answer : regex});
//                 res.status(200).json({
//                     message : 'succesful',
//                     questions : use1,
//                     answers : use2
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/id/:id')
//         .get(async(req, res)=>{
//             try{
//                 let use = await posts.findById(req.params.id)
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : use
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//         router
//         .route('/answers/:qid')
//         .post(async(req, res)=>{
//             try{
//                 let answ = new answer(req.body);
//                 let data = await answ.save();
//                 await posts.findByIdAndUpdate(req.params.qid, {answers : data._id})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : "Added Succesful",
//                     data : data,
//                     question_id : [req.params.qid, data._id]
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//         .get(async(req, res)=>{
//             try{
//                 let answers = await answer.find({questionId : req.params.qid});
//                 let question = await posts.findById(req.params.qid);
//                 res.json({
//                     question,
//                     answers
//                 })  
//             }
//             catch(err){
//                 res.json({
//                     message : 'failed',
//                 })
//             }
//         })
//     router
//         .route('/upquestion/:id')
//         .get(async(req, res)=>{
//             try{
//                 let post = await posts.findByIdAndUpdate(req.params.id, {$inc : {vote: 1}})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : post
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/downquestion/:id')
//         .get(async(req, res)=>{
//             try{
//                 let post = await posts.findByIdAndUpdate(req.params.id, {$inc : {vote: -1}})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : post
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/upanswer/:id')
//         .get(async(req, res)=>{
//             try{
//                 let post = await answer.findByIdAndUpdate(req.params.id, {$inc : {vote: 1}})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : post
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//     router
//         .route('/downanswer/:id')
//         .get(async(req, res)=>{
//             try{
//                 let post = await answer.findByIdAndUpdate(req.params.id, {$inc : {vote: -1}})
//                 res.status(200).json({
//                     message : 'succesful',
//                     status : post
//                 })
//             }
//             catch(err:any){
//                 res.json({
//                     messgae : "failed",
//                     status : "failed" + err.message
//                 })
//             }
//         })
//       return router;  
// }
