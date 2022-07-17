import { CustomError } from "./error.js"

export default function (error, req, res, next) {

    if (error instanceof CustomError) return res.status(error.statusCode).json({ message: error.message })

    console.log({message: error.message})
    return res.status(500).json({message: error.message})
}