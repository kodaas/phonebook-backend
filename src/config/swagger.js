import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from "dotenv"
dotenv.config()

const mode = process.env.MODE
const server = mode === "production" ? [{ url: "", description: "Production Server" }]
    : [{ url: "http://localhost:3000", description: "Local Server" }]
    
    
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "PhoneBook API",
            version: "1.0.0",
            description: "Engine powering the PhoneBook platform"
        },
        servers: server,     

        tags: [
            {
                name: "Auth",
                description: "Auth end points"
            },
            {
                name: "Contact",
                description: "Contact end point"
            },
        ]
    },

    apis: ["src/docs/*.js"]
    
}

export default swaggerJSDoc(options)