let scorePC = 0, scorePlayer = 0;

function computerChoice() {
    const nrRandom = Math.floor(Math.random() * 3);

    if(nrRandom == 0) return "✊ Rock"
    if(nrRandom == 1) return "✋ Paper"
    if(nrRandom == 2) return "✌️ Scissors"
    }

function inputPlayer() {
    const alegere = prompt("Choose Rock Paper or Scissors (written with small letters only) :");
    let nrAlegere;
    if(alegere=="rock") nrAlegere=0
    if(alegere=="paper") nrAlegere=1
    if(alegere=="scissors") nrAlegere=2
    return nrAlegere;
}

function joc() {
    let decComputer = computerChoice();
    let inPlay = inputPlayer();

    console.log("The computer chose : " + decComputer);

    if(inPlay==0){
        if(decComputer== "✊ Rock"){
            console.log("Tie");
        } 
        else if(decComputer== "✌️ Scissors"){
            console.log("You Won")
            scorePlayer++
        }
             
        else if (decComputer=="✋ Paper"){
            console.log("You lost")
            scorePC++;
        } 
    }
    else if(inPlay==1) {
        if(decComputer== "✋ Paper"){
            console.log("Tie");
        } 
        else if(decComputer== "✊ Rock"){
            console.log("You Won")
            scorePlayer++;
        } 
        else if(decComputer=="✌️ Scissors"){
            console.log("You lost")
            scorePC++;
        } 
    }
    else {
        if(decComputer== "✌️ Scissors") console.log("Tie");
        else if(decComputer== "✋ Paper") {
            console.log("You Won")
            scorePlayer++;
        } 
        else if(decComputer=="✊ Rock"){
            console.log("You lost")
            scorePC++
        } 
    }

    console.log("Your score: " + scorePlayer);
    console.log("Computer score: " + scorePC);
}


for(i=1;i<=5;i++){
    joc();
}