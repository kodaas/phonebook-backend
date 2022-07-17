import mongoose from "mongoose"

export default function (URI) {
    return mongoose.connect(URI)
        .then(() => console.log("Connected to DataBase"))
        .catch(err => console.log(err))
}