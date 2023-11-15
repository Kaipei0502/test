let data = [30, 40, 100, 61];
let total = 0, count = 0;

data.forEach(function(item, index, array){
    console.log(item);//當前位置的值
    console.log(index);//當前位置
    console.log(array);//陣列
})

//加總
data.forEach(function(item,index){
    total += item;
})
console.log(total);

//偶數個數
data.forEach(function(item,index){
    if(item % 2 == 0){
        count++;
    }
})
console.log(count);

//
data = [
    {
        name:"Tom",
        sex:"male"
    },
    {
        name:"Mary",
        sex:"female"
    },
    {
        name:"Cathy",
        sex:"female"
    },
    {
        name:"Jane",
        sex:"female"
    },
]
data.forEach(function(item, index, array){
    console.log(item);//傳回物件資料
    console.log(item.name);
})

let femaleTotal = 0, maleTotal = 0;

data.forEach(function(item, index, array){
    if(item.sex == "female"){
        femaleTotal++;
    }else{
        maleTotal++;
    }
})
console.log(femaleTotal, maleTotal);
//上述可利用物件寫成
let people = {
    male:0,
    female:0
};
data.forEach(function(item, index, array){
    if(item.sex == "female"){
        people.female++;
    }else{
        people.male++;
    }
})
console.log(people.female, people.male);