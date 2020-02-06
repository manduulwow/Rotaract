const fs = require('fs');
const path = require('path')

module.exports = {
    getMembers: (req, res) => {
        const club_id = req.body.club_id
        let query = "SELECT * FROM `members` where club_id=?";
        db.query(query, club_id, (err, members) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json({ data: members });
        })
    },
    getMemberData: (req, res) => {
        const memberId = req.body.memberId
        let query = "SELECT * FROM `members` where id=?";
        db.query(query, memberId, (err, member) => {
            if (err) {
                return res.status(500).send(err);
            }
            let query2 = "SELECT d.* FROM `members` a INNER JOIN (SELECT * FROM `member_type_link` b INNER JOIN `member_type` c ON b.`member_type_id`=c.`id`) d ON a.`id`=d.`member_id` where a.`id`=?";
            db.query(query2, memberId, (err, memberTypes) => {
                if (err) {
                    return res.status(500).send(err);
                }
                console.log(memberTypes)
                return res.json({ data: member, types: memberTypes });
            })
        })
    },
    getMembersByName: (req, res) => {
        const name = req.body.name
        let query = "SELECT * FROM `members` where first_name LIKE ?";
        db.query(query, '%' + name + '%', (err, member) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json({ data: member });
        })
    },
    editMemberData: (req, res) => {
        const data = req.body.body
        const member = data.member
        const joined_date = new Date(member.joined_date)
        const types = data.types
        const fileName = data.fileName
        let imagePath = './img/tmp_images'
        let desPath = './img/club-member-img'
        console.log(data)

        fs.readdir(imagePath, function (err, files) {
            if (fileName.length > 0) {
                files.forEach(function (file, index) {
                    if (fileName === file) {
                        fs.rename(path.join(imagePath, file), path.join(desPath, file), err => {
                            if (err) throw err;
                            db.query('INSERT INTO images SET ?', { path: path.join(desPath, file) }, function (err, result) {
                                if (err) throw err;
                                let query = "UPDATE `members` SET member_id=?,first_name=?,last_name=?,register_num=?,joined_date=?,image_id=? WHERE id=?";
                                db.query(query, [member.member_id,member.first_name,member.last_name,member.register_num, joined_date.getFullYear()+"-"+(joined_date.getMonth()+1)+"-"+joined_date.getDate(), result.insertId, member.id], (err, response) => {
                                    if (err) {
                                        console.log(err)
                                        return res.status(500).send(err);
                                    }
                                    return res.status(200).json('Updated Member');
                                })
                            });
                        })
                    }
                })
            }
        })
    }
}