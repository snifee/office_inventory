const renderDataTable = require("./view/render-data-table");
const renderDataList = require("./view/render-data-list");

const insertItem = require("./service/insert-item");
const insertDivision = require("./service/insert-division");

const connectionDb = require("./connect-to-db");
let $ = require('jquery');


var getDivisionQuery = 'SELECT `nama_divisi` FROM `divisi_table`';
var getItemQuery = 'SELECT * FROM `item_table`';










function changeDisplay() {

    if (location.hash == "#furniture") {
        console.log(location.hash)
        $("#main1").load("./furniture.htm")


        connectionDb.query(getDivisionQuery, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                let data = JSON.parse(JSON.stringify(results)) 
                data = data.map(a => a['nama_divisi']);
                renderDataList('divisi-list','a',data);
            }
        });
        
        connectionDb.query(getItemQuery, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                let data = JSON.parse(JSON.stringify(results)) 
                // // data = data.map(a => a['nama_divisi']);
                // alert(data)
        
                renderDataTable(data)
            }
        });

        insertItem()

        insertDivision()
    }

    if (location.hash == "#devices") {
        console.log(location.hash)
        $("#main1").load("./devices.htm")


        connectionDb.query(getDivisionQuery, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                let data = JSON.parse(JSON.stringify(results)) 
                data = data.map(a => a['nama_divisi']);
                renderDataList('divisi-list','a',data);
            }
        });
        
        connectionDb.query(getItemQuery, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                let data = JSON.parse(JSON.stringify(results)) 
                // // data = data.map(a => a['nama_divisi']);
                // alert(data)
        
                renderDataTable(data)
            }
        });

        insertItem()

        insertDivision()
    }

    if (location.hash == "#food") {
        console.log(location.hash)
        $("#main1").load("./food.htm")


        connectionDb.query(getDivisionQuery, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                let data = JSON.parse(JSON.stringify(results)) 
                data = data.map(a => a['nama_divisi']);
                renderDataList('divisi-list','a',data);
            }
        });
        
        connectionDb.query(getItemQuery, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                let data = JSON.parse(JSON.stringify(results)) 
                // // data = data.map(a => a['nama_divisi']);
                // alert(data)
        
                renderDataTable(data)
            }
        });

        insertItem()

        insertDivision()
    }


    
}

window.addEventListener("hashchange", changeDisplay)


