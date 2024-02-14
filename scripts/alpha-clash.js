// function play(){
//     //step-1: hide the home screen to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

// //step-2: show the play Ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }





function handleKeyBoardButtonPress(event){
    const  playerPressed = event.key;
    console.log("player Pressed", playerPressed);

    //stop the game if passes 'Esc'
    if(playerPressed=== 'Escape'){
        gameover();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //cheak right or wrong key press
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
        // console.log('You have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore)
        const updatedScore = currentScore+ 1 ;
        setTextElementValueById('current-score', updatedScore);
        


        //--------------------------//
       

        // //update score:
        // //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText= currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText) 
        // console.log(currentScoreElement);
        // //2. increase the score by 1
        // const newScore = currentScore+ 1;
        // //shoe the updated score
        // currentScoreElement.innerText = newScore

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('You missed. you lost a life ');

        const CurrentLife = getTextElementValueById('current-life');
        const updatedLife = CurrentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameover()
        }

        //----------------------------//
        // //step:1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // currentLife = parseFloat(currentLifeText);
        // //step-2: reduce the life count
        // const newLife = currentLife- 1 ;

        // //step-3: display the updated life count
        // currentLifeElement.innerText= newLife;
    }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyBoardButtonPress)


function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet : ', alphabet);

    //set ramdomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText= alphabet;

    //set the background color
    setBackgroundColorById(alphabet);
}

function play(){
    //hide eveything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    continueGame();

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}



function gameover(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    //update final score
    //1. get the final score 
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet  highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}

