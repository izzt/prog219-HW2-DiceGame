/**
 * Created by bcuser on 4/4/19.
 */

function buttonClicked()
{
console.log("buttonClicked");
console.log(rollDice());

var dice = [];
dice[0] = rollDice();
dice[1] = rollDice();

console.log (dice);

document.getElementById("image1").src = "./images/dice-" + dice[0] +".jpg";
document.getElementById("image2").src = "./images/dice-" + dice[1] +".jpg";

var balance = document.getElementById("balance").innerHTML;
var turnCount = document.getElementById("turnCount").innerHTML;

if (youWin(dice[0],dice[1]))
{
    console.log("You Win");
    balance++;   
    document.getElementById("status").innerHTML ="You Win" ;
}
else 
{
    console.log("You lose");
    balance--;
    document.getElementById("status").innerHTML ="You Lose";

    if (balance ===0)
    {
        document.getElementById("status").innerHTML ="GAME OVER!";
        document.getElementById("ButtonBet").style.display ="none";
    }

}

document.getElementById("balance").innerHTML = balance;
turnCount++;
document.getElementById("turnCount").innerHTML=turnCount;

}

function rollDice()
{
   return Math.floor(Math.random()*6+1);

}

function youWin(dice1, dice2)
{
    if( dice1 === dice2)
    {
        return true;
    }

    if (dice1+dice2===7)
    {
        return true;
    }

    if (dice1+dice2===11)
    { 
        return true;
    
    }

    return false;
}


