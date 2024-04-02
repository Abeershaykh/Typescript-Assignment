import { Console, log } from "console";

console.log("Hello,world!");
console.log("Thankyou, Governor Sindh Kamran Khan Tesori");
// console.log(1+2);
// console.log("the result of 1+2 is", 1+2);
// let x = "hello world"
// console.log("the first assignment is to print ", x);

// var a = 5
// var b = 10 

// var result = a + b
// console.log(result)
// let personname= 'Abeer'
 
// console.log ("Hello", personname, "Would you like to run some python");

let quote= '"A person who never made a mistake never tried anything new."'
let author= 'Albert Einstein'

console.log (author, 'once said',quote);

// let x= ("Abeer");
// console.log(x.toUpperCase());

// let Name = 'Abeer';
// console.log(`My name is ${Name}`);

// Exercise 1
let Name: string= 'Eric';
console.log(Name)

// Exercise 2 Personal Message: Store a person’s name in a variable, and print a message to that person.Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log(`Hello ${Name}, would you like to learn some Python today`)

// Exercise 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Uppercase:", Name.toUpperCase())
console.log("Lowecase:", Name.toLowerCase())
console.log("Titlecase:", Name.replace(/\b\w/g,c=> c.toUpperCase()))

// Exercise 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let Quote= 'A person who never made a mistake never tried anything new.'
let Author= 'Albert Einstein'
console.log (`${Author} once said, "${Quote}"`);

// Exercise 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = 'Albert Einstein';
let message = `Hi my name is ${famous_person}`;
console.log (message);

// Exercise 6  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces
var whitespace = "\t Abeer \n";
console.log(whitespace);
var trimmed = whitespace.trim();
console.log(trimmed);

// Exercise 7 and 8
var addition = 'Adding';
var subtraction = 'subtracting';
var multippliaction = 'multiplying';
var division = 'dividing';
console.log(`By ${addition} 4+4 we get,`, 4+4);
console.log(`By ${subtraction} 10-2 we get,`, 10-2);
console.log(`By ${multippliaction} 4*2 we get,`, 4*2);
console.log(`By ${division} 16/2 we get,`, 16/2);
// or
console.log("Addition:", 4+4);
console.log("Subtraction:", 10-2);
console.log("Multiplication:", 4*2);
console.log("Division:", 16/2);

// Exercise 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let Favnumber: number = 11;
let Message: string = `My favorite number is ${Favnumber}`;
console.log(Message);

// Exercise 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Exercise 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let Friendsnames = ['Shayan', 'Haroon', 'Shaair', 'Jaangiri', 'Mustafa'];
console.log(Friendsnames.length);
for (let i=0; i<Friendsnames.length; i++){
    console.log(Friendsnames[i]);
}

// Exercise 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let myfriends = ['Shayan', 'Haroon', 'Shaair', 'Jaangiri', 'Mustafa'];
for (let i=0; i<myfriends.length; i++){
    console.log(`Hey ${myfriends[i]}, how are you?`);   
}

// let Teachers: string[] = ['Narmeen' , 'Masood' , 'Mahmmod' , 'Nida' , 'Ahmed'];
// let Courses: string = "English";
// for (let i=0; i<Teachers.length; i++){
//     console.log(`${Teachers[i]} will teach ${Courses}`)
// }  

// Exercise 13  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.
let transport: string[] = ['Car', 'Bike', 'Truck', 'Redbus']
for (let i=0; i<transport.length; i++){
    console.log(`I would like to own a ${transport[i]}`)
}

// Exercise 14 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Invitation: string[] = ['Ozil', 'Sanchez', 'Saka']
for (let i=0; i<Invitation.length; i++){
    console.log(`${Invitation[i]}, you are invited to the dinner`)
}

// Exercise 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let Unaivalableguest: string = 'Sanchez'
let Newguest: string = 'Martinelli'
console.log(Unaivalableguest, "Is not available")
Invitation[1] = Newguest
for (let i=0; i<Invitation.length; i++){
    console.log(`${Invitation[i]}, you are invited to the dinner`)
}

