/* Complete each of the following tasks by writing code to manipulate the provided 
arrays. Your solution should only use the array methods covered in the lesson: 
push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(), 
concat(), slice(), splice(), sort(), and reverse(). Submit the final version of 
the arrays as specified after each task. */

/* Task 1: Using forEach() 
1. Create an array of five of your favorite cities. 
2. Use forEach( ) to log each city name to the console in uppercase. 
3. Submit the output format by adding comments to the code. */

let favCities = ["Paris", "San Diego", "Copenhagen", "Ensenada", "Woodston"]; // creates array of fav Cities
favCities.forEach(city => { // forEach method to perform action on each element
    console.log(city.toUpperCase()); // Logs the cities in UpperCase see below
});

/*PARIS
SAN DIEGO
COPENHAGEN
ENSENADA
WOODSTON */

/* Task 2: Transforming with map() 
1. Create an array called numbers with the numbers 1-5. 
2. Use map( ) to create an array where each number is squared. Call this array 
squares. 
3. Log the new array.  
4. Submit the output by adding comments to the code. */

let numbers = [1, 2, 3, 4, 5]; // array of numbers
let squared = numbers.map(num => num * num); // map function multiplying each by itself (squared)
console.log(squared);// logs [1, 4, 9, 25]

/* Task 3: Filtering with filter() 
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 
100. 
2. Use filter ( ) to create a new array containing only the scores greater than or 
equal to 80. Call this array highScores. 
3. Log the new array. 
4. Submit the output by adding comments to the code. */

let scores = [85, 42, 90, 75, 30, 100]; // array of scores
let highScores = scores.filter(score => score >= 80); // filter function can't repeat the => function
console.log(highScores); // Logs [85, 90, 100]

/* Task 4: Finding with find() and findIndex() 
1. Create an array called favoriteFood that contains a list of your favorite 
dishes. Try to add 5 or 6 elements. 
2. Use find() to locate the first food with more than 4 letters. 
3. Use findIndex( ) to find the index of that fruit. */

let favFood = ["ice", "pizza", "steak", "Raclette", "Fondue"]; // creates array
let plusFourLetters = favFood.find(food => food.length > 4); // outsputs pizza / ice is less than 4 so skips
console.log(plusFourLetters); // logs Pizza

let foodIndex = favFood.findIndex(food => food.length > 4); // returns index position for 1st food with more than 4 letters
console.log(foodIndex); // 1 starts at 0 so pizza at 1










