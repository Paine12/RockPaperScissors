const container = document.querySelector('.container')

const chosen = document.querySelector('.chosen')
const select = document.querySelectorAll('.select')

const result = document.querySelector('.result')
const yourText = document.querySelector('.yourScore')
const compText = document.querySelector('.compScore')

var val = 0;
var compScore = 0;
var yourScore = 0;

function computerChoice(){
    val= Math.floor(Math.random() * 3)
    console.log(val);
    if(val==0){
        container.setAttribute('style' , 'background-image: url(resources/rock.jpg); ')
    } else if(val==1){
        container.setAttribute('style' , 'background-image: url(resources/paper.avif);')
    }
    else container.setAttribute('style' , 'background-image: url(resources/Scissors.png);')

}

function chooseWinner(val, choice){
    if(choice==0) {
        if(val==0)
        {
            result.textContent="Result: Tie"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
        else if(val==2)
        {
            yourScore++
            result.textContent="Result: Win"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
        else 
        {
            compScore++
            result.textContent="Result: Lose"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
    }
    else if(choice==1) {
        if(val==1){
            result.textContent="Result: Tie"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
        else if(val==0)
        {
            yourScore++;
            result.textContent="Result: Win"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
        else 
        {
            compScore++
            result.textContent="Result: Lose"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }

    }else if(choice==2) {
        if(val==2){
            result.textContent="Result: Tie"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
        else if(val==1){
        yourScore++
        result.textContent="Result: Win"
        yourText.textContent = 'Your Score: ' + yourScore;
        compText.textContent = 'Computer Score: ' + compScore;
        }
        else {
            compScore++
            result.textContent="Result: Lose"
            yourText.textContent = 'Your Score: ' + yourScore;
            compText.textContent = 'Computer Score: ' + compScore;
        }
    }
}

function playing(choice) {
    computerChoice();
    if(choice==0){
        chosen.setAttribute('style' , 'background-image: url(resources/rock.jpg); ')
    } else if(choice==1){
        chosen.setAttribute('style' , 'background-image: url(resources/paper.avif);')
    }
    else chosen.setAttribute('style' , 'background-image: url(resources/Scissors.png);')

    chooseWinner(val, choice)
}


select.forEach((item) => item.addEventListener("click" ,() => {
    playing(item.id);
    console.log(item.id)
})
)
