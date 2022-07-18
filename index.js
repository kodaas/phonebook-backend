import express from "express";
import dotenv from "dotenv";
import SwaggerUi from "swagger-ui-express";
import errorhandler from "./src/middleware/errorhandler.js";

import specs from "./src/config/swagger.js"
import DBConnection from "./src/config/dbconnection.js"

import { routeGuard, canActivate } from "./src/routes/auth/Guard.js"


dotenv.config()

// Routes Import
import Auth from "./src/routes/auth/auth.js";
import Contact from "./src/routes/contact/contact.js";

const PB = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URL;

PB.use(express.json());
PB.use(express.urlencoded({ extended: true }));

const Start = async () => {
    try {
        await DBConnection(URI)
        PB.listen(PORT, () => console.log("Server is Running"))    
    } catch (error) {
        console.log(error)
    }
}

PB.get("/", (_, res) => { res.status(302).redirect('/doc') })
PB.use('/doc', SwaggerUi.serve, SwaggerUi.setup(specs))

PB.use(routeGuard)
PB.use('/auth', canActivate, Auth)
PB.use('/contact', canActivate, Contact)

PB.use((_, res) => { res.status(404).json({ message: "Unknown Route" }) })
PB.use(errorhandler)

Start()

