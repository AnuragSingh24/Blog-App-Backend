//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,  //konse post par comment kar rhe ho uski id hai
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);  //comment name se export kar diya hai