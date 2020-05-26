const fs = require('fs');

module.exports = {
    get_error_log: (file_path, err) => {
        fs.appendFile(file_path, new Date().toISOString()+" :: "+err+" \n", error => {
            console.log(error)
        })
    }
}