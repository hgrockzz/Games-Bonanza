const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
//So the underscore is basically here to completely differentiate between the
// normal variables and the DOM variables. DOM variables are there in the 
// line number 3 and 4.
// The DOM (Document Object Model) Element Variable is a powerful Variable
// in Google Tag Manager to scrape content directly from your Website HTML
// markup.(Basically here it helps to be identified as the span tag.)
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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

function win(){
    console.log("WIN")
}

function lose(){
    console.log("LOST")
}

function draw(){
    console.log("DRAW")
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
            win();
            break;
        // Now where user loses
        case "rp":
        case "ps":
        case "sr":
            // console.log("USER LOSES");
            lose();
            break;
        case "rr":
        case "pr":
        case "ss":
            // console.log("DRAW");
            draw();
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function(){
        // console.log("hey you clicked on rock"); it'll show in the console that "You've clicked on rock" after inspecting and then console.
        game("r"); // If user clicks on rock_div. I'm gonna provide an argument of rock
    })

    paper_div.addEventListener('click', function(){
        // console.log("hey you clicked on paper");
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        // console.log("hey you clicked on scissors");
        game("s");
    })
}
main();