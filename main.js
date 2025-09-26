// const addItem =  document.getElementById("quantityadd");
// const removeItem =  document.getElementById("quantityremove");
// const getElement = document.getElementById("quantity");


// addItem.addEventListener('click', function() {
// getElement.value = parseInt(getElement.value) +1;
// });

// removeItem.addEventListener('click', function() {
//     if (parseInt(getElement.value) >0) {
//     getElement.value = parseInt(getElement.value) -1;
//     }
// });
const saleTaxRate = 0.75;
incMsg = "This site under construction and will be fully functional soon.";
function product(item,size,price){
    this.item = item;
    this.size = size;
    this.price = price;
}