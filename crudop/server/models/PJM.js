const mongoose=require("mongoose");
const StudentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true},
        htno:{
            type:Number,
            required:true
        }

});
const PJM=mongoose.model("StudData",StudentSchema);
module.exports=PJM;