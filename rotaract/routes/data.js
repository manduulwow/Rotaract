const fs = require('fs');
const path = require('path')

module.exports = {
    saveMembers: (req, res, club_id) => {
        const data = req.body
        const values = []
        for(let i = 1; i < data.length; i++) {
            let joinedDate = (data[i][6].length > 4) ? data[i][6] : data[i][6]+'/07/01'
            values.push([club_id,data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],joinedDate])
        }
        let query = "INSERT INTO `members`(club_id,member_id,first_name,last_name,register_num,member_type,joined_date) VALUES ?"
        db.query(query, [values], (err, response) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }
            return res.json('Inserted Members');
        })
    },
    saveProjects: (req, res, club_id) => {
        const data = req.body
        const values = []
        for(let i = 1; i < data.length; i++) {
            const duration = data[i][10].split("-")

            if(duration.length == 1) {
                duration.push(duration[0])
            }
            values.push([club_id,data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],data[i][7],data[i][8],data[i][9],duration[0],duration[1],data[i][11],data[i][12]])
        }
        let query = "INSERT INTO `projects`(club_id,name,co_organizers,project_type,total_budget,fundraising,num_participants,other_participants,beneficaries,sponsors,started_date,finished_date,overview,aim) VALUES ?"
        db.query(query, [values], (err, response) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }
            return res.json('Inserted Projects');
        })
    },
    getProjects: (req, res) => {
        const club_id = req.body.club_id
        let query = (club_id) ? "SELECT * FROM `projects` WHERE club_id=?" : "SELECT * FROM `projects`"
        db.query(query,club_id, (err, projects) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            }
            // console.log(projects)

            return res.json(projects);
        })
    },
    getProjectData: (req, res) => {
        const projectId = req.body.projectId
        let query = "SELECT * FROM `projects` where id=?"
        db.query(query,projectId, (err, project) => {
            if (err) {
                return res.status(500).send(err)
            }

            let query = "SELECT b.id FROM `project_images` a INNER JOIN `images` b ON a.`image_id`=b.`id` where a.project_id=?"
            db.query(query,projectId, (err, images) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send(err);
                }
                query = "SELECT a.* FROM `project_type` a INNER JOIN `project_type_link` b ON a.`id`=b.`type_id` where b.project_id=?"
                db.query(query,projectId, (err, projectType) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).send(err);
                    }
                    return res.json({project:project, images:images, projectType: projectType});
                })
            })

        })
    },
    editProjectData: (req, res) => {
        const data = req.body
        const project_id = data.body.project_id
        const projectName = data.body.projectName
        const totalBudget = data.body.totalBudget
        const fundraising = data.body.fundraising
        const coOrganizer = data.body.coOrganizer
        const otherParticipants = data.body.otherParticipants
        const beneficaries = data.body.beneficaries
        const sponsors = data.body.sponsors
        const aim = data.body.aim
        const overview = data.body.overView
        const numParticipants = data.body.numParticipants
        const startedDate = data.body.startedDate
        const finishedDate = data.body.finishedDate
        const fileNames = data.body.imageNames
        const projectType = data.body.projectType

        let imagePath = './img/tmp_images'
        let desPath = './img/club-info-img'
        fs.readdir(imagePath, function (err, files) {
            if(fileNames.length > 0) {
                db.query('DELETE FROM project_images WHERE project_id=?', [project_id], function (err, result) {
                    files.forEach(function (file, index) {

                        if (fileNames.includes(file)) {
                            fs.rename(path.join(imagePath, file), path.join(desPath, file), err => {
                                if (err) throw err;
                                db.query('INSERT INTO images SET ?', { path: path.join(desPath, file) }, function (err, result) {
                                    if (err) throw err;
                                    let query = "INSERT INTO `project_images`(project_id,image_id) values(?,?)";
                                    db.query(query, [project_id, result.insertId], (err, response) => {
                                        if (err) {
                                            console.log(err)
                                            return res.status(500).send(err)
                                        }
                                    })
                                });
                            });
                        }
                    })
                })
            }
            let query = "UPDATE projects SET name=?,co_organizers=?,total_budget=?,fundraising=?,num_participants=?,other_participants=?,beneficaries=?,started_date=?,finished_date=?,overview=?,aim=? WHERE id=?";
            db.query(query, [projectName,coOrganizer,totalBudget,fundraising,numParticipants,otherParticipants,beneficaries,startedDate,finishedDate,overview,aim,project_id], (err, response) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send(err);
                }

                db.query('DELETE FROM project_type_link WHERE project_id=?', [project_id], function (err, result) {
                    projectType.forEach(function (type_id, index) {
                        db.query('INSERT INTO project_type_link SET ?', { project_id: project_id, type_id: type_id }, function (err, result) {
                            if (err) return res.status(500).send(err)
                        })
                    })
                })

                return res.send("Success")
            })            
            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }
        })
    }
}