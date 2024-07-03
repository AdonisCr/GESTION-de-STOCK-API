
// Ajout d'un article
function addItem() {
    const itemName = prompt("Nom de l'article :");
    const itemAmount = prompt("Quantité :");
    const itemMinAmount = prompt("Quantité minimale :");
    const itemEntryPrice = prompt("Prix d'entrée :");
    const itemPrice = prompt("Prix :");

    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({
        name: itemName,
        amount: itemAmount,
        minAmount: itemMinAmount,
        entryPrice: itemEntryPrice,
        price: itemPrice
    });
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

// Affichage des articles
function displayItems() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        itemList.innerHTML += `<tr>
            <td>${item.name}</td>
            <td>${item.amount}</td>
            <td>${item.minAmount}</td>
            <td>U$ ${item.entryPrice}</td>
            <td>U$ ${item.price}</td>
            <td><button onclick="removeItem(${index})">Supprimer</button></td>
        </tr>`;
    });
}

// Suppression d'un article
function removeItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

// Affichage des articles lors du chargement de la page
document.addEventListener('DOMContentLoaded', displayItems);
