import mongoose from 'mongoose'


const messageSchema = new mongoose.Schema({
    message: String,
    timeStamp: String,
    user: String,
    userImage: String

})



export default mongoose.model("Messages", messageSchema)



// message,timestamp,user,userImage


