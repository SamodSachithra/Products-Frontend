console.log("JS Loaded");


let txtProductProductName = document.getElementById("txt-product-name");

let txtProductProductDescription = document.getElementById("txt-product-description");

let txtProductProductPrice = document.getElementById("txt-product-price");

let btnSaveProduct = document.getElementById("btn-save-product");

function btnSaveProductOnClick(){
    //Gather Text box values
    //Generate JSON Object
    let requestBody = {
        "name" :txtProductProductName.value,
        "description" :txtProductProductDescription.value,
        "price" :txtProductProductPrice.value

    };
    //Initaite POST request
    fetch("http://localhost:8080/create-product",{
        method:"POST",
        body:JSON.stringify(requestBody),
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(data=>data.json())
    .then(data=>{
        console.log("Response Recived");
    })
}


btnSaveProduct.addEventListener("click",btnSaveProductOnClick);