function renderDataTable(arr) {

    /* <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    </tr> */

    // kode_barang	
    // nama_barang	
    // kuantitas_barang	
    // divisi_milik	
    // status_barang	
    // <button type="button" class="btn btn-primary btn-sm">Small button</button>
    const parentElement = document.getElementById("tableMain");

    arr.forEach(item =>{
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.setAttribute("scope","row");
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');

        const button = document.createElement('button');
        button.setAttribute("type","button");
        button.setAttribute("class","btn btn-primary btn-sm");
        button.setAttribute("style","--bs-btn-padding-y: .20rem; --bs-btn-padding-x: .25rem; --bs-btn-font-size: .65rem;")
        button.innerHTML = "ubah";

        th.innerHTML = item['kode_barang'];
        td1.innerHTML = item['nama_barang'];
        td2.innerHTML = item['kuantitas_barang'];
        td3.innerHTML = item['status_barang'];
        td4.innerHTML = item['divisi_milik'];
        td5.appendChild(button);
    
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        parentElement.appendChild(tr);
    })

}

module.exports = renderDataTable;