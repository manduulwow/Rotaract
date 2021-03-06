const fs = require('fs');
const path = require('path')
const { get_error_log } = require('../error_log/error_log');
const { date_normalizer } = require('../normalizer/date_normalizer')

const error_log_path = "./error_log/club_api_error.txt"

module.exports = {
    getClubNames: (req, res) => {
        let query = "SELECT * FROM `club`";
        db.query(query, (err, clubs) => {
            if (err) {
                get_error_log(error_log_path,err)
                return res.status(500).send(err);
            }
            return res.json({ data: clubs });
        })
    },
    getUserClubData: (req, res, club_id) => {
        let query = "SELECT a.*,b.id FROM `club` a LEFT JOIN `images` b ON a.club_page_img_id = b.id WHERE a.id=?"
        db.query(query, club_id, (err, clubs) => {
            if (err) {
                get_error_log(error_log_path,err)
                return res.status(500).send(err);
            }
            return res.json(clubs);
        })
    },
    getClubData: (req, res) => {
        let query = "SELECT * FROM `club`"
        db.query(query, (err, clubs) => {
            if (err) {
                get_error_log(error_log_path,err)
                return res.status(500).send(err);
            }
            return res.json(clubs);
        })
    },
    saveClubIntro: (req, res, club_id) => {
        const data = req.body
        const charterDate = date_normalizer(data[1][1])
        const introductionText = data[1][2]
        let query = "UPDATE `club` SET introduction=?,charterDate=? WHERE id=?";
        db.query(query, [introductionText, charterDate, club_id], (err, response) => {
            if (err) {
                get_error_log(error_log_path,err)
                return res.status(500).send(err);
            }
            return res.json('Updated Introduction');
        })
    },
    editClubInfo: (req, res, club_id) => {
        const data = req.body
        const clubId = data.body.club_id
        const charterDate = date_normalizer(data.body.charterDate)
        const clubName = data.body.clubName
        const clubIntroduction = data.body.clubIntroduction
        const fileNames = data.body.fileNames
        let imagePath = './img/tmp_images'
        let desPath = './img/club-info-img'
        fs.readdir(imagePath, function (err, files) {
            if(fileNames.length > 0) {
                files.forEach(function (file, index) {
                    if (fileNames.includes(file)) {
                        fs.rename(path.join(imagePath, file), path.join(desPath, file), err => {
                            if (err) {
                                get_error_log(error_log_path,err)
                                return res.status(500).send(err);
                            }
                            db.query('INSERT INTO images SET ?', { path: path.join(desPath, file) }, function (err, result) {
                                if (err) {
                                    get_error_log(error_log_path,err)
                                    return res.status(500).send(err);
                                }
                                let query = "UPDATE `club` SET name=?,introduction=?,charterDate=?,club_page_img_id=? WHERE id=?";
                                db.query(query, [clubName,clubIntroduction, charterDate, result.insertId, clubId], (err, response) => {
                                    if (err) {
                                        get_error_log(error_log_path,err)
                                        return res.status(500).send(err);
                                    }
                                    return res.status(200).json('Updated Introduction');
                                })
                            });
                        });
                    }
                })
            }
            else {
                let query = "UPDATE `club` SET name=?,introduction=?,charterDate=? WHERE id=?";
                db.query(query, [clubName,clubIntroduction, charterDate, clubId], (err, response) => {
                    if (err) {
                        get_error_log(error_log_path,err)
                        return res.status(500).send(err);
                    }
                    return res.status(200).json('Updated Introduction');
                })
            }
                

            if (err) {
                get_error_log(error_log_path,err)
                return res.status(500).send(err);
            }
        })
    }
}