function insertDivision() {
    const formDivisi = document.getElementById('formDivisi');
    formDivisi.addEventListener('submit', (event) => {

        // event.preventDefault();
        let name = document.getElementById("inputDivisi").value;

        const queryInsert = `INSERT INTO divisi_table (nama_divisi) VALUES('${name}')`;

        connectionDb.query(queryInsert, function (error, results, fields) {
            if (error){
                console.log(error.code);
            }else {
                console.log("Sucess")
            }
        });
    });
}



module.exports = insertDivision;