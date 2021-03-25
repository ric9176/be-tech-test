import express from "express"

import getFilms from "../services/getFilms.js"
import getCharacters from "../services/getCharacters.js"

const router = express.Router();

router.get("/", function(req, res) {
    res.send("hello routes")
})

router.get("/films", async function(req, res) {
    let { order } = req.query
    order = order ? order.toLocaleLowerCase() : "desc"

    if (!(order === "asc" || order === "desc")) {
        return res.status(400).send("invalid order")
    }

    const response = await getFilms({ order })
    res.json(response)
})

router.get("/characters/:film", async function(req, res) {
    let { film } = req.params

    if (!film) {
        return res.status(400).send("you must provide a film")
    }
    
    const response = await getCharacters({ film })
    res.json(response)
})

export default router;