fetch(`https://raw.githubusercontent.com/diyor011/apibest/master/api.json`)
.then(res => res.json())
.then(json =>Usersprint(json));





let mah=[]



const dad=document.getElementById("dad");

const btn=document.getElementById("btn");
const inp=document.getElementById("inp");
function Usersprint(users){
    dad.innerHTML=""
    mah=users;
    for(let i=0; i<users.length; i++){
        const box=document.createElement("div");
        let img=document.createElement("img");
        let h2=document.createElement("h2");
        let p=document.createElement("p");
        let h3=document.createElement("h3");

        box.classList.add("box");
       
       box.appendChild(img);
       box.appendChild(h2);
       box.appendChild(p);
       box.appendChild(h3);
       dad.appendChild(box);

       img.src=users[i]?.pic
       h2.textContent=users[i].name
       p.textContent=users[i].price
       h3.textContent=users[i].fulldesc

    }
}


btn.addEventListener("click",()=>{
    console.log(mah[0]);
   let qidirlgan=mah.filter(e=> e.name==inp.value);
    if(qidirlgan.length==0){
        dad.innerHTML="Mahsulot topilmadi!!";
    }else{
        Usersprint(qidirlgan)
    }
})