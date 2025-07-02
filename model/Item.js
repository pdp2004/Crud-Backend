import {Schema , model} from "mongoose";

const itemSchema = new Schema(
    {
        name:String,
        city:String,
        email:String,
        roll_no:Number
    },
    {
        timestamps:true
    }
)

export default model('Item', itemSchema);