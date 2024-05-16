// wait for DOM to load//
// get button elements & add event listeners //

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons){
        button.addEventListener('click',function(){
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit')
            } else {
                let gameType = this.getAttribute('data-type')
                alert(`You have clicked ${gameType}`)
            }
        })
    }
});

/**
 * the main game 'loop', called when the script is first loaded and after the user's answer has been processed
 */
function runGame (){

    //creating two random numbers 1-25

    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;
}

function checkAnswer (){}

function calculateCorrectAnswer (){}
function icnrementScore (){}
function icnrementWrongAnswer (){}
function displayAdditionQuestion (){}
function displaySubtractQuestion (){}
function displayMultiplyQuestion (){}
