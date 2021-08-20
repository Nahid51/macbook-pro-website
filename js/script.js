// memory cost
const btn8GB = document.getElementById('btn-8gb');
const btn16GB = document.getElementById('btn-16gb');
const memoryCost = document.getElementById('memory-cost');
btn8GB.addEventListener('click', function () {
    memoryCost.innerText = '0';
    totalProductPrice();

})
btn16GB.addEventListener('click', function () {
    memoryCost.innerText = '180';
    totalProductPrice();

})

// storage cost
const storage256GB = document.getElementById('storage-256gb');
const storage512GB = document.getElementById('storage-512gb');
const storage1TB = document.getElementById('storage-1tb');
const storageCost = document.getElementById('storage-cost');
storage256GB.addEventListener('click', function () {
    storageCost.innerText = '0';
    totalProductPrice();

})
storage512GB.addEventListener('click', function () {
    storageCost.innerText = '100';
    totalProductPrice();
})
storage1TB.addEventListener('click', function () {
    storageCost.innerText = '180';
    totalProductPrice();
})

// delivery charge cost
const freeDelivery = document.getElementById('free-delivery');
const chargableDelivery = document.getElementById('chargable-delivery');
const deliveryCharge = document.getElementById('delivery-charge');
freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    totalProductPrice();
})
chargableDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    totalProductPrice();
})

// total price
const bestPriceText = document.getElementById('best-price');
const totalPriceText = document.getElementById('total-price');

function totalProductPrice() {
    const bestPrice = parseInt(bestPriceText.innerText);
    const totalMemoryCost = parseInt(memoryCost.innerText);
    const totalStorageCost = parseInt(storageCost.innerText);
    const totalDeliveryCharge = parseInt(deliveryCharge.innerText);
    const totalPrice = bestPrice + totalMemoryCost + totalStorageCost + totalDeliveryCharge;
    totalPriceText.innerText = totalPrice;
}


// final price
const finalTotalText = document.getElementById('total');

function finalProductPrice() {
    const bestPrice = parseInt(bestPriceText.innerText);
    const totalMemoryCost = parseInt(memoryCost.innerText);
    const totalStorageCost = parseInt(storageCost.innerText);
    const totalDeliveryCharge = parseInt(deliveryCharge.innerText);
    const finalPrice = bestPrice + totalMemoryCost + totalStorageCost + totalDeliveryCharge;
    finalTotalText.innerText = finalPrice;
    return finalPrice;
}
// add promo code
const codeVarify = document.getElementById('code-varify');
codeVarify.addEventListener('click', function () {
    const inputCode = document.getElementById('input-code');
    if (inputCode.value == 'stevekaku') {
        const final = finalProductPrice() - (finalProductPrice() * 0.2);
        finalTotalText.innerText = final;
        inputCode.value = '';
    }
})