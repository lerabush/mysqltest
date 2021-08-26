const Post = require("../models/Post")
exports.getAllPosts = async(req,res,next)=>{
    try{
        const posts = await Post.findAll();
        res.status(200).json({posts})

    }catch(err){
        console.log(err)
        next(err);
    }

};
exports.createNewPost = async(req,res,next)=>{
    try{
        let post = new Post(req.body.title,req.body.body);
        post = await post.save()
        console.log(post)
        res.status(200).json({message:"Post created!"})
    }catch(err){
        console.log(err)
        next(err)
    }

};

exports.getPostById = async(req,res,next)=>{
   try {
       let postId = req.params.id
       let [post,_] = await Post.findById(postId)
       res.status(200).json({post})
   }catch(err){
       console.log(err)
       next(err)
   }
}