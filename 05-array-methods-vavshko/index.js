//1 - get an array of random integers
function getRandomArray(length, min, max) {
    const randomArray = [];
    for(let i = 0; i < length; i++){
        randomArray.push(Math.floor(Math.random() * (max + 1 - min)) + min);
    }   
    return randomArray;
};

console.log(getRandomArray(3, 1, 50));

//3 get average 
function getAverage(...numbers) {
    let average = 0;
    for(let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        average += currentNum;
    }
    average = average / numbers.length;
    return average;
}
console.log(getAverage(2, 4, 6));

//5 filter even numbers 
function filterEvenNumbers(...numbers) {
    return numbers.filter(el => el % 2);
}

console.log(filterEvenNumbers(76, 3, 5, 98, 12));


//6 - count positive numbers 

function countPositiveNumbers(...numbers) {
    let count = 0;
    numbers.forEach((number) => {
        if(number > 0) {
            count++
        }
    });
    return count;
}

console.log(countPositiveNumbers(-5, -8, 80, 873, -495, 93));

//7 - get numbers that can be divided by 5
function getDividedByFive(...numbers){
    return numbers.filter(number => (number%5 == 0));
}

console.log(getDividedByFive(5, 30, 12, 14, 7));


//8 replace swear words
const replaceSwearWords = (string) => {
    const arr = string.split(" ");
    const swearWords = ['fuck' , 'shit'];

    swearWords.forEach((item) => {
        arr.forEach((current, i) => {
            arr[i] = current.replace(item, "****")
        });
    });
    const result = arr.join(" ");

    return result;
};
console.log(replaceSwearWords("Are you fucking kidding me?"));