// Exercise 16 //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (let i=0; i<Invitation.length; i++){
    console.log(`${Invitation[i]}, I have found a bigger table for dinner`)
}

// • Add one new guest to the beginning of your array • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
Invitation.unshift('Odegaard') // unshift (add value in the beginning)
Invitation.splice(2,0, 'Saliba') // (value to add indexnumber, values to take out, value to add)
Invitation.push('Raya') // push (value added at the last)
console.log(Invitation)

//  • Print a new set of invitation messages, one for each person in your list.
for (let i=0; i<Invitation.length; i++){
    console.log(`${Invitation[i]}, We are going to have dinner at bigger table`)
}

// Exercise 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('We can only invite two people for dinner')

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (Invitation.length>2){
    let removedguest = Invitation.pop()
    console.log(`${removedguest}, sorry we can not invite you for the dinner`)
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i=0; i<Invitation.length; i++){
    console.log(`${Invitation[i]}, congrats you are still invited to the dinner`)
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Invitation.splice(0,2)
console.log(Invitation)

// Exercise 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order
let locations: string[] = ['London', 'Paris', 'New York', 'Melbourne', 'Chicago'];

// Print your array in its original order.
console.log(`Original Order: ${locations}`)

// • Print your array in alphabetical order without modifying the actual list.
console.log (`Alphabetical Order: ${[...locations].sort()}`) //... means modify

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log (`Reverse Alphabetical Order: ${[...locations].sort().reverse()}`) 

// • Show that your array is still in its original order by printing it again.
console.log (`Still in original order: ${[locations]}`) 

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log (`Reverse in original order: ${locations.reverse()}`) 

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log (`Changed order: ${locations.sort()}`) 

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log (`Reverse Changed Order: ${locations.sort().reverse()}`) 

// Exercise 19 Think of something you could store in a array. For example, you could make a list of
//  mountains, rivers, countries, cities, languages, or anything else you’d like.
//  Write a program that creates a list containing these items.

let mountians: string[] = ['Mount Arafah', 'Himalayas', 'K2']
let rivers: string[] = ['River Indus', 'River Satlaj', 'River Raavi']
let countries: string[] = ['Pakistan' , 'India', 'Australia']
let cities: string[] = ['Manchester', 'Brisbane', 'Lahore']
let languages: string[] = ['Urdu', 'English', 'Deutsch']

console.log(`Mountians: ${mountians}`);
console.log(`Rivers: ${rivers}`);
console.log(`Countries: ${countries}`);
console.log(`Cities: ${cities}`);
console.log(`Languages: ${languages}`);

// Exercise 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let footballer = {
    name: 'Harry Kane',
    position: 'Striker',
    age: 32,
    club: 'Bayern Munich',
    country: 'England'
}
//console.log(footballer.trophy); // Index error because trophy does not exist
console.log(footballer) // corrected

// Exercise 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log("is car=='subharu',I predict False") //1
console.log("1:", car=='subharu')
console.log("is car.length== 6,I predict True") //2
console.log("2:", car.length==6)
console.log("is car.charAt(0) =='s',I predict True") //3
console.log("3:", car .charAt(0)=='s')
console.log("is  car.charAt(4) =='u',I predict False") //4
console.log("4:", car .charAt(4)=='u')
console.log("is  car =='honda',I predict False") //5
console.log("5:", car =='honda')
console.log("is  car.toUppercase =='SUBARU',I predict True") //6
console.log("6:", car.toUpperCase()=='SUBARU')
console.log("is car.toLowercase =='subaru',I predict True") //7
console.log("7:", car.toLowerCase()=='subaru')
console.log("is car!=subarhu, I predict True")//8
console.log("8:", car!=='subarhu')
console.log("is car.length==08, I predict False")//9
console.log("9:", car.length==8)
console.log("is car.length<4, I predict False")//10
console.log("10:", car.length<4)

