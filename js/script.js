// const N = 7;
// alert("Варіант: " +  N + "\nКравченко Поліна");

const cardsDeck={
    card:['heart_6','heart_7','heart_8','heart_9','heart_10','heart_J','heart_Q','heart_K','heart_A', 'spades_6', 'spades_7','spades_8','spades_9','spades_10','spades_J','spades_Q','spades_K','spades_A', 'diamonds_6', 'diamonds_7','diamonds_8','diamonds_9','diamonds_10','diamonds_J','diamonds_Q','diamonds_K','diamonds_A', 'clubs_6','clubs_7','clubs_8','clubs_9','clubs_10','clubs_J','clubs_Q','clubs_K','clubs_A'],
    points:[6,7,8,9,10,2,3,4,11, 6,7,8,9,10,2,3,4,11, 6,7,8,9,10,2,3,4,11, 6,7,8,9,10,2,3,4,11]
}

let usrname = prompt("Уведіть ім'я гравця: ")
if (usrname != '')
{
    document.querySelector('.username').textContent = usrname;
}
else{
    usrname=prompt("Ви забули ввести ім'я гравця!");
    document.querySelector('.username').textContent = usrname;
}


const button=document.querySelector('.button');
const attemptsText=document.querySelector('.attempts');
const usercard=document.querySelector('.usercard').querySelector('img');
const compcard=document.querySelector('.compcard').querySelector('img');
const points=document.querySelectorAll('.count');
const result=document.querySelector('.resultstring');
const playagain=document.querySelector('.playagain');

let attempts=0;
let usercount=0;
let compcount=0;

button.addEventListener('click', () => {

    const values=[Math.floor(Math.random()*36),Math.floor(Math.random()*36)];
    attempts++;
    attemptsText.textContent=`Спроби ${attempts} з 3`;
    usercount+=cardsDeck.points[values[0]];
    compcount+=cardsDeck.points[values[1]];
    points[0].textContent=usercount;
    points[1].textContent=compcount;
    usercard.setAttribute('src',`img/${cardsDeck.card[values[0]]}.png`)
    compcard.setAttribute('src',`img/${cardsDeck.card[values[1]]}.png`)

    if(attempts==3){
        button.style='display:none';
        if(usercount>compcount){
            result.textContent = "Вітаємо! Гравець " + usrname + " переміг комп'ютер!";
            result.style = "color: rgba(15, 165, 30, 0.916)";
        }
        if(usercount<compcount){
            result.textContent = "Гравець " + usrname + " програв комп'ютеру! Спробуйте ще раз!";
            result.style = "color: rgba(249, 31, 31, 0.922)";
        }
        if(usercount==compcount){
            result.textContent ="Гравець " + usrname + " та комп'ютер мають однаковий рахунок! Спробуйте ще раз!";
            result.style ="color: rgba(85, 23, 230, 0.84)";
        }
    }
});
