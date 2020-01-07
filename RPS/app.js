var scores, turnScore, activePlayer, gamePlaying, shooter1, shooter2, shoot1, shoot2;

var shooter = Math.floor(Math.random()*3)+1;

start();

console.log(shooter);





function start() {
    scores = [0,0];
    document.querySelector('#score-0').textContent = scores[0];
    document.querySelector('#score-1').textContent = scores[1];
    var shoot1 = false;
    var shoot2 = false;

}

function checkScore(){
    if(shooter1==1 && shooter2==2){
        scores[0] = scores[0] + 1;
        document.querySelector('#score-0').textContent = scores[0];
        shoot1 = false;
        shoot2 = false;
    }else if (shooter1==2 && shooter2==2){
        shoot1 = false;
        shoot2 = false;
    }else if (shooter1==1 && shooter2==1){
        shoot1 = false;
        shoot2 = false;
    }else if (shooter1==3 && shooter2==3){
        shoot1 = false;
        shoot2 = false;
    }else if (shooter1==2&&shooter2==3){
        scores[0] = scores[0] + 1;
        document.querySelector('#score-0').textContent = scores[0];
        shoot1 = false;
        shoot2 = false;
    }else if(shooter1==1 && shooter2==3){
        scores[1] = scores[1] + 1;
        document.querySelector('#score-1').textContent = scores[1];
        shoot1 = false;
        shoot2 = false;
    }else if(shooter1==2 && shooter2==1){
        scores[1] = scores[1] + 1;
        document.querySelector('#score-1').textContent = scores[1]; 
        shoot1 = false;
        shoot2 = false;
    }else if (shooter1 ==3 && shooter2 == 1){
        scores[0] = scores[0] + 1;
        document.querySelector('#score-0').textContent = scores[0];
        shoot1 = false;
        shoot2 = false;
    }else if(shooter1 == 3 && shooter2 == 2){
        scores[1] = scores[1] + 1;
        document.querySelector('#score-1').textContent = scores[1]; 
        shoot1 = false;
        shoot2 = false; 
    }
    
}

function keepGoing(){
    if (shoot1 == true && shoot2 == true){
        checkScore();
    }
}

document.querySelector('.btn-one').addEventListener('click', function(){

    shooter1 = Math.floor(Math.random()*3)+1;
    var firstDOM = document.querySelector('.first');   
    firstDOM.src = 'go-' + shooter1 +'.jpeg'; 
    document.querySelector('.player-one-name').classList.add('current');
    document.querySelector('.player-two-name').classList.remove('current');
    shoot1 = true;
    keepGoing(); 
    
});

document.querySelector('.btn-two').addEventListener('click', function(){
    shooter2 = Math.floor(Math.random()*3)+1;
    var secondDOM = document.querySelector('.second');
    secondDOM.src = 'go-' + shooter2 +'.jpeg';
    document.querySelector('.player-one-name').classList.remove('current');
    document.querySelector('.player-two-name').classList.add('current');
    shoot2 = true;
    keepGoing();
    
});