let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "" ;
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0 , string.length-1)
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

function changemode(){
    let mybody = document.body;
    // let sun = document.getElementsByTagName('button')[0];
    mybody.classList.toggle('page')
}
// let icon = document.getElementsByClassName('bi bi-moon-stars')
// let changeicon = function(icon){
//     icon.classlist.toggle('bi bi-brightness-high')
// }
// function image(){
//     let image=document.getElementById('image1')
//     if(image.src.match(moon-stars-fill.svg)){
//         image.src='sun.svg'
//     }
//     else{
//         image.src='moon-stars-fill.svg'
//     }
// }


