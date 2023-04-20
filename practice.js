const input = document.querySelector("#input");
const start = document.querySelector("#btn");
const list = document.querySelector("#list");


start.addEventListener('click', function(){
    // reset
    let num;
    let contant = "";
    let arr = [];

    // 做事
    num = +input.value;
    let i;
    let j;
    // console.log(num)
for( i = num; i > 1; i--){
    for( j = 2; j < i; j++){
        if( i % j === 0){
            break;
        }
    }
        if(  j === i){
            console.log(j)
            arr.push(j);
        }
    
}

arr.forEach(function(i){
    contant += `<span>${i} </span>`;
});

list.innerHTML = contant;
})


