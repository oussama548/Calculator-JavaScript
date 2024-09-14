let numbers=document.getElementsByClassName('num');// array of numbers
let screen=document.querySelector('.screen');
let clear=document.querySelector('.del_all');
let Delete=document.querySelector('.del');
let result=document.querySelector('.equal');

//displaying the numbers on the screen
let numbers_arr=Array.from(numbers);
for(let i=0;i<numbers_arr.length;i++){
     numbers_arr[i].addEventListener('click',function(){
        screen.textContent+=this.textContent;
     })
}

//clearing the screen
clear.addEventListener('click',function(){
    screen.textContent='';
})

// removing the last added number (delete)

Delete.addEventListener('click',function(){
    let content=screen.textContent;
    let Content=content.slice(0,-1);
    screen.textContent= Content;
})

//displaying the result(equal)
result.addEventListener('click',function(){
    let final=eval(screen.textContent);
    screen.textContent=final;
    
})

    




