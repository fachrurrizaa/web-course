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
        const {title, description, price} = req.body;
        const postDoc = await Post.create({
            title, description, price
        })
        res.json(postDoc)
    }
}
