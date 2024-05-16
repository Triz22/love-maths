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


function checkAnswer (){}
function runGame (){}
function calculateCorrectAnswer (){}
function icnrementScore (){}
function icnrementWrongAnswer (){}
function displayAdditionQuestion (){}
function displaySubtractQuestion (){}
function displayMultiplyQuestion (){}
