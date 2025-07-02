import Item from "../model/Item.js";

export const getAllData = async (req, res)=>{
    const users = await Item.find();
    res.json(users);
}

export const getUser = async (req, res)=>{
    const user = await Item.findById(req.params.id);
    res.json(user);
}

export const postUser = async (req, res)=>{
    const user = await Item.create(req.body);
    res.send('Data Added Successfully!');
}

export const putUser = async (req , res)=>{
    const user = await Item.findByIdAndUpdate(req.params.id,req.body);
    res.send("User Updated Successfully") 
}

export const deleteUser = async (req,res)=>{
    await Item.findByIdAndDelete(req.params.id);
    res.send("User Deleted");
}
