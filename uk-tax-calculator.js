// Tax
// Up to £12,570        0%  Personal allowance
// £12,571 to £50,270   20% Basic rate
// £50,271 to £125,140  40% Higher rate
// over £125,141        45% Additional rate

// NI
// Up to £12,570        0%  Personal allowance
// £12,571 to £50,270   10% Basic rate
// over £50,271         2%  Additional rate

const calculateTax = (salary) => {
    let personalAllowance = 12_570;
    if (salary > 100_000) {
        personalAllowance = Math.max(personalAllowance - (salary - 100_000) / 2, 0);
    }
    const taxableSalary = Math.max(salary - personalAllowance, 0);
    let restTaxableSalary = taxableSalary

    const baseRateSalary = Math.max(Math.min(restTaxableSalary, 50_270 - 12_570), 0);
    restTaxableSalary -= baseRateSalary;

    const higherRateSalary = Math.max(Math.min(restTaxableSalary, 125_140 - 50_270 - 12_570), 0);
    restTaxableSalary -= higherRateSalary;

    const additionalRateSalary = Math.max(restTaxableSalary, 0);

    const baseRateTax = baseRateSalary * 0.2;
    const higherRateTax = higherRateSalary * 0.4;
    const additionalRateTax = additionalRateSalary * 0.45;

    const tax = baseRateTax + higherRateTax + additionalRateTax;
    const NI = baseRateSalary * 0.10 + (additionalRateSalary + higherRateSalary)*0.02;
    const takeHome = salary - tax - NI;

    console.log(`\nSalary ${salary}, Taxable Salary: ${taxableSalary}, Tax: ${tax}, NI: ${NI} Take Home: ${takeHome} / 12 = ${ takeHome / 12}`);
    console.log(`Personal Allowance ${personalAllowance}`);
    console.log(`Basic rate ${baseRateSalary} x 0.2 = ${baseRateTax}`);
    console.log(`Higher rate ${higherRateSalary} x 0.4 = ${higherRateTax}`);
    console.log(`Additional rate ${additionalRateSalary} x 0.45 = ${additionalRateTax}`);
}
