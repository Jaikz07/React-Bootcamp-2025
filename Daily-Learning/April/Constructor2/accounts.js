class BankAccount {
    constructor(accountName, accountNumber, accountType, initialBalance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = initialBalance;
    }
}

//Array to store Accounts.
let accounts = [];

//Getting form elements.
let form = document.getElementById("account-form");
let accountNameInput = document.getElementById("account-name");
let accountNumberInput = document.getElementById("account-number");
let accountTypeSelect = document.getElementById("account-type");
let initialBalanceInput = document.getElementById("initial-balance");
let createAccountBtn = document.getElementById("create-account-btn");
let accountListDiv = document.getElementById("account-list");

//Adding Event listener to create account button.
createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //To get input value.
    let accountName = accountNameInput.value;
    let accountNumber = parseInt(accountNumberInput.value);
    let accountType = accountTypeSelect.value;
    let initialBalance = parseFloat(initialBalanceInput.value);
    
    //creating new account
    let newAccount = new BankAccount(accountName, accountNumber, accountType, initialBalance);

    //adding new account to array
    accounts.push(newAccount);
    
    // Clear the previous display
    console.clear(); // Clears the console

    //display account list
    //console.log(accounts);
    accounts.forEach((account, index) => {
        console.log(`Account ${index + 1}:`);
        console.log(`Name: ${account.accountName}`);
        console.log(`Number: ${account.accountNumber}`);
        console.log(`Type: ${account.accountType}`);
        console.log(`Balance: ${account.balance}`);
        console.log('-------------------');
    });


    form.reset();
});

