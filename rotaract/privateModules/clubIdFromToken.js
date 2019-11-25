exports.getClubIdFromToken = function(req) {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token

    const club_id = token.split("=")[1]
    return club_id
}
