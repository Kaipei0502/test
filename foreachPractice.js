let data = [
    {
        Charge:"免費",
        name:"高雄充電站"
    },
    {
        Charge:"投幣式",
        name:"台中充電站"
    },
    {
        Charge:"投幣式",
        name:"台北充電站"
    },
    {
        Charge:"投幣式",
        name:"台南充電站"
    },
]

const list = document.querySelector(".list");

//預設載入
function init(){
    let str = "";
    data.forEach(function(item,index){
        str += `<li>${item.name}，${item.Charge}</li>`;
    })
    list.innerHTML = str;
}
init();

//篩選器
const stationFilter = document.querySelector(".filter");
console.log(stationFilter);
stationFilter.addEventListener("click",function(e){
    if(e.target.value == undefined){
        return ;
    }
    let str = "";
    data.forEach(function(item,index){
        if(e.target.value == "全部"){
            str += `<li>${item.name}，${item.Charge}</li>`;
        }else if(e.target.value == item.Charge){
            str += `<li>${item.name}，${item.Charge}</li>`;
        }
    })
    list.innerHTML = str;
})

//新增
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){
    let obj ={};
    obj.Charge = stationCharge.value;
    obj.name = stationName.value;
    data.push(obj);
    init();
    stationCharge.value = "免費";
    stationName.value = "";
})