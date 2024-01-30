// script.js

// Dummy data for testing
let membersData = [];
let supplementStoreData = [];

function adminLogin() {
    // Perform admin login logic
    alert('Admin login logic here');
}

function addMember() {
    // Add member to the list
    const memberName = document.getElementById('memberName').value;
    const memberAge = document.getElementById('memberAge').value;

    membersData.push({ name: memberName, age: memberAge });

    displayMembers();
}

function displayMembers() {
    // Display members list
    const membersList = document.getElementById('membersList');
    membersList.innerHTML = '<h3>Members List</h3>';

    membersData.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = `${member.name}, Age: ${member.age}`;
        membersList.appendChild(listItem);
    });
}

function createBill() {
    // Create bill logic
    alert('Create bill logic here');
}

function assignFeePackage() {
    // Assign fee package logic
    alert('Assign fee package logic here');
}

function assignNotification() {
    // Assign notification logic
    alert('Assign notification logic here');
}

function exportReport() {
    // Export report logic
    alert('Export report logic here');
}

function displaySupplementStore() {
    // Display supplement store items
    const supplementStoreList = document.getElementById('supplementStore');
    supplementStoreList.innerHTML = '<h3>Supplement Store</h3>';

    supplementStoreData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        supplementStoreList.appendChild(listItem);
    });
}

function submitDietDetails() {
    // Submit diet details logic
    alert('Submit diet details logic here');
}

function memberLogin() {
    // Member login logic
    alert('Member login logic here');
}

function searchRecords() {
    // Search records logic
    alert('Search records logic here');
}

function userLogin() {
    // User login logic
    alert('User login logic here');
}

// Initial data display
displayMembers();
displaySupplementStore();
