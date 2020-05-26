const { get_error_log } = require('../error_log/error_log');
const error_log_path = "./error_log/image_api_error.txt"


module.exports = {
    getImage: (req, res) => {
        const imageId = req.query.imageId
        let query = "SELECT * FROM `images` WHERE id=?";
        db.query(query, imageId, (err, data) => {
            if (err) {
                get_error_log(error_log_path, err)
                return res.status(500).json({
                    error: 'Internal error please try again'
                })
            } else {
                let filePath = data[0].path
                const path = require('path');
                const appDir = path.dirname(__dirname);
                res.sendFile(path.join(appDir, filePath))
            }
        })
    }
}
