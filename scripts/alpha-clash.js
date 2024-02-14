// function play(){
//     //step-1: hide the home screen to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

// //step-2: show the play Ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet : ', alphabet);

    //set ramdomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('curren-alphabet')
    currentAlphabetElement.innerText= alphabet;

    //set the background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
