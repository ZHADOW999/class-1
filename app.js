// const dropdown1 = document.querySelector('.dropdown-1')
// function myFunction(){
//     dropdown1.classList.toggle('show')
    
// }

// const dropdown2 = document.querySelector('.dropdown-2')
// function myFunction2(){
//     dropdown2.classList.toggle('show')
    
// }

const dropDownBtns = document.querySelectorAll('.dropDownBtn');
// //const dropDown = document.querySelectorAll('.dropdown')


for (const dropDownBtn of dropDownBtns){
    dropDownBtn.addEventListener('click', function(){
        const dropDown = this.querySelector('.dropdown');
        dropDown.classList.toggle('show')
    })
}
