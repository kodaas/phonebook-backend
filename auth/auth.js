import express from "express"

const auth = express.Router()


auth.get('/', (_, res) => {
    res.send("Hello world")
})



export default auth