var pNameInput = document.getElementById("productName");
var pPriceInput = document.getElementById("productPrice");
var pCategoryInput = document.getElementById("productCategory");
var pDescInput = document.getElementById("productDesc");
var row = document.getElementById("row");//!display products



//! array to store the products
var pList = []

//! button onclick="addProduct ()"
function addProduct () {
    if(pNameInput.value == '' || pPriceInput.value == '')
        return;



    var product = {
        name : pNameInput.value,
        price : pPriceInput.value,
        category : pCategoryInput.value,
        desc : pDescInput.value
    }

    pList.push(product);
    dispalyProducts();
    clearInputs()
    console.log(pList);

}

//! button onclick="clearInputs ()"
function clearInputs(){

    pNameInput.value='';
    pPriceInput.value='';
    pCategoryInput.value='';
    pDescInput.value='';

}





function dispalyProducts (){
    var card='';
for( var i = 0 ; i<pList.length ; i++) {
    card+= `<div class="col-md-4 mb-4">
    <div class="inner">
        <div class="img rounded-3 overflow-hidden">
            <img src="imgs/blog-3.jpg" class="w-100" alt="card photo">
        </div>
        <div class="contant bg-info-subtle shadow p-1">
            <h2 class="h4">${pList[i].name}</h2>
        <span class="badge bg-primary my-2">${pList[i].category}</span>
        <p>${pList[i].desc}</p>
        <span class="mb-2 fs-4 text-danger-emphasis">${pList[i].price}$</span>

        <button class="btn mb-3 w-100 btn-outline-danger">Delet</button>
        <button class="btn mb-3 w-100 btn-outline-info">Update</button>
        </div>
    </div>
</div>`;

}

row.innerHTML = card;
}



function validateProductName(){
    var regex = /^[A-Z][a-z]{3,15}$/;
    var isValed = regex.test(pNameInput.value);



    if(isValed){
        console.log("hi");
    }
}