const bcrypt = require('bcryptjs')
const saltRounds = bcrypt.genSaltSync(10);
const { get_error_log } = require('../error_log/error_log');
const error_log_path = "./error_log/user_api_error.txt"

module.exports = {
    authenticate: (req, res) => {
        const {username, password} = req.body
        let query = "SELECT * FROM `users` WHERE username=?";
        db.query(query, username, (err, user) => {
            if (err) {
                get_error_log(error_log_path, err+" authenticate()")
                return  res.status(500).json({
                    error: 'Internal error please try again'
                })
            } else if(!user) {
                res.status(401).json({
                    error: 'Incorrect username or password'
                })
            } else {

                bcrypt.compare(password, user[0].password, function(error1, same) {
                    if (error1) {
                        get_error_log(error_log_path, err+" authenticate()")
                        return res.status(500)
                            .json({
                            error: 'Internal error please try again'
                        });
                    } else if (!same) {
                        return res.status(401)
                            .json({
                            error: 'Incorrect username or password'
                        });
                    } else {
                        // Issue Token
                        const payload = {username}
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '1h'
                        })
                        res.cookie('token', token+"="+user[0].club_id, {httpOnly: true}).sendStatus(200)
                    }
                });
            }
        })
    },
    register: (req, res) => {
        const {username, password} = req.body
        bcrypt.hash(password, saltRounds, function(err, hashedPassword) {
            if(err) {
                get_error_log(error_log_path, err+" authenticate()")
                return res.status(500).send(err);
            } else {
                let query = "INSERT INTO `users`(username,password) VALUES(?,?)";
                db.query(query,[username,hashedPassword], (err, response) => {
                    if (err) {
                        get_error_log(error_log_path, err+" authenticate()")
                        return res.status(500).send(err);
                    }
                })
            }
        })
    }
}
