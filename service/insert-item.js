// console.log(status)
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

// kode_barang	
// nama_barang	
// kuantitas_barang	
// divisi_milik	
// status_barang


function insertItem() {
    const formItem = document.getElementById('formItem');
    formItem.addEventListener('submit',(event)=>{
        let kode = document.getElementById("inputItemKode").value;
        let name = document.getElementById("inputItemName").value;
        let qty = document.getElementById("inputItemQty").value;
        let status = document.getElementById("inputItemStatus").value;
        let divisi = document.getElementById("inputItemDivisi").value;

        const queryInsert = `INSERT INTO item_table (kode_barang,nama_barang,kuantitas_barang,divisi_milik,status_barang) VALUES('${kode}','${name}',${qty},'${divisi}','${status}')`;

        connectionDb.query(queryInsert, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                console.log("Sucess")
            }
        });

    });
}


module.exports = insertItem