// var h1=document.querySelector('h1')
// h1.innerHTML='rishay'

// var btn=document.querySelector('button')
// btn.style.backgroundColor='purple'
// btn.style.fontSize="10rem"

// document.querySelector('h1').classList.add('huge')

var images=['https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png','https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png','https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png','https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png','https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png','https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png']

var heading=document.querySelector('.heading')

var imgone=document.querySelector('.diceone img')

var imgtwo=document.querySelector('.dicetwo img')

var choiceone=Math.floor(Math.random()*6);
var choicetwo=Math.floor(Math.random()*6);

if(choiceone>choicetwo)
{
    heading.classList.add('big')
    heading.textContent='Player 1 Won'
}

else if(choicetwo>choiceone)
{
    heading.classList.add('big')
    heading.innerHTML='Player 2 Won'
}

else
{
    heading.classList.add('big')
    heading.innerHTML='Match Drawn'
}
imgone.src=images[choiceone]
imgtwo.src=images[choicetwo]

