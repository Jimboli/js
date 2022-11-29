/*Encoder:
Gonna be pretty simple, just reverses letters
    a: z
    b: y
    c: x
    ...
    x: c
    y: b
    z: a
    
For special characters:
    : = ]
    ; = [  
    { = !
    } = -
    ( = +
    ) = ,
    . = .  
*/
let ab = true;
while (ab == true) {
    browser();


    setTimeout(() => {
        let b = prompt("Do you want to try again? (y/n)");
    }, 3000);

    if (b.toLowerCase() == "y") {
        console.log(b);
    } else {
        ab = false;
        console.log(b);
    }
}

function browser() {
    let question = prompt("Enter your statement to encode: ");
    encoder(question);

    let question2 = prompt("Enter your statement to decode: ");
    decoder(question2);
}

function encoder(statement) {
    let secretMessage = "";

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const specialCharacters = [":", ";", "{", "}", "(", ")", ".", ",", "+", "-", "!", "[", "]"];

    //Goes through every character in statement
    for (const item of statement) {
        //IF character is a letter, else it follow the other pattern
        if (letters.includes(item)) {
            let indexNumber = letters.indexOf(item);
            let oppositeIndex = letters.length - (indexNumber + 1);

            let secretLetter = letters[oppositeIndex];
            secretMessage += secretLetter;
        } else if (specialCharacters.includes(item)) {
            let indexNumber = specialCharacters.indexOf(item);
            let oppositeIndex = specialCharacters.length - (indexNumber + 1);

            let secretCharacter = specialCharacters[oppositeIndex];
            secretMessage += secretCharacter;
        } else {
            alert("You have entered a character we don't recognize, please try again later.");
            throw new Error("If you really want to encode and decode this message, contact Ishan.");
        }
    }
    console.log("Encoded secret message: " + secretMessage);
}

function decoder(decode) {
    let secretMessage = "";

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const specialCharacters = [":", ";", "{", "}", "(", ")", ".", ",", "+", "-", "!", "[", "]"];

    for (const item of decode) {
        //IF character is a letter, else it follow the other pattern
        if (letters.includes(item)) {
            let indexNumber = letters.indexOf(item);
            let oppositeIndex = letters.length - (indexNumber + 1);

            let secretLetter = letters[oppositeIndex];
            secretMessage += secretLetter;
        } else if (specialCharacters.includes(item)) {
            let indexNumber = specialCharacters.indexOf(item);
            let oppositeIndex = specialCharacters.length - (indexNumber + 1);

            let secretCharacter = specialCharacters[oppositeIndex];
            secretMessage += secretCharacter;
        } else {
            alert("You have entered a character we don't recognize, please try again later.");
            throw new Error("If you really want to encode and decode this message, contact Ishan.");
        }
    }
    console.log("Decoded secret message: " + secretMessage);
}
