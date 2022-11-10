function renderDataList(parent,child,arr) {

    const parentElement = document.getElementById(parent);

    // <a href="#" class="list-group-item list-group-item-action">A second link item</a>

    arr.forEach(item =>{
        const childElement = document.createElement(child);
        childElement.innerHTML = item;
        childElement.setAttribute("class","list-group-item list-group-item-action");
    
    
        parentElement.appendChild(childElement);
    })

}


module.exports = renderDataList;