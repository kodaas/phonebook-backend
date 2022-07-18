import { Router } from "express";

const Auth = new Router()

Auth.get('/login', (req, res, next) => {
    res.send("Auth Working")
})

export default Auth