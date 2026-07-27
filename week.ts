let userName: string = "Alice";
let userAge: number = 25;
let isMember: boolean = true;

function displayUserProfile(name: string, age: number, active: boolean): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}

displayUserProfile(userName, userAge, isMember);

let flexibleValue: any = 10;
flexibleValue = "Now I am a string";
flexibleValue = true;

let mysteryValue: unknown = "Hello Vishnu";

if (typeof mysteryValue === "string") {
    console.log(mysteryValue.length);
}

function logNotification(message: string): void {
    console.log(message);
}

logNotification("Environment Setup Complete!");

let movieTitle: string = "Baahubali: The Beginning";
let releaseYear: number = 2015;
let isBlockbuster: boolean = true;

function getMovieStatus(title: string, year: number): string {
    return `${title} was a massive hit released in ${year}.`;
}

let leadActors: string[] = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];

let summary: string = getMovieStatus(movieTitle, releaseYear);

console.log(summary);
console.log(leadActors.join(", "));
console.log(isBlockbuster);