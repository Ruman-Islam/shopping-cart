// phone quantity increase
document.getElementById("phone-increase").addEventListener("click", function () {
    phoneIncreaseTodecrease(true, "phone");
    subTotal();
})
document.getElementById("phone-decrease").addEventListener("click", function () {
    phoneIncreaseTodecrease(false, "phone");
    subTotal();
})
document.getElementById("case-increase").addEventListener("click", function () {
    phoneIncreaseTodecrease(true, "case");
    subTotal();
})
document.getElementById("case-decrease").addEventListener("click", function () {
    phoneIncreaseTodecrease(false, "case");
    subTotal();
})
document.getElementById("remove-phone").addEventListener('click', function () {
    removeItem("phone-part");
})
document.getElementById("remove-case").addEventListener('click', function () {
    removeItem("case-part");
})

function removeItem(id) {
    document.getElementById(id).style.display = 'none';
}

function phoneIncreaseTodecrease(isIncrease, id){
    const quantityInputString = document.getElementById(id + "-quantity");
    const quantityInput = parseFloat(quantityInputString.value);
    // const phoneCount = quantityInput + 1;
    let phoneCount = quantityInput;
    if (isIncrease == true) {
        phoneCount = quantityInput + 1;
    }
    if (isIncrease == false && quantityInput > 0) {
        phoneCount = quantityInput - 1;
    }
    quantityInputString.value = phoneCount;
    let totalPhonePrice = phoneCount;
    if (id == "phone") {
         totalPhonePrice = phoneCount * 1200;
    }
    if (id == "case") {
         totalPhonePrice = phoneCount * 60;
    }
    document.getElementById(id + "-price").innerText = totalPhonePrice;
}


function subTotal() {
    const inputPhone = document.getElementById("phone-quantity");
    const phoneCount = parseFloat(inputPhone.value);
    const inputCase = document.getElementById("case-quantity");
    const caseCount = parseFloat(inputCase.value);
    const subTotal = (phoneCount * 1200) + (caseCount * 60);
    document.getElementById("subtotal").innerText = subTotal;
    const tax = subTotal * 0.1;
    document.getElementById("tax").innerText = tax;
    const total = subTotal + tax;
    document.getElementById("total").innerText = total;
}



// function phoneIncrease(){
//     const quantityInputString = document.getElementById("phone-quantity");
//     const quantityInput = parseFloat(quantityInputString.value);
//     const phoneCount = quantityInput + 1;
//     quantityInputString.value = phoneCount;

//     const totalPhonePrice = phoneCount * 1200;
//     document.getElementById("phone-price").innerText = totalPhonePrice;
// }

// function phoneDecrease() {
//     const quantityInputString = document.getElementById("phone-quantity");
//     const quantityInput = parseFloat(quantityInputString.value);      
//     let phoneCount = quantityInput;
//     if (phoneCount > 0) {
//          phoneCount = quantityInput - 1;
//     }
//     quantityInputString.value = phoneCount;
//     const totalPhonePrice = phoneCount * 1200;
//     document.getElementById("phone-price").innerText = totalPhonePrice;
// }

// function caseIncrease() {
//     const quantityInputString = document.getElementById("case-quantity");
//     const quantityInput = parseFloat(quantityInputString.value);
//     const caseCount = quantityInput + 1;
//     quantityInputString.value = caseCount;

//     const totalCasePrice = caseCount * 60;
//     document.getElementById("case-price").innerText = totalCasePrice;
// }

// function caseDecrease() {
//     const quantityInputString = document.getElementById("case-quantity");
//     const quantityInput = parseFloat(quantityInputString.value);
//     let caseCount = quantityInput;
//     if (quantityInput > 0) {
//         caseCount = quantityInput - 1;
//     }
//     quantityInputString.value = caseCount;
//     const totalCasePrice = caseCount * 60;
//     document.getElementById("case-price").innerText = totalCasePrice;
// }

// function subTotal() {
//     const inputPhone = document.getElementById("phone-quantity");
//     const phoneCount = parseFloat(inputPhone.value);
//     const inputCase = document.getElementById("case-quantity");
//     const caseCount = parseFloat(inputCase.value);
//     const subTotal = (phoneCount * 1200) + (caseCount * 60);
//     document.getElementById("subtotal").innerText = subTotal;
//     const tax = subTotal * 0.1;
//     document.getElementById("tax").innerText = tax;
//     const total = subTotal + tax;
//     document.getElementById("total").innerText = total;
// }