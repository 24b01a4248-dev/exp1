var userName = "Alice";
var userAge = 25;
var isMember = true;
function displayUserProfile(name, age, active) {
    console.log("User: " + name);
    console.log("Age: " + age);
    console.log("Status: " + (active ? "Active" : "Inactive"));
}
displayUserProfile(userName, userAge, isMember);
var flexibleValue = 10;
flexibleValue = "Now I am a string";
flexibleValue = true;
var mysteryValue = "Hello Vishnu";
if (typeof mysteryValue === "string") {
    console.log(mysteryValue.length);
}
function logNotification(message) {
    console.log(message);
}
logNotification("Environment Setup Complete!");
var movieTitle = "Baahubali: The Beginning";
var releaseYear = 2015;
var isBlockbuster = true;
function getMovieStatus(title, year) {
    return title + " was a massive hit released in " + year + ".";
}
var leadActors = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
var summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(leadActors.join(", "));
console.log(isBlockbuster);
