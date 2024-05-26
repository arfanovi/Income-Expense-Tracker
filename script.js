let totalIncome = 0;
let totalExpense = 0;
let entryCount = 0;

function updateTotals() {
    document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('total-expense').textContent = `$${totalExpense.toFixed(2)}`;
    document.getElementById('total-balance').textContent = `$${(totalIncome - totalExpense).toFixed(2)}`;
}

function addEntry() {
    const name = document.getElementById('name').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('itemType').value;

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid name and a positive amount.");
        return;
    }

    entryCount++;
    const table = document.getElementById('table');
    const row = table.insertRow();
    row.insertCell(0).textContent = entryCount;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = `$${amount.toFixed(2)}`;
    row.insertCell(3).textContent = type == "1" ? "Income" : "Expense";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        if (type == "1") {
            totalIncome -= amount;
        } else {
            totalExpense -= amount;
        }
        table.deleteRow(row.rowIndex);
        updateTotals();
    };
    row.insertCell(4).appendChild(deleteButton);

    if (type == "1") {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    updateTotals();
    document.getElementById('name').value = "";
    document.getElementById('amount').value = "";
}

window.onload = function() {
    updateTotals();
};
