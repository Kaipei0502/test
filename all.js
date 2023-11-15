let a = 1;
const c = 6; //不變常數
console.log(a);

let myEmail = "  a@gamil.com";
console.log(myEmail.trim());

let myName = "Tom";
let age = 18;
//let content = "您好我是"+ name +"我今年" + age +"歲";
let content = `您好我是${myName}，我今年${age}歲`;
console.log(content);


let b = "1";
//b = parseInt(b); //字串轉數字(表單取出都是字串)

console.log(typeof (a+b));

console.log(a==b); //true 兩個==協助轉型
console.log(a===b);//三個等於 會比較也會看型別

let color = ["blue","red","black"];
color.push("pink"); //在陣列最後新增資料
color.unshift("yellow");//在陣列最前面新增資料
color.pop();//刪除陣列最後一筆資料
color.shift();//刪除陣列第一筆資料
color.splice(1,1);//第一個參數:起始位置 ; 第二個參數:往後刪除幾筆(包含起始位置)

let home ={
    //屬性 : "值",
    motherName : "Mary",
    fatherName : "Tom",
    dog : 3,
};
console.log(home.dog);//讀取物件屬性(叫常用)
console.log(home['motherName']);//讀取物件屬性
delete home.dog;
console.log(home['001']);//讀取物件屬性(JSON)

//函式寫法
function morningAction(){
    console.log("起床");
}

//選取網頁上的元素 'CSS 選擇器'
const el = document.querySelector('h1');
el.textContent = "Hello world!";

const main = document.querySelector('.main');
main.innerHTML = `<h1 class = "header">標籤1</h1>` //會把原本class裡的東西全部清除

const list = document.querySelector(".list");//list沒加點會變html標籤
let link = "https://www.google.com.tw";
list.innerHTML = `<li><a href=${link}>12連結</a></li>`;

//textContent  v.s  innerHTML
//單純修改文字       改標籤

const myLink = document.querySelector("a");//只會抓第一個
myLink.setAttribute("href","https://www.nuk.edu.tw");//("要改的屬性","改成什麼")
myLink.setAttribute("class","red");

const myLinks = document.querySelectorAll("a");
myLinks[0].setAttribute("href","https://www.nuk.edu.tw");
myLinks[0].setAttribute("class","red");
myLinks[1].setAttribute("href","https://www.google.com.tw");
myLinks[1].setAttribute("class","red");

//querySelector    v.s  querySelectorAll
//只會抓第一個節點        全部節點都會抓(回傳陣列)

//取值
console.log(myLink.getAttribute("href"));
console.log(myLink.innerHTML);//抓a標籤裡面的
console.log(myLink.textContent);//抓文字節點

//表單取值(一定是字串)
const txt = document.querySelector(".txt");
console.log(txt.value);
const city = document.querySelector(".city");
console.log(city.value);