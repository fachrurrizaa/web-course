const { Schema, model, models } = require("mongoose");

const PostSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    images: [{type: String}],
});

export const Post = models.Post || model('Post', PostSchema)