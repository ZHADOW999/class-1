// function myFunction(){
//     document.querySelector(".dropdown-1").classList.toggle("show");
// }
//  function myFunction2(){
//     document.querySelector(".dropdown-2").classList.toggle("show");
//  }

const dropdownBtns = document.querySelectorAll(".dropDownBtn")
for (const dropdownBtn of dropdownBtns) {
    dropdownBtn.addEventListener('click', function() {
        const dropdown = this.querySelector('.dropdown');
        dropdown.classList.toggle('show');
    });
}


//explanation section
let btns= document.querySelectorAll('button[id]');

for (const btn of btns){
    btn.onclick = showExplanation;
}

function showExplanation(){
    let explanation = getExplanation(this.id)
    let result = document.getElementById('results')
    result.textContent = explanation;
}

function getExplanation(item){
    const explanation ={
        hi:'hi',
        hello:'hello',
        whatsUp:'whats up'
    };
    return explanation[item] ?? 'no explanation';
}


const questiionTitle= document.querySelectorAll('.question-title')
const answer= document.querySelectorAll('.answer')

for (const title of questiionTitle){
    title.addEventListener('click',function(){
        const answer = this.nextElementSibling;
        answer.classList.toggle('show1');
    })
}

//tab section
function openTab(event,tabName){
    //hide all the tab contents
    const tabContents = document.querySelectorAll('.tab-content')
    tabContents.forEach(tab => tab.style.display ='none')
    
    //remove the active class from the buttons
    const tabButtons =document.querySelectorAll('.tab-button')
    tabButtons.forEach(button =>button.classList.remove('active'))

    //show the current tab content and add active class to the button
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active')
} 

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click();
});



//modal section
document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}