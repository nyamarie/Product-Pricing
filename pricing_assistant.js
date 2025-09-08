// Step 1: Create and Initialize Variables
let productName = "Wireless Headphones";
let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15;   // 15% discount
let salesTaxRate = 0.07;   // 7% tax
let fixedMonthlyCosts = 2500; // e.g., rent, utilities, platform fees

// Step 2: Calculate Pricing & Profit Metrics
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Step 3: Print to Console
console.log("=== Product Pricing Report ===");
console.log("Product Name: " + productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units: " + breakEvenUnits);
console.log("Profitable Per Unit?: " + isProfitablePerUnit);