// calculate memory cost
const memoryCost = document.getElementById('memory-cost');
document.getElementById('btn-8gb').addEventListener('click', function () {
    memoryCost.innerText = '0';
    totalProductPrice();finalProductPrice();
})
document.getElementById('btn-16gb').addEventListener('click', function () {
    memoryCost.innerText = '180';
    totalProductPrice();finalProductPrice();
})

// calculate storage cost
const storageCost = document.getElementById('storage-cost');
document.getElementById('storage-256gb').addEventListener('click', function () {
    storageCost.innerText = '0';
    totalProductPrice();finalProductPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    storageCost.innerText = '100';
    totalProductPrice();finalProductPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    storageCost.innerText = '180';
    totalProductPrice();finalProductPrice();
})

// calculate delivery charge cost
const deliveryCharge = document.getElementById('delivery-charge');
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    totalProductPrice();finalProductPrice();
})
document.getElementById('chargable-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    totalProductPrice();finalProductPrice();
})

// calculate total price
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

// calculate final price
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
document.getElementById('code-varify').addEventListener('click', function () {
    const inputCode = document.getElementById('input-code');
    if (inputCode.value == 'stevekaku') {
        const final = finalProductPrice() - (finalProductPrice() * 0.2);
        finalTotalText.innerText = final;
        inputCode.value = '';
    }
})