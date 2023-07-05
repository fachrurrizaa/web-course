import mongooseConnect from "../../../lib/mongoose";
import { Post } from "../../../models/Post";

export default async function post(req, res) {
    const {method} = req;
    await mongooseConnect();
    
    if (method === 'GET'){
        if (req.query?.id){
            res.json(await Post.findOne({_id:req.query.id}))
        }else {
            res.json(await Post.find());
        }
    }

    if (method === 'POST'){
        const {title, description, price, images} = req.body;
        const postDoc = await Post.create({
            title, description, price, images
        })
        res.json(postDoc)
    }
    
    if (method === 'PUT'){
        const {title, description, price, images, _id} = req.body;
        await Post.updateOne({_id}, {title, description, price, images})
        res.json(true)
    }

    if (method === "DELETE"){
        if (req.query?.id) {
            await Post.deleteOne({_id:req.query?.id})
            res.json(true)
        }
    }
}