// Exercise 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let myschool = 'NED University';
console.log(myschool=='NED University')
console.log(myschool!='NED University')
// • Tests using the lower case function
console.log(myschool.toUpperCase()=='NED UNIVERSITY')
console.log(myschool.toUpperCase()=='ned University')
console.log(myschool.toLowerCase()=='ned university')
console.log(myschool.toLowerCase()=='NED UNIVERSITY')
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(myschool.length>5)
console.log(myschool.length<11)
console.log(myschool.length!=13)
console.log(myschool.length==14)
console.log(myschool.length<=14)
console.log(myschool.length>=12)
// • Tests using "and" and "or" operators
console.log(myschool.length>=12 && myschool.length<3) // both must be true for and
console.log(myschool.length>=12 || myschool.length<3) // either can be true
// • Test whether an item is in a array
let players: string[] = ['Saka', 'Martinelli', 'Trossard', 'Rice']
console.log('is Martinelli included in the players array?')
console.log (players.includes('Martinelli'))
// • Test whether an item is not in a array
console.log('is Jesus included in the players array?')
console.log (players.includes('Jesus'))

// Exercise 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color= 'green'
if (alien_color ='green') {
    console.log('Player just earned 5 points')
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color='yellow' 
if (alien_color=='yellow'){
    console.log('test passes')
}
else
    console.log('test fails') // will not be printed

// Exercise 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
alien_color='green';
if (alien_color=='green'){
    console.log('the player just earned 5 points for shooting the alien.')
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color!='green'){
    console.log('the player just earned 10 points.')   
}
else {
    console.log('Color is green. Running else')
}
// • Write one version of this program that runs the if block and another that runs the else block.    
if (alien_color=='white'){
    console.log('print')
}
else {
    console.log('run the else block')
}

// Exercise 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color=='green'){
    console.log('player just earned 5 points')
}
else {
    console.log('player earned no points')
}
// • If the alien is yellow, print a message that the player earned 10 points.
if (alien_color=='yellow'){
    console.log('player just earned 10 points')
}
else {
    console.log('player earned no points')
}
// • If the alien is red, print a message that the player earned 15 points.
if (alien_color=='red'){
    console.log('player just earned 10 points')
}
else {
    console.log('player earned no points')
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color=='green'){
    console.log('color is green')
}
else if (alien_color='yellow'){
    console.log('color is yellow')
}
else if (alien_color='red'){
    console.log('color is red')
}

