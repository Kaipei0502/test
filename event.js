const btn = document.querySelector(".btn");
const title = document.querySelector("h1");
let count = 0;

//監聽事件
// btn.addEventListener("click",function(e){
//     title.textContent ="按鈕被點擊了!";
// })

btn.addEventListener("click",function(e){
    count += 1;
    title.textContent = count;
    console.log(e.target);//目前元素位置
})

//取消HTML標籤默認行為
const link = document.querySelector("a");
link.addEventListener("click",function(e){
    e.preventDefault();
    console.log("被點擊到了");
    console.log(e.target.nodeName);//目前選取到的標籤
})