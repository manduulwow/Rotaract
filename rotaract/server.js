const express = require('express')
const mysql = require('mysql')

const multer  = require('multer')
const upload = multer({ dest: './img/club-member-img' })

//routes
const { getClubNames, getUserClubData, getClubData, saveClubIntro, editClubInfo } = require('./routes/club');
const { authenticate, register } = require('./routes/user');
const { saveMembers, saveProjects, getProjects, getProjectData, editProjectData } = require('./routes/data')
const { getImage } = require('./routes/image');
const { addMember, getMembers, getMemberData, getMembersByName, editMemberData, getBoardMembers } = require('./routes/member');

const bodyParser = require('body-parser');
global.jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser')

//File upload
const fileUpload = require('express-fileupload');

//Excel reader
const readXlsxFile = require('read-excel-file/node');
const path = require('path')

global.secret = 'mysecretshh'

// MiddleWare
const withAuth = require('./middleware')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(fileUpload())

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rotaract_rotaract_db',
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('Connected')
    } else {
        console.log('Connection failed')
    }
})

global.db = mysqlConnection;

app.use(express.static(path.join(__dirname + '/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/clubs', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/clubInfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/editClubInfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/secret', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/uploadExcel', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/projectInfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/editProjectInfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/editProjectInfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/members', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/memberProfile', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/editMemberInfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.get('/emptyComponent', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
})

app.post('/api/uploadImages', function (req, res) {
    let files = req.files.file;
    if(isNaN(files.length)) {
        let name = files.name
        files.mv(`./img/tmp_images/${name}`, function (err) {
            if (err) {
                return res.send(500);
            }
        }); 
    } else {
        files.forEach(file => {
            let name = file.name
            file.mv(`./img/tmp_images/${name}`, function (err) {
                if (err) {
                    return res.send(500);
                }
            }); 
        });
    }
    return res.send(200);
});

app.post('/api/editClubData', editClubInfo)

function GetClubIdFromToken(req) {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token

    const club_id = (token) ? token.split("=")[1] : false
    return club_id
}

app.get('/api/getUserClubData', withAuth, function (req, res) {
    const club_id = GetClubIdFromToken(req)
    getUserClubData(req, res, club_id)
})

app.get('/api/getClubData', getClubNames)

app.post('/api/getClubData', function (req, res) {
    getUserClubData(req, res, req.body.club_id)
})

app.post('/api/getProjects', getProjects)

app.post('/api/excelfile', withAuth, function (req, res) {
    let sampleFile = req.files.excel;
    sampleFile.mv(`./tmp/tmp_excel/${req.files.excel.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.send(500);
        }
        readXlsxFile(`./tmp/tmp_excel/${req.files.excel.name}`).then((rows) => {
            res.json({ data: rows });
        })
    }); 
})

//data save from Excel

app.post('/api/save_intro', withAuth, function (req, res) {
    const club_id = GetClubIdFromToken(req)
    saveClubIntro(req, res, club_id)
})

app.post('/api/save_member', withAuth, function (req, res) {
    const club_id = GetClubIdFromToken(req)
    saveMembers(req, res, club_id)
})

app.post('/api/save_project', withAuth, function (req, res) {
    const club_id = GetClubIdFromToken(req)
    saveProjects(req, res, club_id)
})

//End of the Excel data saving

app.get('/api/about', function (req, res) {
    res.send('Welcome')
})

app.get('/api/secret', function (req, res) {
    res.send('The password is potato')
})

app.get('/api/uploadExcel', function (req, res) {
    res.send('The password is potato')
})

// POST route to register a user
app.post('/api/register', register)

app.post('/api/authenticate', authenticate)

app.get('/api/clubName', getClubNames)

app.get('/api/checkToken', withAuth, function (req, res) {
    const club_id = GetClubIdFromToken(req)
    res.send(club_id)
})

app.get('/api/signOut', withAuth, function (req, res) {
    res.clearCookie('token').sendStatus(200).redirect('/');
})

app.get('/api/getClubData', getClubData)

app.get('/api/getImage', getImage)

app.post('/api/getProjectData', getProjectData)

app.post('/api/editProjectData', editProjectData)

app.post('/api/getMembers', getMembers)

app.post('/api/getMembersByName', getMembersByName)

app.post('/api/memberData', getMemberData)

app.post('/api/editMemberData', editMemberData)

app.post('/api/getBoardMembers', getBoardMembers)

app.post('/api/addMember', addMember)

app.listen(process.env.PORT || 61001);