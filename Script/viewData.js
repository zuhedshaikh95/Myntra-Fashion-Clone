let arr = JSON.parse(localStorage.getItem("mono")) || [];
window.document.title="Buy "+arr[0].brand+" "+arr[0].name;
let bagArr = JSON.parse(localStorage.getItem("bag")) || [];
let wishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
let bagCount = document.querySelector("#bag-count");
bagCount.innerText=bagArr.length;


document.querySelector("#brandName").innerText=arr[0].brand;
document.querySelector("#prodName").innerText=arr[0].name;
document.querySelector("#prodPrice").innerText="Rs."+arr[0].price;
document.querySelector("#strikedPrice").innerText="Rs."+arr[0].strikedoffPrice;
document.querySelector("#disc").innerText=`(${arr[0].discount}% OFF)`;
document.querySelector("#code").innerText=arr[0].code;
document.querySelector("#seller").innerText=arr[0].seller;

let imgBox = document.querySelector(".img-grid");
let imgArr = arr[0].images;
for(let i=0;i<imgArr.length;i++){
    let img = document.createElement("img");
    img.setAttribute("src",imgArr[i]);
    imgBox.append(img);
}

let s="";
let size = document.querySelectorAll(".sizes > div");
for(let i=0;i<size.length;i++){
    size[i].addEventListener("click",()=>{
        event.target.style.border="1px solid #ff3e6c";
        event.target.style.color="#ff3e6c";
        s+=event.target.innerText;
    });
}

document.querySelector("#clear").addEventListener("click",()=>{
    window.location.reload();
});

let bag = document.querySelector("#bag");

for(let i=0;i<bagArr.length;i++){
    if(bagArr[i].code == arr[0].code){
        bag.disabled="true";
        bag.innerText="Added to bag";
    }
}

bag.addEventListener("click",()=>{
    if(s=="S"||s=="M"||s=="L"||s=="XL"||s=="XXL"){
        arr[0]["size"]=s;
        bag.innerText="Added to bag";
        bag.disabled="true";
        alert(arr[0].name+" added to bag");
        arr[0].Qty=1;
        bagArr.push(arr[0]);
        localStorage.setItem("bag",JSON.stringify(bagArr));
    }
    else{
        alert("Select only one size.")
    }
    bagCount.innerText=bagArr.length;
});