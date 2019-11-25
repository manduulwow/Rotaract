const fs = require('fs');
const path = require('path')

module.exports = {
    getClubNames: (req, res) => {
        let query = "SELECT * FROM `club`";
        db.query(query, (err, clubs) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json({ data: clubs });
        })
    },
    getUserClubData: (req, res, club_id) => {
        let query = "SELECT a.*,b.id FROM `club` a LEFT JOIN `images` b ON a.club_page_img_id = b.id WHERE a.id=?"
        db.query(query, club_id, (err, clubs) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json(clubs);
        })
    },
    getClubData: (req, res) => {
        let query = "SELECT * FROM `club`"
        db.query(query, (err, clubs) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json(clubs);
        })
    },
    saveClubIntro: (req, res, club_id) => {
        const data = req.body
        const charterDate = data[1][1]
        const introductionText = data[1][2]
        let query = "UPDATE `club` SET introduction=?,charterDate=? WHERE id=?";
        db.query(query, [introductionText, charterDate, club_id], (err, response) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }
            return res.json('Updated Introduction');
        })
    },
    editClubInfo: (req, res, club_id) => {
        const data = req.body
        const clubId = data.body.club_id
        const charterDate = data.body.charterDate
        const clubName = data.body.clubName
        const clubIntroduction = data.body.clubIntroduction
        const fileNames = data.body.fileNames
        console.log("Edit club working")
        let imagePath = './tmp/tmp_images'
        let desPath = './img/club-info-img'
        fs.readdir(imagePath, function (err, files) {
            files.forEach(function (file, index) {
                if (fileNames.includes(file)) {
                    fs.rename(path.join(imagePath, file), path.join(desPath, file), err => {
                        if (err) throw err;
                        console.log('Moving ' + file);
                        db.query('INSERT INTO images SET ?', { path: path.join(desPath, file) }, function (err, result) {
                            if (err) throw err;
                            let query = "UPDATE `club` SET name=?,introduction=?,charterDate=?,club_page_img_id=? WHERE id=?";
                            db.query(query, [clubName,clubIntroduction, charterDate, result.insertId, clubId], (err, response) => {
                                if (err) {
                                    console.log(err)
                                    return res.status(500).send(err);
                                }
                                return res.status(200).json('Updated Introduction');
                            })
                            console.log(result.insertId);
                        });
                    });
                }
            })

            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }
        })
    }
}