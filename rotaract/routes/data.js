
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
        console.log(values)
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
        console.log(req.body)
        let query = (club_id) ? "SELECT * FROM `projects` WHERE club_id=?" : "SELECT * FROM `projects`"
        db.query(query,club_id, (err, clubs) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json(clubs);
        })
    }
}