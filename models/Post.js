import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    images: [{type: String}],
    category: {type: mongoose.Types.ObjectId, ref: 'Category'}
});

export const Post = models.Post || model('Post', PostSchema)