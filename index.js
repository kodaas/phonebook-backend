import express from "express";
import contact from "./contact/contacts"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (_, res) => {
    res.json(contact);
})


app.listen(PORT, () => console.log(`listening on localhost:${PORT}`))