// Exercise 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
let personAge = 17
if (personAge<2){
    console.log ('the person is a baby.')
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (personAge>=2 && personAge<4) {
    console.log ('the person is a toddler.')
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (personAge>=4 && personAge<13) {
    console.log ('the person is a kid.')
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (personAge>=13 && personAge<20) {
    console.log ('the person is a teenager.')
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (personAge>=20 && personAge<65) {
    console.log ('the person is a adult.')
}
// • If the person is age 65 or older, print a message that the person is an elder.
if (personAge>=65) {
    console.log ('the person is an elder.')
}

// Exercise 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = ['Banana', 'Apple', 'Orange']
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes('Banana')){
    console.log('1: I really like Banana')
}
if (favorite_fruits.includes('Grapes')){
    console.log('2: I really like Grapes')
}
else{
    console.log('2: I do not like Grapes')
}
if (favorite_fruits.includes('Apple')){
    console.log('3: I really like Apple')
}
if (favorite_fruits.includes('Orange')){
    console.log('4: I really like Orange')
}
if (favorite_fruits.includes('Mango')){
    console.log('5: I really like Mango')
}

// Exercise 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let username: string[] = ['Abeer', 'Haroon', 'Bilal', 'Umar', 'Admin'] 
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (let i=0; i<username.length; i++){
    if (username[i]=='Admin')
    console.log('Hello Admin, would you like to see a status report?')
//  Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else 
    console.log(`${username[i]},Thankyou for logging in again`)
}

// Exercise 31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
if (username.length===0){
    console.log('We need to find some users!')
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    username=[]
    console.log(`All username removed, ${username}, ${username.length}`)
}
username.length=0
console.log('Username is empty')

// Exercise 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
let current_users: string[] = ['Abeershaikh1', 'Abeershaikh2', 'Abeershaikh3', 'Abeershaikh4', 'Abeershaikh5']
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ['Abeershaikh2', 'Abeershaikh3', 'Abeershaikh6', 'Abeershaikh7', 'Abeershaikh8']
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let i=0; i<new_users.length; i++){
    let usernamess= new_users[i]
    if (current_users.includes(usernamess))
    console.log(`${usernamess} will have to enter a new username`)
    else
    console.log(`Username is available for ${usernamess} `)
}
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Exercise 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
let ordinalNumbers: number[] = [1,2,3,4,5,6,7,8,9]
// Loop through the array.
for (let i=0; i<ordinalNumbers.length; i++){
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    if (ordinalNumbers[i]<2)
    console.log(`${ordinalNumbers[i]}st`)
    else if (ordinalNumbers[i]==2)
    console.log(`${ordinalNumbers[i]}nd`);
    else if (ordinalNumbers[i]==3)
    console.log(`${ordinalNumbers[i]}rd`);
    else
    console.log(`${ordinalNumbers[i]}th`);
}

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas: string[] = ['Afghani', 'Chicken', 'Fajita']
for (let i=0; i<pizzas.length; i++){
    console.log(`${pizzas[i]}`);
}
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i=0; i<pizzas.length; i++){
    console.log(`I like ${pizzas[i]} pizza`);
}
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log(`I really love pizza! Whether it's ${pizzas} flavor or any flavour I enjoy eating it.`)

// Exercise 34 Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
let animals: string[] = ['Bird', 'Dog', 'Cat']
for (let i=0; i<animals.length; i++){
    console.log(`${animals[i]}`)
}
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (let i=0; i<animals.length; i++){
    console.log(`${animals[i]} would make a great pet`)
}
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log(`${animals} are extremely friendly animals.\n All of them would make a great pet`);

// Exercise 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
function make_shirt(size:string, message:string) {
   console.log(`You have ordered ${size} sized shirt with this message '${message}'`);
}
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
make_shirt('Extra Large','I am fat')

// Exercise 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt. 
function makeshirt(size: string='Large', message: string ='I love Typescript') {
    console.log(`You have ordered ${size} sized shirt with this message '${message}'`);
 }
makeshirt()
// medium shirt with the default message
makeshirt('medium',)
// shirt of any size with a different message.
makeshirt('small','I love myself')

// Exercise 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. 
function describe_city(city: string, country= 'Pakistan'){
    console.log(`${city} is in ${country}`)
}
describe_city('Karachi')
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
describe_city('Lahore')
describe_city('Peshawar')
describe_city('Mumbai')

// Exercise 39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city: string, country: string){
    console.log(`"${city}","${country}"`);
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
city_country('Lahore','Pakistan')
city_country('Hyderabad','Pakistan')
city_country('Riyadh','KSA')
city_country('Mumbai','India')

// Exercise 40 Album: Write a function called make_album() that builds a Object describing a music album. //  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistname: string, albumtitle: string, tracks?: number){
    let album: { [key: string]: any } = {};
    album ['artist'] = artistname;
    album ['title']= albumtitle;
    if (tracks!== undefined){
        album['tracks']= tracks;
        }
    return album
}
const album1 = make_album("Weeknd", "After Hours");
const album2 = make_album("Taylor Swift", "1989");
const album3 = make_album("Ed Sheeran", "÷", 12);
console.log(album1);
console.log(album2);
console.log(album3);

// Exercise 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magicianNames: string[] = ['Harry Potter', 'Rudolph', 'Ozil', 'KDB']
function show_magicians(magicians: string[]){
    for (const items of magicians){
        console.log(items)
    }
}
show_magicians(magicianNames)

// Exercise 42 Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(message:string){
    let message= 'Great'
    }
}