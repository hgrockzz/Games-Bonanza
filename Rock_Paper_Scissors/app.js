let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
//So the underscore is basically here to completely differentiate between the
// normal variables and the DOM variables. DOM variables are there in the 
// line number 3 and 4.
// The DOM (Document Object Model) Element Variable is a powerful Variable
// in Google Tag Manager to scrape content directly from your Website HTML
// markup.(Basically here it helps to be identified as the span tag.)
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// So now we have cashed the DOM. Meaning of Cashing the DOM is that
// Cashing in general means storing something for future use. So here 
// we are storing them in variables so that we can use them in future.
// And also it helps in readability like we don't want to write the whole 
// code again and again like document.queryselector or document.getelementbyID. 
// for that and instead we stored it in a varible and
// then whenever we need that in usage we'll simply call that variable.


// Now what happens when we click on those individual buttons that are 
// representing rock paper and scissors.
// So, when we click on rock what we need to do is take that value (which is rock)
// and then compare it against the computer's choice, which is just going to 
// be a random choice between those three options. And then we compare those
// two, and then check who wins and then display the result back on the DOM

// Here it's for the computer's choice
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    // console.log(Math.floor(Math.random()*3));
    //This *3 was because usually the random()
    // function gives the value b/w 0 and 1 and we actually want it between
    // 0 and 3 so that 0,1,2 represents r,p,s respectively. That's why * 3 .
    // math.floor() will give the round off value of the decimals.
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
// The innerHTML property allows you to manipulate the HTML content of an element.
function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    // console.log("WIN")
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // console.log(user)
    // console.log(computer)
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! "; // CS-5 basically
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}</br> You win!`; // CS-6 functions
    // Addition of class green glow on whichever user clicked.
    userChoice_div.classList.add('green-glow'); 
    // setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300); 
    // Above line can also be written like
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);   
}
// setTimeout takes two arguments 1st is the function and 2nd is the time in milliseconds of how long it should go.
// setTimeout(function() {console.log("hello")}, 3000);//3000 milliseconds

function lose(userChoice, computerChoice){
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    // console.log("LOST")
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}</br> You lost!`;
    userChoice_div.classList.add('red-glow'); 
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);   
}

function draw(userChoice, computerChoice){
    // console.log("DRAW")
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}</br> It's a draw!`;
    userChoice_div.classList.add('gray-glow'); 
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}
// console.log(getComputerChoice());
// And now we'll be getting the value r,p,s instead of 0,1,2 Which'll be random.


// This was for the user's choice.
function game(userChoice){
    // console.log("ok  "+ userChoice);
    const computerChoice = getComputerChoice();
    // Using Switch cases here.
    switch(userChoice + computerChoice){
        // 1st considering cases where USER will win
        case "rs": //1st char in the string represent the user's choice and the 2nd one represents the computer choice. Which is rock for user and paper for computer.
        case "pr": //Similarly paper for user and rock for computer.
        case "sp":
            // console.log("USER WINS.");
            win(userChoice, computerChoice);
            break;
        // Now where user loses
        case "rp":
        case "ps":
        case "sr":
            // console.log("USER LOSES");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pr":
        case "ss":
            // console.log("DRAW");
            draw(userChoice, computerChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', () => game("r"))
        // console.log("hey you clicked on rock"); it'll show in the console that "You've clicked on rock" after inspecting and then console.
        // game("r"); // If user clicks on rock_div. I'm gonna provide an argument of rock
    

    paper_div.addEventListener('click', () => game("p"))
        // console.log("hey you clicked on paper");
        // game("p");
            

    scissors_div.addEventListener('click', () => game("s"))
        // console.log("hey you clicked on scissors");
        // game("s");
    
}
main();