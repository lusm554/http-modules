function isAuthorized(req, res, next) {
    const auth = req.headers.authorization    

    if(auth === '123') {
        next()
    }
    else {
        res.status(401).send('Not permitted')
    }
}

module.exports = isAuthorized