
function getTotal() {
    const amounts = [];

    for (let i = 1; i <= 5; i++) {
        const input = document.querySelector(`#addend${i}`);
        const amount = parseInt(input.value) || 0;
        amounts.push(amount);
    }

    const total = calculateTotal(amounts);
    document.querySelector('#sum').value = total;
    calculateTips(total);
}

function calculateTips(total) {
    const tip1 = calculateTip(total, 5);
    const tip2 = calculateTip(total, 10);
    const tip3 = calculateTip(total, 15);

    document.querySelector("#tip1").value = tip1;
    document.querySelector("#tip2").value = tip2;
    document.querySelector("#tip3").value = tip3;
}

function calculateTip(total, percentage) {
    return total * percentage / 100;
}

function calculateTotal(amounts) {
    return amounts.reduce((total, amount) => total + amount, 0);
}

document.querySelector('#addNumbers').addEventListener('click', getTotal);

// Get the year.
const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("year").textContent = year;


