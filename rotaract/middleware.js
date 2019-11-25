// token lul
const secret = 'mysecretshh'


const jwt = require('jsonwebtoken')

const withAuth = function(req, res, next) {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token

    if(!token) {
        res.status(401).send('Unauthorized: No token provided')
    } else {
        const token_check = token.split("=")[0]
        const club_id = token.split("=")[1]
        console.log("club id : "+ club_id)
        jwt.verify(token_check, secret, function(err, decoded) {
            if(err) {
                res.status(401).send('Unauthorized: Invalid token')
            } else {
                req.username = decoded.username
                res.club_id = club_id
                next()
            }
        })
    }
}

module.exports = withAuth