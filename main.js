// 一口氣印出多列表

const list = document.querySelector("#list"); //需要是 ul 標籤

// 建好的 arr
let arr = [];
for(let i = 1; i<10; i++){
    arr.push(i);
}

let contant = "";
arr.forEach(function(i){
    contant += `<li>${i}</li>`
})

list.innerHTML = contant;


