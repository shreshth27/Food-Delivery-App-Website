import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shreshthgupta2704:shreshth27@cluster0.buusbti.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


