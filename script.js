function playGame(){
    function playMatch(){
        const options= document.querySelectorAll('.options button');
        const player= document.querySelector('.player');
        const computer= document.querySelector('.computer');


        // for computer
        const computerOptions=['rock','paper','scissors'];
        options.forEach(option=>{
            option.addEventListener('click',function(){
                const randomNumber= Math.floor(Math.random()*3);
                const computerChoice= computerOptions[randomNumber];

                getWinner(option.textContent, computerChoice);

                computer.src=`images/${computerChoice}.png`;
                player.src=`images/${this.textContent}.png`;
            });
        });

    };
    // playMatch();

    function getWinner(playerChoice,computerChoice){
        const winner= document.querySelector('.winner');

        if(playerChoice === computerChoice){
            return winner.textContent="It's a Tie";
        }
        

        // for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                return winner.textContent="Player Win!!";
            }
            else{
                return winner.textContent="Computer Win!!";
            }
        }
        
        // for paper
        if(playerChoice === "paper" ){
            if(computerChoice === "rock" ){
                return winner.textContent="Player Win!!";
            }
            else{
                return winner.textContent="Computer Win!!";
            }
        }

        // for scissors
        if(playerChoice === "scissors" ){
            if(computerChoice === "paper" ){
                return winner.textContent="Player Win!!";
            }
            else{
                return winner.textContent="Computer Win!!";
            }
        }
    }
    playMatch();
}
playGame();

