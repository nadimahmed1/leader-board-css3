// challenge - 1..color change ==== solving done
const topPlayer = document.getElementById('top-player');
topPlayer.style.color = 'rgb(255, 0, 0)';

// task-2 === solving done
const keluar = document.getElementById('keluar');
keluar.style.backgroundColor = 'rgb(60, 179, 113)';

// task-3 ==== solving done
function li() {
    const li = document.createElement('li');
    li.innerText = 'Nadim';
    const ul = document.getElementById('ul');
    const playerAdd = ul.appendChild(li);
}

document.getElementById('add-button').addEventListener('click', function () {
    const newPlayer = li();


})
// task-4 50% and task-5 50% solved
function getInputValue() {
    const inputNumbers = document.getElementById('input-numbers');
    const numbers = inputNumbers.value;
    const priviousNumbers = parseInt(numbers) + 1;
    inputNumbers.value = priviousNumbers;



}
// 
document.getElementById('submit-button').addEventListener('click', function () {
    const Newnumbers = getInputValue();
})





