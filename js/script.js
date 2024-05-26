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
    
    if (type == "1") {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    const table = document.getElementById('table');
    const row = table.insertRow();
    row.insertCell(0).textContent = entryCount;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = `$${amount.toFixed(2)}`;
    row.insertCell(3).textContent = type == "1" ? "Income" : "Expense";

    const deleteButtonCell = row.insertCell(4);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteButton(row);
    };
    deleteButtonCell.appendChild(deleteButton);

    updateTotals();

    document.getElementById('name').value = "";
    document.getElementById('amount').value = "";
}

function deleteButton(row){
    const amount = parseFloat(row.cells[2].textContent.slice(1));
    const type = row.cells[3].textContent === "Income" ? 1 : 2;
 
    if(type === 1){
        totalIncome -= amount;
    } else {
        totalExpense -= amount;
    }
    row.remove();
    updateTotals();
}

window.onload = function() {
    updateTotals();
};
