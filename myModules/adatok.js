const mysql = require('mysql');
const fs = require('fs');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'idopontok'
})

module.exports.dbRender = function(req,res) {
    myQuery = "SELECT kezdOra, kezdPerc, kezdMp, vegeOra, vegePerc, vegeMP FROM hivasok";
    connection.query(myQuery, (err,result,fields)=>{
        if(err) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        res.render('mysql', {hivasok : sorok})
    })
}
const jsonDatas = "./datas/hivasok.json";
module.exports.jsonRender = function(req,res){
    fs.readFile(jsonDatas,(err, data)=>{
        if(err) throw err;
        const hivasaim = JSON.parse(data);
        res.render("json", {hivasok : hivasaim});
    });
}