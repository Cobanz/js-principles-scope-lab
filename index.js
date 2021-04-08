// Write your solution in this file!

var customerName = 'bob'

// const upperCaseCustomerName=() => {customerName.toUpperCase} 

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'hello';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Assignment to constant variable.';
}