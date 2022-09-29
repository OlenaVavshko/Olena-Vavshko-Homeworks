//create three objects with info about countries
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1 - calculate tax for a specific country
function getMyTaxes(salary) {
    return salary * this.tax;
};

console.log(`1000 salary after tax in Ukraine - ${getMyTaxes.call(ukraine, 1000)}$`);
console.log(`1000 salary after tax in Latvia - ${getMyTaxes.call(latvia, 1000)}$`);
console.log(`1000 salary after tax in Litva - ${getMyTaxes.call(litva, 1000)}$`);

//2 - average tax in a specific country
function getMiddleTaxes(country) {
   return this.middleSalary * this.tax;
}

console.log(`Average tax in Ukraine - ${getMiddleTaxes.call(ukraine)}`);
console.log(`Average tax in Latvia - ${getMiddleTaxes.call(latvia)}`);
console.log(`Average tax in Litva - ${getMiddleTaxes.call(litva)}`);

//3 - total tax in a specific country
function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(`Total tax in Ukraine - ${getTotalTaxes.call(ukraine)}`);
console.log(`Total tax in Latvia - ${getTotalTaxes.call(latvia)}`);
console.log(`Total tax in Litva - ${getTotalTaxes.call(litva)}`);

//4 - calculate my salary
function getMySalary() {
    const salary = (Math.random() * (2000 - 1500) + 1500).toFixed();
    const taxes = salary * this.tax;
    const profit = salary - taxes;
    const country ={
      salary,
      taxes,
      profit,
    }
    console.log(country);
  
}

let timerId = setInterval(() => getMySalary.call(ukraine), 10000);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 20000);