export default function (req, _, next) {
    let { name } = req.query

    let queryObject = new Object()

    queryObject["_id"] = { "$in": req.user.contacts }

    if (name) queryObject["name"] = { $regex: name, $options: "i" };

    req.queryObject = queryObject
    next()
}