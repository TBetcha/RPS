var scores, turnScore, activePlayer, gamePlaying;

var shooter = Math.floor(Math.random()*3)+1;

console.log(shooter);

document.querySelector('.btn-one').addEventListener('click', function(){

    var shooter = Math.floor(Math.random()*3)+1;
    var firstDOM = document.querySelector('.first');
    
    firstDOM.src = 'go-' + shooter +'.jpeg';




});