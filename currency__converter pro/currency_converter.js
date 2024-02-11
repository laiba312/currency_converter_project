// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Currency conversion rates (example rates)
    var conversionRates = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.73,
        // Add more currency conversion rates as needed
    };
    // Check if currencies are supported
    if (!(fromCurrency in conversionRates) || !(toCurrency in conversionRates)) {
        console.error('Error: Unsupported currency');
        return -1;
    }
    // Convert the amount to the target currency
    var convertedAmount = amount * (conversionRates[toCurrency] / conversionRates[fromCurrency]);
    return convertedAmount;
}
// Function to get user input
function getUserInput() {
    var readlineSync = require('readline-sync');
    // Get amount
    var amount = parseFloat(readlineSync.question('Enter the amount of money: '));
    // Get source currency
    var fromCurrency = readlineSync.question('Enter the source currency (e.g., USD): ');
    // Get target currency
    var toCurrency = readlineSync.question('Enter the target currency (e.g., EUR): ');
    return [amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase()];
}
// Main function
function main() {
    // Get user input
    var _a = getUserInput(), amount = _a[0], fromCurrency = _a[1], toCurrency = _a[2];
    // Convert currency
    var convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    // Display result
    if (convertedAmount !== -1) {
        console.log("Converted amount: ".concat(convertedAmount.toFixed(2), " ").concat(toCurrency));
    }
}
// Run the main function
main();
