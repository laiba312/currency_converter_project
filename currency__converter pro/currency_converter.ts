// Function to convert currency
function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
  // Currency conversion rates (example rates)
  const conversionRates: { [key: string]: number } = {
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
  const convertedAmount =
    amount * (conversionRates[toCurrency] / conversionRates[fromCurrency]);
  return convertedAmount;
}

// Function to get user input
function getUserInput(): [number, string, string] {
  const readlineSync = require('readline-sync');

  // Get amount
  const amount = parseFloat(
    readlineSync.question('Enter the amount of money: ')
  );

  // Get source currency
  const fromCurrency = readlineSync.question(
    'Enter the source currency (e.g., USD): '
  );

  // Get target currency
  const toCurrency = readlineSync.question(
    'Enter the target currency (e.g., EUR): '
  );

  return [amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase()];
}

// Main function
function main() {
  // Get user input
  const [amount, fromCurrency, toCurrency] = getUserInput();

  // Convert currency
  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);

  // Display result
  if (convertedAmount !== -1) {
    console.log(
      `Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`
    );
  }
}

// Run the main function
main();
