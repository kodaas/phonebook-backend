import { connect } from "mongoose"

export default function (URI) {
    return connect(URI)
        .then(() => console.log("Connected to DataBase"))
        .catch(err => console.log(err))
}